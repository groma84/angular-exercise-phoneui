import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PhoneNumberType } from '../phone-number-type.enum';
import { PhoneNumberFormatterService } from '../phone-number-formatter.service';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss']
})
export class ContactListItemComponent implements OnInit {
  @Input() contactCall;
  @Input() index;
  @Output() contactListItemClicked = new EventEmitter<number>();

  phoneNumberFormatterService: PhoneNumberFormatterService;

  constructor(phoneNumberFormatterService: PhoneNumberFormatterService) {
    this.phoneNumberFormatterService = phoneNumberFormatterService;
  }

  ngOnInit() {}

  getPhoneNumberTypeText(type) {
    return this.phoneNumberFormatterService.getPhoneNumberTypeText(type);
  }

  contactListItemClick(item) {
    this.contactListItemClicked.emit(item.contact.contactId);
  }
}
