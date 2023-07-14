import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tooltipForLongValue',
  standalone: true,
})
export class TooltipForLongValue implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: string | null, maxLength = 20): string {
    return value?.length && value.length >= maxLength ? value : '';
  }
}
