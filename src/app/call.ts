import { CallDirection } from './call-direction.enum';

export class Call {
  calledContactId: number;
  calledContactPhoneNumberId: number;

  startedAtTimestampUtc: number;
  finishedAtTimestampUtc: number;

  direction: CallDirection;

  constructor(init?: Partial<Call>) {
    Object.assign(this, init);
  }
}
