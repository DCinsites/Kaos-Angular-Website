
import { KonsignmentsComponent } from './main/konsignments/konsignments.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { LoginComponent } from './firebase-auth/login/login.component';
import { NavComponent } from './nav/nav.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SignupComponent } from './firebase-auth/signup/signup.component';
import { PaymentsComponent } from './main/payments/payments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    NavComponent,
    PortfolioComponent,
    ProfileComponent,
    KonsignmentsComponent,
    SignupComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
