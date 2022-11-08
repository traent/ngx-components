import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuRouterItemComponent } from './menu-router-item/menu-router-item.component';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent,
    MenuRouterItemComponent,
  ],
  imports: [
    MatButtonModule,
  ],
  exports: [
    MenuComponent,
    MenuItemComponent,
    MenuRouterItemComponent,
  ],
})
export class MenuModule {}
