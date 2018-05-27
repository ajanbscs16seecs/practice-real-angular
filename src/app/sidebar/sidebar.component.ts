import { Component, OnInit } from '@angular/core';


import { CurrentUser } from '../schema/currentuser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.css' ]
})
export class SidebarComponent implements OnInit {


  loggedIn:boolean = false;
  notloggedIn:boolean = true;
  userId:any;
  username:any = '';
  authToken:any;


  constructor() { }

  ngOnInit() {
    let a:string = localStorage.getItem('currentUser');
    console.log(a);
    if(a){
      let currentUser:CurrentUser=JSON.parse(a);
      this.username = currentUser.username;
      this.userId = currentUser.userId;
      this.loggedIn=true;
      this.notloggedIn = false;
      this.authToken = currentUser.authToken;

    }

  }


}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
