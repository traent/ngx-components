import { Component, Input, Output, EventEmitter } from '@angular/core';

interface TooltipDetails {
  streamsTooltip: string;
  threadsTooltip: string;
  versionsTooltip: string;
};

const DEFAULT_TOOLTIP_DETAILS: TooltipDetails = {
  streamsTooltip: 'Streams',
  threadsTooltip: 'Threads',
  versionsTooltip: 'Version',
};

@Component({
  selector: 'ngx-t3-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss'],
})
export class DocumentCardComponent {
  @Input() addDocumentLabel = 'Upload document';
  @Input() contentType?: 'PDF' | 'Image' | 'Generic' | 'Video' | 'FORM' | 'View' | null;
  @Input() extension?: string | null;
  @Input() isPlaceholder = false;
  @Input() isSelected = false;
  @Input() isReadonly = false;
  @Input() name?: string | null;
  @Input() redactedLabel = 'Redacted document';
  @Input() streamsCount?: number | null;
  @Input() threadsCount?: number | null;
  @Input() tagsCount?: number | null;
  @Input() thumbnail?: string | null = '/assets/images/document-placeholder.svg';
  @Input() versionsCount?: number | null;

  @Output() readonly placeholderSelect = new EventEmitter<void>();
  readonly redactedThumbnail = '/assets/images/document-redacted.svg';

  private _tooltips: TooltipDetails = DEFAULT_TOOLTIP_DETAILS;
  @Input() set tooltips(labels: Partial<TooltipDetails>) {
    this._tooltips = { ...DEFAULT_TOOLTIP_DETAILS, ...labels };
  }
  get tooltips(): TooltipDetails {
    return this._tooltips;
  }

  get isDataReady(): boolean {
    return this.name !== null && this.contentType !== null && this.thumbnail !== null
      && this.extension !== null && this.threadsCount !== null && this.streamsCount !== null && this.versionsCount !== null;
  }

  get isRedacted(): boolean {
    return this.name === undefined;
  }
}
