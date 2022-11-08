import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PreventClickPropagationDirective } from './prevent-click-propagation.directive';

@NgModule({
  declarations: [
    PreventClickPropagationDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PreventClickPropagationDirective,
  ],
})
export class PreventClickPropagationModule { }
