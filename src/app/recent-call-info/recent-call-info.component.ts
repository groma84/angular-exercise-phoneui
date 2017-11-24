import { Component, OnInit, Input } from '@angular/core';
import { CallDirection } from '../call-direction.enum';

import * as moment from 'moment-timezone';

@Component({
  selector: 'app-recent-call-info',
  templateUrl: './recent-call-info.component.html',
  styleUrls: ['./recent-call-info.component.scss']
})
export class RecentCallInfoComponent implements OnInit {
  @Input() recentCall;
  @Input() index;

  constructor() {}

  ngOnInit() {}

  getDirectionText(direction: CallDirection) {
    switch (direction) {
      case CallDirection.Inbound:
        return '>>';
      case CallDirection.Outbound:
        return '<<';
    }
  }

  getDateText(timestamp) {
    return moment(timestamp * 1000)
      .tz('Europe/Berlin')
      .format('LLL');
  }
}
