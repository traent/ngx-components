import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    AutofocusDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AutofocusDirective,
  ],
})
export class AutofocusModule { }
