import { Injectable } from '@angular/core';
import { PhoneNumberType } from './phone-number-type.enum';

@Injectable()
export class PhoneNumberFormatterService {

  constructor() { }

  getPhoneNumberTypeText(type: PhoneNumberType) {
    switch (type) {
      case PhoneNumberType.Cellphone:
        return 'Mobil';
      case PhoneNumberType.Home:
        return 'Zuhause';
      case PhoneNumberType.Landline:
        return 'Festnetz';
      case PhoneNumberType.Work:
        return 'Geschäftlich';
    }
  }
}
