import { Component, OnInit } from '@angular/core';
import { ContactDetailsService } from '../contact-details.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contactDetailsService: ContactDetailsService;
  contactDetailsOverlayData: Contact;
  showContactDetailsOverlay: boolean;
  contacts: Contact[];

  constructor(contactDetailsService: ContactDetailsService) {
    this.contactDetailsService = contactDetailsService;
  }

  ngOnInit() {
    this.contacts = this.contactDetailsService.getAllContacts();
  }

  openContactDetails(contactId) {
    this.contactDetailsOverlayData = this.contactDetailsService.getContactDetails(contactId);
    this.showContactDetailsOverlay = true;
  }

  closeContactDetails() {
    this.showContactDetailsOverlay = false;
  }
}
