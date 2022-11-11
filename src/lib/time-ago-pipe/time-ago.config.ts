import { InjectionToken } from '@angular/core';

export interface TimeAgoPipeConfig {
  todayLabel: string;
  yesterdayLabel: string;
  currentLang: string;
}

export const TIME_AGO_PIPE_CONFIG = new InjectionToken<TimeAgoPipeConfig>('TIME_AGO_PIPE_CONFIG');
