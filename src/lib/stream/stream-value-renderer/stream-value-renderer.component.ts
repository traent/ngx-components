import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { StreamEntryType } from '../../org-types/streams/streams';
import { Redactable } from '../../redacted/model';
import { isRedactedOrUndefined } from '../../redacted/utils';

export const formatStreamValue = (value: any, type: string, configuration?: any): string | undefined => {
  if (value === undefined) {
    return;
  }

  switch (type) {
    case StreamEntryType.Currency: return `${(+value).toFixed(2)} ${configuration.symbol}`;
    case StreamEntryType.Number: return (+value).toFixed(2);
    case StreamEntryType.Date: return new Date(value).toLocaleString();
    case StreamEntryType.MultiSelect: return Array.isArray(value) ? value.join(', ') : '';
    case StreamEntryType.Text:
    case StreamEntryType.Uri:
    case StreamEntryType.Dropdown:
      return value;
    default: return JSON.stringify(value);
  }
};

interface LabelsConfig {
  noValueLabel: string;
  linkClickTooltipLabel: string;
  truthyCheckboxLabel: string;
  falsyCheckboxLabel: string;
  redactedValueLabel: string;
};

const DEFAULT_INPUT_LABELS: LabelsConfig = {
  noValueLabel: 'No value',
  linkClickTooltipLabel: 'Click to open in new tab',
  falsyCheckboxLabel: 'unchecked',
  truthyCheckboxLabel: 'checked',
  redactedValueLabel: 'Redacted',
};

@Component({
  selector: 'ngx-t3-stream-value-renderer',
  templateUrl: './stream-value-renderer.component.html',
  styleUrls: ['./stream-value-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamValueRendererComponent {
  private _labels: LabelsConfig = DEFAULT_INPUT_LABELS;
  @Input() set labels(labels: Partial<LabelsConfig>) {
    this._labels = { ...DEFAULT_INPUT_LABELS, ...labels };
  }
  get labels(): LabelsConfig {
    return this._labels;
  }

  @Input() value: Redactable<any>;
  @Input() type?: Redactable<string> = StreamEntryType.Json;
  @Input() configuration: any;
  @Input() @HostBinding('class.multiline') multiline = true;
  @Input() rendererType: 'radio' | 'default' = 'default';

  readonly StreamEntryType = StreamEntryType;
  readonly formatStreamValue = formatStreamValue;

  get innerType(): string {
    return isRedactedOrUndefined(this.type) ? StreamEntryType.Json : this.type;
  }
}
