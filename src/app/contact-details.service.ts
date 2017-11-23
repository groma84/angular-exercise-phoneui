import { Injectable } from '@angular/core';
import { Contact } from 'app/contact';
import { PhoneNumber } from 'app/phone-number';
import { PhoneNumberType } from 'app/phone-number-type.enum';

@Injectable()
export class ContactDetailsService {
  fakeContact1 = new Contact({
    contactId: 0,
    firstName: 'Anna',
    imageUrl: 'http://avachara.com/avatar/gallery/chara170730190206_2367.jpg',
    lastName: 'Anfang',
    phoneNumbers: [
      new PhoneNumber({
        number: '0171/51234589',
        phoneNumberId: 0,
        type: PhoneNumberType.Cellphone
      }),
      new PhoneNumber({
        number: '0911/135790',
        phoneNumberId: 1,
        type: PhoneNumberType.Home
      })
    ]
  });
  fakeContact2 = new Contact({
    contactId: 1,
    firstName: 'Bernd',
    imageUrl: 'http://avachara.com/avatar/gallery/chara170730231825_3476.jpg',
    lastName: 'Brotmann',
    phoneNumbers: [
      new PhoneNumber({
        number: '09131/1435790-48',
        phoneNumberId: 0,
        type: PhoneNumberType.Work
      }),
      new PhoneNumber({
        number: '0163/9883451',
        phoneNumberId: 1,
        type: PhoneNumberType.Cellphone
      })
    ]
  });

  contacts = [this.fakeContact1, this.fakeContact2];

  constructor() {}

  getAllContacts(): Contact[] {
    return this.contacts;
  }

  getContactDetails(contactId: number): Contact {
    return this.contacts.find(c => c.contactId === contactId);
  }
}
