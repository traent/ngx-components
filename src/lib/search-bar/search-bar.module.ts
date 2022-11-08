import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
  ],
  exports: [
    SearchBarComponent,
  ],
})
export class SearchBarModule {}
