import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainRouterModule } from './main-router/main-router.module';

import { ContactHistoryService } from './contact-history.service';
import { ContactDetailsService } from './contact-details.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, MainRouterModule],
  providers: [ContactHistoryService, ContactDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
