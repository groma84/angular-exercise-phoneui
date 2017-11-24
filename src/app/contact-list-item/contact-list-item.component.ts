import { Component, OnInit, Input } from '@angular/core';
import { PhoneNumberType } from '../phone-number-type.enum';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss']
})
export class ContactListItemComponent implements OnInit {
  @Input() contactCall;
  @Input() index;

  constructor() {}

  ngOnInit() {}

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
