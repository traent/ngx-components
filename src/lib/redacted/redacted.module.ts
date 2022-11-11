import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExportedAndDefinedPipe } from './exported-and-defined.pipe';
import { ExportedPipe } from './exported.pipe';
import { RedactedOrUndefinedPipe } from './redacted-or-undefined.pipe';
import { RedactedPipe } from './redacted.pipe';

@NgModule({
  declarations: [
    ExportedPipe,
    ExportedAndDefinedPipe,
    RedactedPipe,
    RedactedOrUndefinedPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ExportedPipe,
    ExportedAndDefinedPipe,
    RedactedPipe,
    RedactedOrUndefinedPipe,
  ],
})
export class RedactedModule { }
