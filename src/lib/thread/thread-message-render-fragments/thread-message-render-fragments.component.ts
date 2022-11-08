import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

import { MaterialOrCustomIcon } from '../../icon/icon.component';

export enum MessageFragmentType { Simple, Rich, Identity }

export type MessageFragment = {
  class: string;
  icon: MaterialOrCustomIcon;
  kind: MessageFragmentType.Rich;
  label: Observable<string>;
  value: string;
  /** Generic data used for parent component when click on a fragment */
  additionalData: any;
} | {
  text: string;
  kind: MessageFragmentType.Simple;
} | {
  marker: string;
  data: any;
  template: TemplateRef<any>;
  kind: MessageFragmentType.Identity;
};

@Component({
  selector: 'ngx-t3-thread-message-render-fragments',
  templateUrl: './thread-message-render-fragments.component.html',
  styleUrls: ['./thread-message-render-fragments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreadMessageRenderFragmentsComponent {
  @Input() fragments: MessageFragment[] = [];
  @Input() mode: 'complete' | 'reduced' = 'complete';

  @Output() readonly fragmentSelect = new EventEmitter<MessageFragment>();

  readonly MessageFragmentType = MessageFragmentType;
}
