import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

type DetailsSize = 'sm' | 'md';

interface TooltipDetails {
  streamsTooltip: string;
  threadsTooltip: string;
  versionsTooltip: string;
  tagsTooltip: string;
};

const DEFAULT_TOOLTIP_DETAILS: TooltipDetails = {
  streamsTooltip: 'Streams',
  threadsTooltip: 'Threads',
  versionsTooltip: 'Version',
  tagsTooltip: 'Tags',
};

@Component({
  selector: 'ngx-t3-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentDetailsComponent {
  @Input() @HostBinding('class') size: DetailsSize = 'md';
  @Input() extension?: string | null;
  @Input() streamsCount?: number | null;
  @Input() threadsCount?: number | null;
  @Input() tagsCount?: number | null;
  @Input() versionsCount?: number | null;

  get isDataReady(): boolean {
    return this.extension !== null && this.threadsCount !== null && this.streamsCount !== null && this.versionsCount !== null;
  }

  private _tooltips: TooltipDetails = DEFAULT_TOOLTIP_DETAILS;
  @Input() set tooltips(labels: Partial<TooltipDetails>) {
    this._tooltips = { ...DEFAULT_TOOLTIP_DETAILS, ...labels };
  }
  get tooltips(): TooltipDetails {
    return this._tooltips;
  }
}
