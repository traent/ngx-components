import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AvatarGroupComponent } from './avatar-group/avatar-group.component';
import { AvatarComponent } from './avatar.component';
import { SkeletonModule } from '../skeleton/skeleton.module';

@NgModule({
  declarations: [
    AvatarComponent,
    AvatarGroupComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    SkeletonModule,
  ],
  exports: [
    AvatarComponent,
    AvatarGroupComponent,
  ],
})
export class AvatarModule { }
