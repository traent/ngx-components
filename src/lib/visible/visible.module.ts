import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VisibleDirective } from './visible.directive';

@NgModule({
  declarations: [
    VisibleDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    VisibleDirective,
  ],
})
export class VisibleModule { }
