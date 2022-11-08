import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApplyPipe } from './apply.pipe';

@NgModule({
  declarations: [
    ApplyPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ApplyPipe,
  ],
})
export class ApplyModule {}
