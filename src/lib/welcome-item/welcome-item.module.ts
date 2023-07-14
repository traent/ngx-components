import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WelcomeItemComponent } from './welcome-item.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [ WelcomeItemComponent ],
  imports: [
    CommonModule,
    IconModule,
  ],
  exports: [ WelcomeItemComponent ],
})
export class WelcomeItemModule { }
