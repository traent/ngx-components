import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

import { AvatarSize } from '../avatar.component';

@Component({
  selector: 'ngx-t3-avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrls: ['./avatar-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarGroupComponent {
  @Input() count = 0;
  @Input() limit?: number;
  @Input() size: AvatarSize = 'md';

  @Output() readonly countClick = new EventEmitter<void>();
}
