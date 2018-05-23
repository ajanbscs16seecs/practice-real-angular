/*
* this file contains app level dependencies
*/
import { NgModule }       from '@angular/core';

import {CdkTableModule} from '@angular/cdk/table';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { HighlightModule } from 'ngx-highlightjs';

import { AppComponent }         from './app.component';
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
import { AttachmentComponent }  from './attachment/attachment.component';
import { MessagesComponent }    from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

import {SidebarComponent} from './sidebar/sidebar.component';

import { MessageService } from './services/message.service';
import { UserService } from './services/user.service';
import { AssignmentService } from './services/assignment.service';





import { Hammer }from 'hammerjs';

import * as $ from 'jquery';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class DemoMaterialModule {}




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HighlightModule.forRoot({ theme: 'default' }),




    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BrowseComponent,
    SigninComponent,
    SignupComponent,
    MessagesComponent,
    ProfileComponent,
    TaskDetailsComponent,
    TaskAddComponent,
    TaskSubmitComponent,
    AboutComponent,
    SupportComponent,
    AttachmentComponent,
    SidebarComponent
  ],
  providers: [ MessageService , UserService,AssignmentService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
