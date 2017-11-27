import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import * as moment from 'moment-timezone';

import { CallDirection } from '../call-direction.enum';
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
  @Output() recentCallClicked = new EventEmitter<number>();

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

  recentCallClick(call) {
    this.recentCallClicked.emit(call.contact.contactId);
  }
}
