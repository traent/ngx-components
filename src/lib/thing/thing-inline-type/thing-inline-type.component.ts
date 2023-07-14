import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ApplyModule } from '../../apply/apply.module';
import { AvatarSize } from '../../avatar/avatar.component';
import { AvatarModule } from '../../avatar/avatar.module';
import { SkeletonModule } from '../../skeleton/skeleton.module';
import { ThingInfo } from '../thing.model';

@Component({
  selector: 'ngx-t3-thing-inline-type',
  templateUrl: './thing-inline-type.component.html',
  styleUrls: ['./thing-inline-type.component.scss'],
  standalone: true,
  imports: [
    ApplyModule,
    AvatarModule,
    CommonModule,
    MatIconModule,
    SkeletonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThingInlineTypeComponent {
  @Input() thingInfo?: ThingInfo;
  @Input() size: AvatarSize = 'xs';
}
