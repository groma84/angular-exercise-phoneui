import { Component, OnInit, Input } from '@angular/core';
import { CallDirection } from '../call-direction.enum';

import * as moment from 'moment-timezone';
import { TimeConvertService } from '../time-convert.service';
import { timeout } from 'q';

@Component({
  selector: 'app-recent-call-info',
  templateUrl: './recent-call-info.component.html',
  styleUrls: ['./recent-call-info.component.scss']
})
export class RecentCallInfoComponent implements OnInit {
  @Input() recentCall;
  @Input() index;

  timeConvertService: TimeConvertService;

  constructor(timeConvertService: TimeConvertService) {
    this.timeConvertService = timeConvertService;
  }

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
    return this.timeConvertService.getDateText(timestamp);
  }
}
