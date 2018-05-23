import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


import {Router} from '@angular/router';

import { User } from '../schema/user';

import { UserService } from '../services/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css' ]
})
export class SigninComponent implements OnInit {

  bgUrl='http://backgroundcheckall.com/wp-content/uploads/2017/12/background-images-for-registration-page-10.jpg';

  email:String = '';
  password:String = '';
  confirmPassword:String = '';


  loading:boolean = false;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {

  }

  signin(){
    this.loading = true;
    this.userService.login(this.email,this.password).subscribe(response=>{
      console.log(response);
      console.log("done");
      this.loading = false;
      if(response){
        this.router.navigate(['/dashboard']);
      }
      else{

      }


    });

  }
  signup(){
    this.loading = true;
    this.userService.addUser(this.email,this.password).subscribe(response=>{
      
      this.loading = false;
      console.log(response);
    });

  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
