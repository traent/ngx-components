import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { RedactedMarker, RedactedType } from '../redacted/model';

@Component({
  selector: 'ngx-t3-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamComponent {
  @Input() name?: string | null | RedactedType = null;
  @Input() redactedLabel = 'Redacted stream';

  get isDataReady(): boolean {
    return this.name !== null;
  }

  get isRedacted(): boolean {
    return this.name === RedactedMarker || this.name === undefined;
  }
}
