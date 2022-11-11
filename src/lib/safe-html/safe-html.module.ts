import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SafeHtmlPipe,
  ],
})
export class SafeHtmlModule { }
