import { Pipe, PipeTransform } from '@angular/core';

import { Redactable, RedactedMarker } from './model';
import { isRedactedOrUndefined } from './utils';

@Pipe({ name: 'redactedOrUndefined' })
export class RedactedOrUndefinedPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform<T>(v: Redactable<T> | undefined): v is typeof RedactedMarker | undefined {
    return isRedactedOrUndefined(v);
  }
}
