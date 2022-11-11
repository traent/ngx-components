import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { RightSidebarComponent } from './right-sidebar.component';

@NgModule({
  declarations: [
    RightSidebarComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    RightSidebarComponent,
  ],
})
export class RightSidebarModule { }
