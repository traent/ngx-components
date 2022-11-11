import { PDFDocumentProxy } from 'pdfjs-dist/types/display/api';

import { Acrofield, AcrofieldType, Annotation } from '../models/acrofield';
import { AcrofieldPdfAnchor, AcrofieldPdfAnchorV0 } from '../models/pdf-anchor';

export const getPdfAnnotations = async (pdf: PDFDocumentProxy) => {
  const annotations = [];
  for (let i = 0; i < pdf.numPages; i++) {
    const page = await pdf.getPage(i + 1);
    const pageAnnotations = await page.getAnnotations();
    annotations.push(...pageAnnotations);
  }
  return annotations;
};

export const getAcrofieldType = (annotation: Annotation): AcrofieldType => {
  if (annotation.fieldType === 'Tx') {
    if ((annotation.actions?.Format || []).some((format: any) => typeof format === 'string' && format.includes('AFDate'))) {
      return AcrofieldType.Date;
    }
    return annotation.multiLine ? AcrofieldType.TextArea : AcrofieldType.TextInput;
  }
  if (annotation.fieldType === 'Btn' && annotation.checkBox === true) {
    return AcrofieldType.Checkbox;
  }
  if (annotation.fieldType === 'Btn' && annotation.radioButton === true) {
    return AcrofieldType.Radio;
  }
  if (annotation.fieldType === 'Ch' && annotation.multiSelect) {
    return AcrofieldType.List;
  }
  if (annotation.fieldType === 'Ch') {
    return AcrofieldType.Select;
  }
  return AcrofieldType.Unknown;
};

export const getAcrofieldValue = (annotation: Annotation): any => {
  const type = getAcrofieldType(annotation);
  if (type === AcrofieldType.Checkbox) {
    return annotation.fieldValue === 'Yes';
  }
  return annotation.fieldValue;
};

export const getAcrofieldAllowedValues = (annotation: Annotation) =>
  annotation.options?.map((option: any) => option.displayValue);

export const isAnnotationSupported = (annotation: any) => getAcrofieldType(annotation) !== AcrofieldType.Unknown;

/**
 * Internal function to get the number of supported and unsupported acrofields
 *
 * @param pdf @{PDFDocumentProxy} the pdf document
 * @returns A promise that resolves to a tuple containing the number of supported (first element) and unsupported acrofields (second one).
 */
export const getSupportedAcrofieldCount = async (pdf: PDFDocumentProxy): Promise<[number, number]> => {
  const annotations = await getPdfAnnotations(pdf);
  return annotations.reduce(
    ([supported, unsupported], annotation) =>
      isAnnotationSupported(annotation) ? [supported + 1, unsupported] : [supported, unsupported + 1],
    [0, 0],
  );
};

export const makeAcrofieldFromAnchor = (anchor: AcrofieldPdfAnchor): Acrofield => {
  const { annotation } = anchor;

  if (annotation === undefined) {
    return makeAcrofieldFromV0Anchor(anchor as AcrofieldPdfAnchorV0);
  }

  const { fieldName, defaultValue } = annotation;
  const fieldType = getAcrofieldType(annotation);
  const fieldValue = getAcrofieldValue(annotation);
  const allowedValues = getAcrofieldAllowedValues(annotation);

  return { annotation, fieldName, fieldType, fieldValue, defaultValue, allowedValues };
};

/**
 * Get value for ngx-t3-pdf-acrofield-control
 *
 * @param annotation
 * @param annotationValue
 * @returns value
 */
export const getPDFAcrofieldControlValue = (acrofield: Acrofield, annotationValue: any): any => {
  switch (acrofield.fieldType) {
    case AcrofieldType.Radio:
      return annotationValue === acrofield.annotation.buttonValue;
    default:
      return annotationValue;
  }
};

/**
 * Restore Annotation value from ngx-t3-pdf-acrofield-control value
 *
 * @param annotation
 * @param pdfAcrofieldControlValue
 * @returns annotation value
 */
export const restoreAnnotationValue = (acrofield: Acrofield, pdfAcrofieldControlValue: any): any => {
  switch (acrofield.fieldType) {
    case AcrofieldType.Radio:
      return acrofield.annotation.buttonValue;
    default:
      return pdfAcrofieldControlValue;
  }
};

const makeAcrofieldFromV0Anchor = (anchor: AcrofieldPdfAnchorV0): Acrofield => {
  const { id, rect, options, fieldType: type, ...rest } = anchor.acrofield;
  let fieldType: AcrofieldType;
  switch (type) {
    case 'text': fieldType = AcrofieldType.TextInput; break;
    case 'boolean': fieldType = AcrofieldType.Checkbox; break;
    case 'dropdown': fieldType = AcrofieldType.Select; break;
    case 'custom': fieldType = AcrofieldType.Unknown; break;
  }

  return {
    ...rest,
    annotation: { id, rect },
    fieldType,
    allowedValues: options?.allowedValues,
  };
};
