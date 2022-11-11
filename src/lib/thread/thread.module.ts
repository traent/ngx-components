import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';

import { AvatarModule } from '../avatar/avatar.module';
import { IconModule } from '../icon/icon.module';
import { RedactedModule } from '../redacted/redacted.module';
import { RichTextModule } from '../rich-text/rich-text.module';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { ThreadItemParticipantsComponent } from './thread-item-participants/thread-item-participants.component';
import { ThreadItemComponent } from './thread-item/thread-item.component';
import { ThreadMessageAuthorInfoComponent } from './thread-message-author-info/thread-message-author-info.component';
import { ThreadMessageRenderFragmentsComponent } from './thread-message-render-fragments/thread-message-render-fragments.component';
import {
  ThreadMessageWorkflowAuthorInfoComponent,
} from './thread-message-workflow-author-info/thread-message-workflow-author-info.component';
import { ThreadMessageComponent } from './thread-message/thread-message.component';

const icons = [
  ['thread-solved', 'assets/icons/thread-solved.svg'],
  ['thread-reference', 'assets/icons/thread-reference.svg'],
];

@NgModule({
  declarations: [
    ThreadItemComponent,
    ThreadItemParticipantsComponent,
    ThreadMessageAuthorInfoComponent,
    ThreadMessageComponent,
    ThreadMessageRenderFragmentsComponent,
    ThreadMessageWorkflowAuthorInfoComponent,
  ],
  imports: [
    AvatarModule,
    CommonModule,
    HttpClientModule,
    IconModule,
    MatIconModule,
    MatTooltipModule,
    RedactedModule,
    RichTextModule,
    SkeletonModule,
  ],
  exports: [
    ThreadItemComponent,
    ThreadItemParticipantsComponent,
    ThreadMessageAuthorInfoComponent,
    ThreadMessageComponent,
    ThreadMessageRenderFragmentsComponent,
    ThreadMessageWorkflowAuthorInfoComponent,
  ],
})
export class ThreadModule {
  constructor(
    sanitizer: DomSanitizer,
    matIconRegistry: MatIconRegistry,
  ) {
    icons.forEach(([name, path]) => matIconRegistry.addSvgIcon(name, sanitizer.bypassSecurityTrustResourceUrl(path)));
  }
}
