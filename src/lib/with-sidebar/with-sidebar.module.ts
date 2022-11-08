import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WithSidebarComponent } from './with-sidebar.component';

@NgModule({
  declarations: [
    WithSidebarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WithSidebarComponent,
  ],
})
export class WithSidebarModule {}
