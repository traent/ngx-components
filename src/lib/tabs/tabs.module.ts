import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TabItemComponent } from './tab-item/tab-item.component';
import { TabsComponent } from './tabs.component';

const components = [
  TabsComponent,
  TabItemComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...components,
  ],
})
export class TabsModule { }
