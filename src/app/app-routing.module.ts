
/*
* This file decides the navigation of the app.
*/



import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent }   from './signin/signin.component';
import { SignupComponent }   from './signup/signup.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BrowseComponent }   from './browse/browse.component';
import { ProfileComponent }  from './profile/profile.component';
import { TaskDetailsComponent }  from './task-details/task-details.component';
import { TaskAddComponent }  from './task-add/task-add.component';
import { TaskSubmitComponent }  from './task-submit/task-submit.component';
import { AboutComponent }  from './about/about.component';
import { SupportComponent }  from './support/support.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component:  ProfileComponent},
  { path: 'task/:id', component:  TaskDetailsComponent},
  { path: 'task-new', component:  TaskAddComponent},
  { path: 'task-submit/:id', component:  TaskSubmitComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'support', component:  SupportComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
