import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Redactable } from '../../../redacted/model';

@Component({
  selector: 'ngx-t3-stream-radio-rendering',
  templateUrl: './stream-radio-rendering.component.html',
  styleUrls: ['./stream-radio-rendering.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamRadioRenderingComponent {

  @Input() allowedValues: string[] = [];
  @Input() value: Redactable<any>;
  @Input() redactedValueLabel?: string;

}
