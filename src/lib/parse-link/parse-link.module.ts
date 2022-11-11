import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ParseLinkPipe } from './parse-link.pipe';

@NgModule({
  declarations: [
    ParseLinkPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ParseLinkPipe,
  ],
  providers: [
    ParseLinkPipe,
  ],
})
export class ParseLinkModule {}
