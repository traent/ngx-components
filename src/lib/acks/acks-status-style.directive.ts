import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[acksStatusStyle]',
})
export class AcksStatusStyleDirective {
  @Input('acksStatusStyle') status?: 'none' | 'pending' | 'complete';

  @HostBinding('class.tw-text-neutral-400') get none(): boolean {
    return this.status === 'none';
  }
  @HostBinding('class.tw-text-orange') get pending(): boolean {
    return this.status === 'pending';
  }
  @HostBinding('class.tw-text-green') get complete(): boolean {
    return this.status === 'complete';
  }
}
