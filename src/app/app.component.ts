import { Component } from '@angular/core';

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


  username = '';
  userId :number;


  loggedIn:boolean = false;


  ngOnInit(){
    let a = localStorage.getItem('currentUser');
    console.log(a);
    if(a){
      a=JSON.parse(a);
      this.username = a.username;
      this.userId = a.userId;
      this.loggedIn=true;

    }
  }


}



/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
