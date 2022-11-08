import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AvatarPlaceholder, AvatarSize } from '../../avatar/avatar.component';

interface LabelsConfig {
  noName?: string;
};

const DEFAULT_LABELS_CONFIG: LabelsConfig = {
  noName: 'Redacted member name',
};

@Component({
  selector: 'ngx-t3-thread-message-author-info',
  templateUrl: './thread-message-author-info.component.html',
  styleUrls: ['./thread-message-author-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreadMessageAuthorInfoComponent {
  @Input() authorName?: string | null;
  @Input() authorAvatar?: string | null;
  @Input() authorOrganizationLogo?: string | null;

  @Input() avatarSize: AvatarSize = 'xs';

  private _labels: LabelsConfig = DEFAULT_LABELS_CONFIG;
  @Input() set labels(labels: LabelsConfig) {
    this._labels = { ...DEFAULT_LABELS_CONFIG, ...labels };
  }
  get labels(): LabelsConfig {
    return this._labels;
  }

  get isDataReady(): boolean {
    return this.authorName !== null && this.authorAvatar !== null && this.authorOrganizationLogo !== null;
  }

  readonly AvatarPlaceholder = AvatarPlaceholder;
}
