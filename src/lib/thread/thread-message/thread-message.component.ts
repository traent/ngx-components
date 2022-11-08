import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

export enum ThreadMessageStatus {
  Sent,
  Delivered,
  Failed,
}

interface LabelsConfig {
  authenticity: string;
  isCopy: string;
  noCreatedAt?: string;
  notDelivered?: string;
  retry: string;
};

const DEFAULT_LABELS_CONFIG: LabelsConfig = {
  authenticity: 'The authenticity of this message could not be verified',
  isCopy: 'This message is a copy, the source thread is part of another project.',
  notDelivered: 'Not delivered',
  retry: 'Retry',
  noCreatedAt: 'Redacted date',
};

@Component({
  selector: 'ngx-t3-thread-message',
  templateUrl: './thread-message.component.html',
  styleUrls: ['./thread-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreadMessageComponent {
  @Input() message?: string | null;
  @Input() createdAt?: string | null;
  /** Message is not the original, but a copy from another source */
  @Input() isCopy = false;

  @Input() mode: 'complete' | 'reduced' = 'complete';

  @Input() status: ThreadMessageStatus = ThreadMessageStatus.Sent;

  private _labels: LabelsConfig = DEFAULT_LABELS_CONFIG;
  @Input() set labels(labels: Partial<LabelsConfig>) {
    this._labels = { ...DEFAULT_LABELS_CONFIG, ...labels };
  }
  get labels(): LabelsConfig {
    return this._labels;
  }

  @Output() readonly retry = new EventEmitter();

  @ContentChild('rendererTemplate', { read: TemplateRef }) customRendererMessageTemplate?: TemplateRef<any>;

  readonly ThreadMessageStatus = ThreadMessageStatus;

  get isDataReady(): boolean {
    return this.message !== null;
  }
}
