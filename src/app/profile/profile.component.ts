import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';



import { User } from '../schema/user';

import { UserService } from '../services/user.service';


import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {
  // heroes$: Observable<Hero[]>;

  user = null;


  profileImgUrl = 'https://designshack.net/tutorialexamples/profile-layout-content-tabs/images/avatar.png';



  private searchTerms = new Subject<string>();

  constructor(private UserService: UserService) { }


  ngOnInit(): void {

    this.getUser();




  }




  getUser(): void {
    this.UserService.getUser(1)
    .subscribe(user => {
      this.user = user;
      this.UserService.addUser(user).subscribe(user =>{});



    });
  }



}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
