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
  profileUrl:String;
  loggedIn:boolean=false;
  notloggedIn:boolean = true;




  ngOnInit(){
    let a = localStorage.getItem('currentUser');
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
    let a = localStorage.getItem('currentUser');
    console.log(a);
    if(a){
      a=JSON.parse(a);
      this.username = a.username;
      this.userId = a.userId;
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
