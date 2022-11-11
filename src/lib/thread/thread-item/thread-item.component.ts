import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Redactable } from '../../redacted/model';

@Component({
  selector: 'ngx-t3-thread-item',
  templateUrl: './thread-item.component.html',
  styleUrls: ['./thread-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreadItemComponent {
  @Input() name?: Redactable<string> | null;
  @Input() lastEditedAt?: string | null;

  @Input() resolved = false;

  @Input() showNotification = false;
  @Input() showBorder = true;

  get isDataReady() {
    return this.name !== null && this.lastEditedAt !== null;
  }
}
