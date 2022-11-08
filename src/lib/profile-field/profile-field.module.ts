import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileFieldComponent } from './profile-field.component';


@NgModule({
  declarations: [
    ProfileFieldComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProfileFieldComponent,
  ],
})
export class ProfileFieldModule { }
