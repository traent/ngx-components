import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClickToCopyDirective } from './click-to-copy.directive';

@NgModule({
  declarations: [
    ClickToCopyDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ClickToCopyDirective,
  ],
})
export class ClickToCopyModule { }
