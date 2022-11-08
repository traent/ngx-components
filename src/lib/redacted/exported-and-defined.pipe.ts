import { Pipe, PipeTransform } from '@angular/core';

import { Redactable } from './model';
import { isExportedAndDefined } from './utils';

@Pipe({ name: 'exportedAndDefined' })
export class ExportedAndDefinedPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform<T>(v?: Redactable<T>): v is T {
    return isExportedAndDefined(v);
  }
}
