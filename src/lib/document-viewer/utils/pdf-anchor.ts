import { createArray, last, required, unreachable } from '@traent/ts-utils';
import { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist/types/display/api';

import {
  AcrofieldPdfAnchorV1,
  PdfAnchor,
  PdfTextBlock,
  PdfTextLine,
  PdfTextRange,
  SelectionCaretInfo,
  SelectionRangeInfo,
} from '../models/pdf-anchor';

export const getAnchorFromAnnotation = (annotation: any, index: number, page: PDFPageProxy): AcrofieldPdfAnchorV1 => {
  const { pageNumber } = page;
  const [x1, y1, x2, y2] = page.view;
  const width = x2 - x1;
  const height = y2 - y1;
  const { rect } = annotation;

  return {
    type: 'acrofield',
    annotation,
    index,
    pageNumber,
    x: rect[0] / width,
    y: (height - rect[3]) / height,
    width: (rect[2] - rect[0]) / width,
    height: (rect[3] - rect[1]) / height,
  };
};

export const pointerToAnchor = (pageEl: HTMLElement, pageNumber: number, ev: MouseEvent): PdfAnchor => {
  const { left, top, width, height } = pageEl.getBoundingClientRect();
  const x = (ev.clientX - left) / width;
  const y = (ev.clientY - top) / height;
  return { pageNumber, x, y, type: 'point' };
};

/** Get a normalized representation of selection range start/end. */
export const getSelectionCaret = (range: Range, start: boolean): SelectionCaretInfo => {
  range.collapse(start);

  const container = range.startContainer;
  const offset = range.startOffset;

  // Base case: the caret is inside a text node
  if (container instanceof Text) {
    const div = container.parentElement;
    required(div);
    if (!div.dataset.text) {
      unreachable(`[document-viewer] selection caret is in unknown text node`);
    }

    const { x } = range.getBoundingClientRect();
    const { left, width } = div.getBoundingClientRect();

    return {
      pageNumber: Number(div.dataset.page),
      lineIndex: Number(div.dataset.index),
      column: offset,
      x: (x - left) / width,
    };
  }

  // Corner case: the caret is not inside a text node
  if (container instanceof Element) {
    // Assume the container is an element with only one child, which is ensured by our DOM
    if (offset !== 0 && offset !== null || container.childNodes.length !== 1) {
      unreachable(`[document-viewer] selection caret is in element with multiple children`);
    }
    required(container.firstChild);
    range.selectNodeContents(container.firstChild);
    // Recurse one level down
    return getSelectionCaret(range, start);
  }

  unreachable(`[document-viewer] selection caret container is neither Text nor Element`);
};


export const createSelectedTextRange = async (range: SelectionRangeInfo, pdf: PDFDocumentProxy): Promise<PdfTextRange> => {
  const { start, end } = range;
  const blocks = await Promise.all(createArray<Promise<PdfTextBlock>>(end.pageNumber - start.pageNumber + 1, async (i) =>
    createSelectedTextBlock(range, pdf, start.pageNumber + i),
  ));
  return { start: { column: start.column, x: start.x }, end: { column: end.column, x: end.x }, blocks };
};

export const createSelectedTextBlock = async (
  range: SelectionRangeInfo,
  pdf: PDFDocumentProxy,
  pageNumber: number,
): Promise<PdfTextBlock> => {
  const { start, end } = range;
  const page = await pdf.getPage(pageNumber);
  const textContent = await page.getTextContent();
  const firstLineIndex = pageNumber === start.pageNumber ? start.lineIndex : 0;
  const lastLineIndex = pageNumber === end.pageNumber ? end.lineIndex : textContent.items.length - 1;

  const [x1, y1, x2, y2] = page.view;
  const pageWidth = x2 - x1;
  const pageHeight = y2 - y1;

  return {
    pageNumber,
    lines: createArray<PdfTextLine>(lastLineIndex - firstLineIndex + 1, (j) => {
      const lineIndex = firstLineIndex + j;
      const line = textContent.items[lineIndex];
      return {
        lineIndex,
        text: line.str,
        left: line.transform[4] / pageWidth,
        top: (pageHeight - line.height - line.transform[5]) / pageHeight,
        height: line.height / pageHeight,
        width: line.width / pageWidth,
      };
    }),
  };
};

export const getAnchorFromSelection = async (
  pdf: PDFDocumentProxy,
  incomingRanges: SelectionRangeInfo[],
): Promise<PdfAnchor> => {
  const ranges = await Promise.all(incomingRanges.map(async (range) => createSelectedTextRange(range, pdf)));

  const lastRange = last(ranges);
  const lastBlock = last(lastRange?.blocks);
  required(lastRange);
  required(lastBlock);
  const lastLine = last(lastBlock.lines);
  required(lastLine);

  return {
    type: 'text-selection',
    pageNumber: lastBlock.pageNumber,
    x: lastLine.left + lastLine.width * lastRange.end.x,
    y: lastLine.top + (lastLine.height / 2),
    ranges,
  };
};
