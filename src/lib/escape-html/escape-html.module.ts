import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EscapeHtmlPipe } from './escape-html.pipe';

@NgModule({
  declarations: [
    EscapeHtmlPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EscapeHtmlPipe,
  ],
})
export class EscapeHtmlModule { }
