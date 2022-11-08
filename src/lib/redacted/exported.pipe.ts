import { Pipe, PipeTransform } from '@angular/core';

import { Redactable } from './model';
import { isRedacted } from './utils';

@Pipe({ name: 'exported' })
export class ExportedPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform<T>(v: Redactable<T>): v is T {
    return !isRedacted(v);
  }
}
