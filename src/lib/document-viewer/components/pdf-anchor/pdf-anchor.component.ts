import { Component, ElementRef, Input } from '@angular/core';

import { PdfAnchor, PageRect } from '../../models/pdf-anchor';

@Component({
  selector: 'ngx-t3-pdf-anchor',
  templateUrl: './pdf-anchor.component.html',
  styleUrls: ['./pdf-anchor.component.scss'],
})
export class PdfAnchorComponent {
  @Input() anchor?: PdfAnchor;
  @Input() pages: PageRect[] = [];
  @Input() clickable = false;

  get pageIndex(): number {
    switch (this.anchor?.type) {
      case 'point':
      case 'acrofield':
        return this.anchor.pageNumber - 1;
      case 'text-selection':
        return this.anchor.ranges[0].blocks[0].pageNumber - 1;
      default:
        return NaN;
    }
  }

  get pointerY(): number {
    return this.anchor?.y ?? NaN;
  }

  get pointerX(): number {
    return this.anchor?.x ?? NaN;
  }

  constructor(readonly elementRef: ElementRef) {
  }
}
