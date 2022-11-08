import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-t3-menu',
  template: `
    <ng-content></ng-content>
  `,
  styles: [``],
})
export class MenuComponent<T> {
  @Input() secondary = false;
  @Input() value?: T;

  @Output() readonly valueChange = new EventEmitter<T>();
}
