import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '../icon/icon.module';
import { WelcomeItemComponent } from './welcome-item.component';

@NgModule({
  declarations: [ WelcomeItemComponent ],
  imports: [
    CommonModule,
    IconModule,
  ],
  exports: [ WelcomeItemComponent ],
})
export class WelcomeItemModule { }
