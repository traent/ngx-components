import { Annotation } from './acrofield';

export interface PageRect {
  readonly top: number;
  readonly left: number;
  readonly height: number;
  readonly width: number;
}

export type AnchorMode = 'point' | 'text-selection';

export type PdfAnchor =
  | AcrofieldPdfAnchor
  | PointPdfAnchor
  | TextSelectionPdfAnchor;

export type AcrofieldPdfAnchor = AcrofieldPdfAnchorV1 | AcrofieldPdfAnchorV0;

export interface AcrofieldPdfAnchorV1 {
  readonly type: 'acrofield';
  readonly annotation: Annotation;
  readonly index: number;
  readonly pageNumber: number;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

/**
 * @legacy old acrofield anchor model for backward compatibility
 */
export type AcrofieldPdfAnchorV0 = AcrofieldPdfAnchorV1 & {
  annotation: never;
  acrofield: {
    id: string;
    index?: number;
    rect: [number, number, number, number];
    fieldName: string;
    fieldType: 'text' | 'boolean' | 'dropdown' | 'custom';
    fieldValue: any;
    options?: { allowedValues: string[] };
    defaultValue?: string;
  };
};

export interface PointPdfAnchor {
  readonly type: 'point';
  readonly pageNumber: number;
  readonly x: number;
  readonly y: number;
}

export interface TextSelectionPdfAnchor {
  readonly type: 'text-selection';
  readonly pageNumber: number;
  readonly x: number;
  readonly y: number;
  readonly ranges: PdfTextRange[];
}

export interface SelectionCaretInfo {
  pageNumber: number;
  lineIndex: number;
  column: number;
  x: number;
}

export interface SelectionRangeInfo {
  start: SelectionCaretInfo;
  end: SelectionCaretInfo;
}

/** A contiguous selection of text in a document. */
export interface PdfTextRange {
  /** Blocks of lines involved in selection, one per page. */
  readonly blocks: PdfTextBlock[];
  /** Start of the range, relative to the first line of the first block. */
  readonly start: PdfTextCaret;
  /** End of the range, relative to the last line of the last block. */
  readonly end: PdfTextCaret;
}

/** Start/end of a selection range, within a line */
export interface PdfTextCaret {
  /** Number of characters before the caret. */
  readonly column: number;
  /** Horizontal position within the line, as a percentage of the line width. */
  readonly x: number;
}

/** A range of consecutive lines from a single page. */
export interface PdfTextBlock {
  readonly pageNumber: number;
  readonly lines: PdfTextLine[];
}

/** A line of text in a page. */
export interface PdfTextLine {
  readonly text: string;
  readonly lineIndex: number;
  readonly top: number;
  readonly left: number;
  readonly height: number;
  readonly width: number;
}
