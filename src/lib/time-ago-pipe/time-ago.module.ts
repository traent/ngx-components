import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';

import { TimeAgoConfigService } from './time-ago-config.service';
import { TimeAgoPipeConfig, TIME_AGO_PIPE_CONFIG } from './time-ago.config';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [
    TimeAgoPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TimeAgoPipe,
  ],
})
export class TimeAgoPipeModule {
  static forRoot(init: {
    config?: TimeAgoPipeConfig;
    initializer?: Provider;
  }): ModuleWithProviders<TimeAgoPipeModule> {
    return {
      ngModule: TimeAgoPipeModule,
      providers: [
        TimeAgoConfigService,
        init.initializer || { provide: TIME_AGO_PIPE_CONFIG, useValue: init.config },
        TimeAgoPipe,
      ],
    };
  }
}
