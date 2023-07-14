import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CopyToClipboardComponent } from './copy-to-clipboard.component';
import { ClickToCopyModule } from '../click-to-copy/click-to-copy.module';

@NgModule({
  declarations: [
    CopyToClipboardComponent,
  ],
  imports: [
    ClickToCopyModule,
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    CopyToClipboardComponent,
  ],
})
export class CopyToClipboardModule { }
