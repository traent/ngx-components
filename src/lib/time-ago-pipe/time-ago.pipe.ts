import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

import { TimeAgoConfigService } from './time-ago-config.service';

type DateFormat = 'short' | 'middle' | 'long';
type TimeFormat = '12hrs' | '24hrs';

@Pipe({ name: 'ago' })
export class TimeAgoPipe implements PipeTransform {

  constructor(private readonly timeAgoConfigService: TimeAgoConfigService) { }

  transform(value: Date | string | number, now?: number | null, dateFormat: DateFormat = 'long', timeFormat: TimeFormat = '24hrs'): string {
    // FIXME: This config should be get again if the config changes
    const config = this.timeAgoConfigService.getConfig();

    const valueDate = DateTime.fromJSDate(new Date(value));
    const nowDate = DateTime.fromMillis(now || Date.now());
    const timeStr = valueDate.toFormat(timeFormat === '12hrs' ? 't' : 'T');
    const currentLang = config?.currentLang || 'en';

    if (valueDate.hasSame(nowDate, 'day')) {
      return dateFormat === 'short' ? timeStr : `${config.todayLabel}, ${timeStr}`;
    }
    if (valueDate.hasSame(nowDate.minus({ day: 1 }), 'day')) {
      return dateFormat === 'short'
        ? config.yesterdayLabel
        : `${config.yesterdayLabel}, ${timeStr}`;
    }
    return dateFormat === 'short'
      ? valueDate.toFormat('dd/LL/yy')
      : dateFormat === 'middle'
        ? `${valueDate.setLocale(currentLang).toFormat('dd MMMM yyyy')}, ${timeStr}`
        : `${valueDate.toFormat('f')}`;
  }
}
