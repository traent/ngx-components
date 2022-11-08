import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AcksStatusStyleDirective } from './acks-status-style.directive';

@NgModule({
  declarations: [
    AcksStatusStyleDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AcksStatusStyleDirective,
  ],
})
export class AcksModule { }
