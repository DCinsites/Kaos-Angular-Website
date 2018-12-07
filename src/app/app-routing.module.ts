
import { NgModule } from '@angular/core';

import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ConsignmentsComponent } from "./consignments/consignments.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

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
    path: 'consignments',
    component: ConsignmentsComponent
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
