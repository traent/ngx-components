import { Pipe, PipeTransform } from '@angular/core';

import { Redactable, RedactedMarker } from './model';
import { isRedacted } from './utils';

@Pipe({ name: 'redacted' })
export class RedactedPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform<T>(v: Redactable<T>): v is typeof RedactedMarker {
    return isRedacted(v);
  }
}
