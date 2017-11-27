import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TabsComponent } from '../tabs/tabs.component';
import { QuickdialComponent } from '../quickdial/quickdial.component';
import { RecentCallInfoComponent } from '../recent-call-info/recent-call-info.component';
import { ContactListItemComponent } from '../contact-list-item/contact-list-item.component';
import { QuickdialContactDetailsOverlayComponent } from '../quickdial-contact-details-overlay/quickdial-contact-details-overlay.component';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { DialNumberComponent } from '../dial-number/dial-number.component';

const routes: Routes = [
  {
    path: 'phone',
    component: TabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'quickdial',
        pathMatch: 'full'
      },
      {
        path: 'quickdial',
        component: QuickdialComponent
      },
      {
        path: 'contacts',
        component: ContactListComponent
      },
      {
        path: 'dial',
        component: DialNumberComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/phone'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [
    TabsComponent,
    QuickdialComponent,
    QuickdialContactDetailsOverlayComponent,
    RecentCallInfoComponent,
    ContactListComponent,
    ContactListItemComponent,
    DialNumberComponent
  ]
})
export class MainRouterModule {}
