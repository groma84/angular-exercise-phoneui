import { Component, OnInit } from '@angular/core';
import { ContactHistoryService } from '../contact-history.service';
import { ContactDetailsService } from '../contact-details.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-quickdial',
  templateUrl: './quickdial.component.html',
  styleUrls: ['./quickdial.component.scss']
})
export class QuickdialComponent implements OnInit {
  contactDetailsService: ContactDetailsService;
  contactHistoryService: ContactHistoryService;

  showContactDetailsOverlay: boolean;
  contactDetailsOverlayData: Contact;

  recentCalls = [];
  frequentContacts = [];

  constructor(
    contactDetailsService: ContactDetailsService,
    contactHistoryService: ContactHistoryService
  ) {
    this.contactDetailsService = contactDetailsService;
    this.contactHistoryService = contactHistoryService;
  }

  ngOnInit() {
    this.recentCalls = this.contactHistoryService.getMostRecentCalls().map(call => {
      const contact = this.contactDetailsService.getContactDetails(call.calledContactId);
      const fullName = contact.firstName + ' ' + contact.lastName;
      return {
        name: fullName,
        call: call,
        contact: contact
      };
    });
    this.frequentContacts = this.contactHistoryService.getMostFrequentCalls().map(call => {
      const contact = this.contactDetailsService.getContactDetails(call.calledContactId);
      const fullName = contact.firstName + ' ' + contact.lastName;
      return {
        name: fullName,
        contact: contact,
        phoneNumber: contact.phoneNumbers.find(
          pn => pn.phoneNumberId === call.calledContactPhoneNumberId
        )
      };
    });
  }

  openContactDetails(contactId) {
    this.contactDetailsOverlayData = this.contactDetailsService.getContactDetails(contactId);
    this.showContactDetailsOverlay = true;
  }

  closeContactDetails() {
    this.showContactDetailsOverlay = false;
  }
}
