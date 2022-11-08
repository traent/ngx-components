import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Redactable } from '../../../redacted/model';

@Component({
  selector: 'ngx-t3-generic-viewer',
  templateUrl: './generic-viewer.component.html',
  styleUrls: ['./generic-viewer.component.scss'],
})
export class GenericViewerComponent {
  @Input() name?: Redactable<string>;
  @Input() fileTypeIcon?: Redactable<string>;
  @Input() fileTypeExtension?: Redactable<string>;

  @Output() readonly download = new EventEmitter();
}
