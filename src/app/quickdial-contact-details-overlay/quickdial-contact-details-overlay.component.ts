import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact';
import { PhoneNumberFormatterService } from '../phone-number-formatter.service';

@Component({
  selector: 'app-quickdial-contact-details-overlay',
  templateUrl: './quickdial-contact-details-overlay.component.html',
  styleUrls: ['./quickdial-contact-details-overlay.component.scss']
})
export class QuickdialContactDetailsOverlayComponent implements OnInit {
  @Input() contact: Contact;
  @Output() closeOverlay = new EventEmitter<void>();

  phoneNumberFormatterService: PhoneNumberFormatterService;

  activePhoneNumberId: number;
  selectedPhoneNumber: string;

  constructor(phoneNumberFormatterService: PhoneNumberFormatterService) {
    this.phoneNumberFormatterService = phoneNumberFormatterService;
  }

  ngOnInit() {}

  getPhoneNumberTypeText(type) {
    return this.phoneNumberFormatterService.getPhoneNumberTypeText(type);
  }

  onCancelClicked() {
    this.closeOverlay.emit();
  }

  onPhoneNumberClicked(phoneNumberId) {
    this.activePhoneNumberId = phoneNumberId;

    this.selectedPhoneNumber = this.contact.phoneNumbers.find(
      pn => pn.phoneNumberId === phoneNumberId
    ).number;
  }
}
