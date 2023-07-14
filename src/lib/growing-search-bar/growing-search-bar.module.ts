import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { GrowingSearchBarComponent } from './growing-search-bar.component';
import { AutofocusModule } from '../autofocus/autofocus.module';
import { SearchBarModule } from '../search-bar/search-bar.module';

@NgModule({
  declarations: [
    GrowingSearchBarComponent,
  ],
  imports: [
    AutofocusModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    SearchBarModule,
  ],
  exports: [
    GrowingSearchBarComponent,
  ],
})
export class GrowingSearchBarModule { }
