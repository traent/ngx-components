import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'noValueLabel' })
export class NoValueLabelPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value?: string, customLabel?: string): string {
    return value || (customLabel ?? '-');
  }
}
