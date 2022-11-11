import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TagGroupComponent } from './tag-group/tag-group.component';
import { TagComponent } from './tag.component';

@NgModule({
  declarations: [
    TagComponent,
    TagGroupComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TagComponent,
    TagGroupComponent,
  ],
})
export class TagModule { }
