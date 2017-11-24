import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';

@Injectable()
export class TimeConvertService {
  constructor() {}

  getDateText(timestamp: number): string {
    return moment(timestamp * 1000)
      .tz('Europe/Berlin')
      .format('LLL');
  }
}
