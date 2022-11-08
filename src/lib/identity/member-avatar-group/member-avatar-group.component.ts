import { Component, HostBinding, Input } from '@angular/core';

import { AvatarPlaceholder } from '../../avatar/avatar.component';
import { IdentitySize } from '../identity.model';

@Component({
  selector: 'ngx-t3-member-avatar-group',
  templateUrl: './member-avatar-group.component.html',
  styleUrls: ['./member-avatar-group.component.scss'],
})
export class MemberAvatarGroupComponent {
  @Input() @HostBinding('class') size: IdentitySize = 'md';

  @Input() memberSrc: string | undefined | null;
  @Input() organizationSrc: string | undefined | null;
  @Input() squared = false;

  readonly AvatarPlaceholder = AvatarPlaceholder;
}
