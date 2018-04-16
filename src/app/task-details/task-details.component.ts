import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: [ './task-details.component.css' ]
})
export class TaskDetailsComponent implements OnInit {
  // heroes$: Observable<Hero[]>;



  dpUrl = 'https://designshack.net/tutorialexamples/profile-layout-content-tabs/images/avatar.png';
  taskTitle = 'Dummy Task Dummy Task Dummy Task Dummy Task';
  username = 'jan.arifullah';
  publicName = 'Arifullah Jan';



  private searchTerms = new Subject<string>();

  constructor() {}

  ngOnInit(): void {



  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
