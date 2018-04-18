import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css' ]
})
export class SigninComponent implements OnInit {

  bgUrl='http://backgroundcheckall.com/wp-content/uploads/2017/12/background-images-for-registration-page-10.jpg';

  constructor() { }

  ngOnInit() {

  }


}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
