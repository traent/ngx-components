import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NoValueLabelPipe } from './no-value-label.pipe';

@NgModule({
  declarations: [
    NoValueLabelPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NoValueLabelPipe,
  ],
})
export class NoValueLabelModule { }
