import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxT3ListItemDirective } from './list-item.directive';
import { NgxT3ListComponent } from './list.component';

@NgModule({
  declarations: [
    NgxT3ListComponent,
    NgxT3ListItemDirective,
  ],
  imports: [
    CommonModule,
    A11yModule,
  ],
  exports: [
    NgxT3ListComponent,
    NgxT3ListItemDirective,
  ],
})
export class NgxT3ListModule {
}
