import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[ngxT3ValueChanged]',
})
export class ValueChangedDirective {
  @Input('ngxT3ValueChanged') changedKeys: string[] = [];
  @Input() keys: string[] = [];

  @HostBinding('class.changed') get changed(): boolean {
    return this.keys.some((key) => this.changedKeys.some((changedKey) => changedKey === key));
  }
}
