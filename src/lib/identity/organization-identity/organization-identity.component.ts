import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { AvatarPlaceholder } from '../../avatar/avatar.component';
import { IdentitySize } from '../identity.model';

@Component({
  selector: 'ngx-t3-organization-identity',
  templateUrl: './organization-identity.component.html',
  styleUrls: ['./organization-identity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationIdentityComponent {
  @Input() @HostBinding('class') size: IdentitySize = 'md';
  @Input() @HostBinding('class.has-border') hasBorder = false;

  @Input() src: string | undefined | null;
  @Input() squared = true;

  @Input() firstLine: string | undefined | null;
  @Input() secondLine: string | undefined | null;
  @Input() anonymousLabel = 'Anonymous organization';

  readonly AvatarPlaceholder = AvatarPlaceholder;

  get isDataReady() {
    return this.firstLine !== null && this.src !== null;
  }

  get isRedacted() {
    return this.firstLine === undefined;
  }
}
