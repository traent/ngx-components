import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PreventClickPropagationModule } from '../prevent-click-propagation/prevent-click-propagation.module';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { TagModule } from '../tag/tag.module';
import { DocumentCardComponent } from './document-card/document-card.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { DocumentItemComponent } from './document-item/document-item.component';

@NgModule({
  declarations: [
    DocumentCardComponent,
    DocumentDetailsComponent,
    DocumentItemComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    SkeletonModule,
    PreventClickPropagationModule,
    TagModule,
  ],
  exports: [
    DocumentCardComponent,
    DocumentDetailsComponent,
    DocumentItemComponent,
  ],
})
export class DocumentModule { }
