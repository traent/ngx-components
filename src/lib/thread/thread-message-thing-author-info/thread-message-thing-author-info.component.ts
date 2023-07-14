import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AvatarSize } from '../../avatar/avatar.component';
import { SkeletonModule } from '../../skeleton/skeleton.module';
import { ThingAvatarComponent } from '../../thing/thing-avatar/thing-avatar.component';
import { ThingInfo } from '../../thing/thing.model';

interface LabelsConfig {
  noName: string;
};

const DEFAULT_LABELS_CONFIG = {
  noName: 'Private information',
};

@Component({
  selector: 'ngx-t3-thread-message-thing-author-info',
  templateUrl: './thread-message-thing-author-info.component.html',
  styleUrls: ['./thread-message-thing-author-info.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SkeletonModule,
    ThingAvatarComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreadMessageThingAuthorInfoComponent {
  @Input() thingName?: string | null;
  @Input() thingAvatar?: string | null;
  @Input() thingOrganizationLogo?: string | null;
  @Input() thingInfo?: ThingInfo | null;

  @Input() avatarSize: AvatarSize = 'xs';

  private _labels: LabelsConfig = DEFAULT_LABELS_CONFIG;
  @Input() set labels(labels: LabelsConfig) {
    this._labels = { ...DEFAULT_LABELS_CONFIG, ...labels };
  }
  get labels(): LabelsConfig {
    return this._labels;
  }

  get isDataReady(): boolean {
    return this.thingName !== null && this.thingOrganizationLogo !== null;
  }
}
