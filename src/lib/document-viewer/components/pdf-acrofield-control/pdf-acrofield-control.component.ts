import { Component, Input, Output } from '@angular/core';
import { isNotNullOrUndefined } from '@traent/ts-utils';
import { Subject } from 'rxjs';

import { AcrofieldType } from '../../models/acrofield';
import { DocumentZoomValue } from '../viewer-toolbar/viewer-toolbar.component';

@Component({
  selector: 'ngx-t3-pdf-acrofield-control',
  templateUrl: './pdf-acrofield-control.component.html',
  styleUrls: ['./pdf-acrofield-control.component.scss'],
})
export class PdfAcrofieldControlComponent {
  @Input() editable = false;
  @Input() allowedValues?: any[];
  @Input() type?: AcrofieldType;
  @Input() value: any;
  @Input() zoom: DocumentZoomValue = 1;
  @Input() redactedValue = 'REDACTED';

  readonly _innerValue$ = new Subject<any>();
  @Output() readonly valueChange = this._innerValue$.pipe(isNotNullOrUndefined());

  readonly AcrofieldType = AcrofieldType;
}
