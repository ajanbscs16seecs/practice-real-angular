import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.css' ]
})
export class SidebarComponent implements OnInit {


  loggedIn = false;
  notloggedIn:boolean = true;
  userId:number;
  username = '';


  constructor() { }

  ngOnInit() {
    let user = localStorage.getItem('currentUser');
    console.log(user);
    if(user){
      user=JSON.parse(user);
      this.username = user.username;
      this.userId = user.userId;
      this.loggedIn=true;
      this.notloggedIn = false;

    }
  }


}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
