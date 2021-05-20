import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomstyleDirective } from './customstyle.directive';
import {UserModule} from './user/user.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';  //import Form Module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //import bootstrap Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootstrapComponent } from './bootstrap/bootstrap.component'; //import material Module
import {MatFormFieldModule } from '@angular/material/form-field'; //import material Module
import {MatToolbarModule} from '@angular/material/toolbar'; //import material Module
import {MatIconModule} from '@angular/material/icon'; //import material Module
import { MatCardModule } from '@angular/material/card'; //import material Module
import {MatMenuModule} from '@angular/material/menu'; //import material Module
import {MatChipsModule} from '@angular/material/chips'; //import material Module
import { ChildComponent } from './child/child.component'; 
import {HttpClientModule} from '@angular/common/http';
import { LazylistaComponent } from './lazylista/lazylista.component';
import { LazylistbComponent } from './lazylistb/lazylistb.component'; //import API Module

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    ContactComponent,
    PagenotfoundComponent,
    CustomstyleDirective,
    BootstrapComponent,
    ChildComponent,
    LazylistaComponent,
    LazylistbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,  //import Form Module
    NgbModule,  //import bootstrap Module
    BrowserAnimationsModule, //import material Module
    MatFormFieldModule,
    MatToolbarModule,  //import material toolbar
    MatIconModule, //import material Icon
    MatCardModule,  //import Card 
    MatMenuModule, // Import Menu
    MatChipsModule, //import Chips
    HttpClientModule, //API Module
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
