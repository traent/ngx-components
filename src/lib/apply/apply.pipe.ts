import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transforms the value using the function given as argument, which is assumed to be pure.
 * Any extra arguments are also passed to the function, after the value.
 *
 * Use this pipe to apply an arbitrary transformation function (e.g., defined in the component),
 * with the guarantee that the function is invoked only once when the value changes (or the extra arguments).
 */
@Pipe({
  name: 'apply',
})
export class ApplyPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform<T, U, TExtra extends unknown[]>(value: T, transformer: (x: T, ...extra: TExtra) => U, ...extraArgs: TExtra): U {
    return transformer(value, ...extraArgs);
  }
}
