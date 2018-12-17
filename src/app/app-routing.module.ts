
import { NgModule } from '@angular/core';

import { SignupComponent } from './firebase-auth/signup/signup.component';
import { ProfileComponent } from './user/profile/profile.component';
import { KonsignmentsComponent } from './main/konsignments/konsignments.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { LoginComponent } from './firebase-auth/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'konsignments',
    component: KonsignmentsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
