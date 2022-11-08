import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DescriptionItemComponent } from './description-item/description-item.component';
import { DescriptionsComponent } from './descriptions.component';

@NgModule({
  declarations: [
    DescriptionsComponent,
    DescriptionItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DescriptionsComponent,
    DescriptionItemComponent,
  ],
})
export class DescriptionsModule { }
