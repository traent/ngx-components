import { Component, Input } from '@angular/core';

import { MenuComponent } from '../menu.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-t3-menu-item',
  templateUrl: './menu-item.component.html',
  styles: [],
})
export class MenuItemComponent<T> {
  @Input() value?: T;

  get active(): boolean {
    return this.value === this.menu.value;
  }

  constructor(readonly menu: MenuComponent<T>) {
  }

  click(): void {
    if (this.active) {
      return;
    }

    this.activate();
  }

  activate(): void {
    this.menu.value = this.value;
    this.menu.valueChange.emit(this.value);
  }
}
