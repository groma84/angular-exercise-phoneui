import { PhoneNumber } from 'app/phone-number';

export class Contact {
  contactId: number;
  phoneNumbers: PhoneNumber[];
  firstName: string;
  lastName: string;
  imageUrl: string;

  constructor(init?: Partial<Contact>) {
    Object.assign(this, init);
  }
}
