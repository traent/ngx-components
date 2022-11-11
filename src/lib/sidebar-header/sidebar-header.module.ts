import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SidebarHeaderComponent } from './sidebar-header.component';

@NgModule({
  declarations: [
    SidebarHeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarHeaderComponent,
  ],
})
export class SidebarHeaderModule {}
