import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ApplyModule } from '../../apply/apply.module';
import { AvatarPlaceholder, AvatarSize } from '../../avatar/avatar.component';
import { AvatarModule } from '../../avatar/avatar.module';
import { FieldValueModule } from '../../field-value/field-value.module';
import { SkeletonModule } from '../../skeleton/skeleton.module';
import { ThingInfo } from '../thing.model';

@Component({
  selector: 'ngx-t3-thing-avatar',
  templateUrl: './thing-avatar.component.html',
  styleUrls: ['./thing-avatar.component.scss'],
  standalone: true,
  imports: [
    ApplyModule,
    AvatarModule,
    CommonModule,
    FieldValueModule,
    MatIconModule,
    SkeletonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThingAvatarComponent {
  @Input() thingAvatar?: string | null;
  @Input() thingOrganizationLogo?: string | null;
  @Input() thingInfo?: ThingInfo | null;

  @Input() size: AvatarSize = 'sm';

  readonly AvatarPlaceholder = AvatarPlaceholder;

  get isDataReady(): boolean {
    return this.thingOrganizationLogo !== null && this.thingInfo !== null;
  }
}
