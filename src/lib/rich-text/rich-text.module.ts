import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DrawRichTextDirective, TextComponent } from './draw-rich-text.directive';

@NgModule({
  declarations: [
    DrawRichTextDirective,
    TextComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DrawRichTextDirective,
  ],
})
export class RichTextModule {}
