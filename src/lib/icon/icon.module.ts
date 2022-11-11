import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { IconComponent } from './icon.component';

@NgModule({
  declarations: [ IconComponent ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [ IconComponent ],
})
export class IconModule { }
