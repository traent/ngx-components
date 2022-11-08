import { Inject, Injectable, Optional } from '@angular/core';

import { TimeAgoPipeConfig, TIME_AGO_PIPE_CONFIG } from './time-ago.config';

@Injectable()
export class TimeAgoConfigService {

  private config: TimeAgoPipeConfig;

  constructor(
    @Optional() @Inject(TIME_AGO_PIPE_CONFIG) config?: TimeAgoPipeConfig,
  ) {
    this.config = config || {
      yesterdayLabel: 'yesterday',
      todayLabel: 'today',
      currentLang: 'en',
    };
  }

  updateConfig(config: Partial<TimeAgoPipeConfig>) {
    this.config = { ...this.config, ...config };
  }

  getConfig(): TimeAgoPipeConfig {
    return this.config;
  }

}
