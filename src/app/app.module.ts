/*
* this file contains app level dependencies
*/
import { NgModule }       from '@angular/core';

import {CdkTableModule} from '@angular/cdk/table';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import {FormsModule} from '@angular/forms';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProfileComponent }  from './profile/profile.component';
import { MessagesComponent }    from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

import { MessageService }       from './services/message.service';

import { MaterialModule } from './material.module';
import {MatSidenavModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



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
  MatTooltipModule,
  MatSidenavModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavResponsiveExample} from './app/sidenav-responsive-example';

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
    MatTooltipModule,
    MatSidenavModule
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
    BrowserAnimationsModule
    DemoMaterialModule

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
    MessagesComponent,
    ProfileComponent
  ],
  providers: [ MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
