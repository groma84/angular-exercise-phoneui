import { Injectable } from '@angular/core';
import { ContactDetailsService } from 'app/contact-details.service';
import { Call } from 'app/call';
import { CallDirection } from 'app/call-direction.enum';

@Injectable()
export class ContactHistoryService {
  contactDetailsService: ContactDetailsService;

  fakeCall1 = new Call({
    calledContactId: 0,
    calledContactPhoneNumberId: 0,
    finishedAtTimestampUtc: 123456,
    startedAtTimestampUtc: 98765,
    direction: CallDirection.Inbound
  });

  fakeCall2 = new Call({
    calledContactId: 1,
    calledContactPhoneNumberId: 0,
    finishedAtTimestampUtc: 123456,
    startedAtTimestampUtc: 98765,
    direction: CallDirection.Outbound
  });

  constructor(contactDetailsService: ContactDetailsService) {
    this.contactDetailsService = contactDetailsService;
  }

  getMostRecentCalls(): Call[] {
    return [this.fakeCall1, this.fakeCall2];
  }

  getMostFrequentCalls(): Call[] {
    return [this.fakeCall1];
  }
}
