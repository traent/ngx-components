import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThrottleClickDirective } from './throttle-click.directive';

@NgModule({
  declarations: [ThrottleClickDirective],
  imports: [CommonModule],
  exports: [ThrottleClickDirective],
})
export class ThrottleClickModule { }
