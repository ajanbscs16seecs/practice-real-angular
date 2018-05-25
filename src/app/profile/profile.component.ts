import { Component, OnInit } from '@angular/core';

import { Observable ,  Subject ,  of } from 'rxjs';

import { MarkdownModule } from 'ngx-markdown';

import { User } from '../schema/user';

import { AssignmentService } from '../services/assignment.service';
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

  tasks = [
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Android Layout Design',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Write a letter',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Make a mathematical model',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Android Layout Design',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Android Layout Design',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},

  ];


  private searchTerms = new Subject<string>();

  constructor(private UserService: UserService,private assignmentService: AssignmentService) { }




  ngOnInit(): void {

    this.getUser();
    this.assignmentService.getAssignments().subscribe(assignments=>{
      this.tasks = assignments;
    });




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
