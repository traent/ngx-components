import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ClickToCopyModule } from '../click-to-copy/click-to-copy.module';
import { CopyToClipboardComponent } from './copy-to-clipboard.component';

@NgModule({
  declarations: [
    CopyToClipboardComponent,
  ],
  imports: [
    ClickToCopyModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    CopyToClipboardComponent,
  ],
})
export class CopyToClipboardModule { }
