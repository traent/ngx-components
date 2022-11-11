import { Component, Input } from '@angular/core';

import { MenuComponent } from '../menu.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-t3-menu-router-item',
  templateUrl: './menu-router-item.component.html',
  styles: [''],
})
export class MenuRouterItemComponent<T> {
  @Input() readonly disabled: boolean = false;

  constructor(readonly menu: MenuComponent<T>) {
  }
}
