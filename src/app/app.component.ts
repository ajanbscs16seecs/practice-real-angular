import { Component } from '@angular/core';

import {Router,NavigationEnd } from '@angular/router';

import {MatSnackBar} from '@angular/material';
// import{ MatSidenav} from '@angular/material/sidenav';
// import{ MatSidenavContent} from '@angular/material/sidenav';
// import{ MatSidenavContainer} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticeReal.com';


  username:any = '';
  userId:any;
  profileUrl:any;
  loggedIn:any=false;
  notloggedIn:any = true;

  constructor(private router: Router,public snackBar: MatSnackBar) { }



  ngOnInit(){
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

    let a:any = localStorage.getItem('currentUser');
    console.log(a);
    if(a){
      a=JSON.parse(a);
      this.username = a.username;
      this.userId = a.userId;
      this.loggedIn=true;
      this.notloggedIn=false;

    }
    console.log(this.userId);
  }

  refresh(){
    let a:any = localStorage.getItem('currentUser');
    console.log(a);
    if(a){
      a=JSON.parse(a);
      this.username = a.username;
      this.userId = <number>a.userId;
      this.loggedIn=true;
      this.notloggedIn=false;

    }
  }

  logout(){
    localStorage.clear();
    this.userId=0;
    this.loggedIn=false;
    this.notloggedIn=true;
    this.username='';
  }


}



/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
