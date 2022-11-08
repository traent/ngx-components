import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ValueChangedDirective } from './value-changed.directive';

@NgModule({
  declarations: [
    ValueChangedDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ValueChangedDirective,
  ],
})
export class ValueChangedModule {}
