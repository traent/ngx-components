import { Component, HostBinding, Input } from '@angular/core';

import { IdentitySize } from '../identity.model';

@Component({
  selector: 'ngx-t3-member-identity',
  templateUrl: './member-identity.component.html',
  styleUrls: ['./member-identity.component.scss'],
})
export class MemberIdentityComponent {
  @Input() @HostBinding('class') size: IdentitySize = 'md';
  @Input() @HostBinding('class.has-border') hasBorder = false;

  @Input() memberSrc: string | undefined | null;
  @Input() organizationSrc: string | undefined | null;
  @Input() squared = false;

  @Input() firstLine: string | undefined | null;
  @Input() secondLine: string | undefined | null;
  @Input() anonymousLabel = 'Anonymous organization';

  get isDataReady() {
    return this.firstLine !== null && this.memberSrc !== null && this.organizationSrc !== null;
  }

  get isRedacted() {
    return this.firstLine === undefined;
  }
}
