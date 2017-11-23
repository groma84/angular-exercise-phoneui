import { PhoneNumberType } from 'app/phone-number-type.enum';

export class PhoneNumber {
  phoneNumberId: number;
  type: PhoneNumberType;
  number: string;

  constructor(init?: Partial<PhoneNumber>) {
    Object.assign(this, init);
  }
}
