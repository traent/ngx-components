import { Component, Input } from '@angular/core';

import { AvatarSize, WorkflowAvatar } from '../../avatar/avatar.component';

@Component({
  selector: 'ngx-t3-thread-message-workflow-author-info',
  templateUrl: './thread-message-workflow-author-info.component.html',
  styleUrls: ['./thread-message-workflow-author-info.component.scss'],
})
export class ThreadMessageWorkflowAuthorInfoComponent {
  @Input() authorName = 'Project Workflow Bot';
  @Input() avatarSize: AvatarSize = 'xs';

  readonly WorkflowAvatar = WorkflowAvatar;
}
