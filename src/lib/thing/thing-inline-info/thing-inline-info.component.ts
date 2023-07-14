import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ApplyModule } from '../../apply/apply.module';
import { AvatarSize } from '../../avatar/avatar.component';
import { AvatarModule } from '../../avatar/avatar.module';
import { FieldValueModule } from '../../field-value/field-value.module';
import { SkeletonModule } from '../../skeleton/skeleton.module';
import { ThingAvatarComponent } from '../thing-avatar/thing-avatar.component';
import { ThingInfo } from '../thing.model';

interface LabelsConfig {
  noName: string;
};

const DEFAULT_LABELS_CONFIG: LabelsConfig = {
  noName: 'Private information',
};

@Component({
  selector: 'ngx-t3-thing-inline-info',
  templateUrl: './thing-inline-info.component.html',
  styleUrls: ['./thing-inline-info.component.scss'],
  standalone: true,
  imports: [
    ApplyModule,
    AvatarModule,
    CommonModule,
    FieldValueModule,
    MatIconModule,
    SkeletonModule,
    ThingAvatarComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThingInlineInfoComponent {
  @Input() @HostBinding('class.has-border') hasBorder = false;
  @Input() thingName?: string | null;
  @Input() thingAvatar?: string | null;
  @Input() thingOrganizationLogo?: string | null;
  @Input() thingInfo?: ThingInfo | null;

  @Input() size: AvatarSize = 'xs';

  private _labels: LabelsConfig = DEFAULT_LABELS_CONFIG;
  @Input() set labels(labels: LabelsConfig) {
    this._labels = { ...DEFAULT_LABELS_CONFIG, ...labels };
  }
  get labels(): LabelsConfig {
    return this._labels;
  }

  get isDataReady(): boolean {
    return this.thingInfo !== null && this.thingName !== null && this.thingOrganizationLogo !== null;
  }
}
