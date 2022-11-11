import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PointerInnerClickDirective } from './pointer-inner-click.directive';

@NgModule({
  declarations: [
    PointerInnerClickDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PointerInnerClickDirective,
  ],
})
export class PointerInnerClickModule {}
