import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { AssignmentService } from '../services/assignment.service';
import { CurrentUser } from '../schema/currentuser';
import { Assignment } from '../schema/assignment';


import {MatSnackBar} from '@angular/material';


import { Observable ,  Subject ,  of } from 'rxjs';

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


  task: Assignment;
  loading:boolean = true;
  text:any;
  userId:any;
  externalAttachment:any;
  username:any;
  authToken:any;
  loggedIn:any;
  assignmentId:any;


  dicussions = [
    {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},

  ];

  solutions = [];

  newcomment:string;


  tags = ["computers","app-developement"];
  private searchTerms = new Subject<string>();

  constructor(private route: ActivatedRoute,
    private assignmentService: AssignmentService,
    private location: Location,public snackBar: MatSnackBar) {}



  ngOnInit(): void {

    this.loading = true;
    this.assignmentId = +this.route.snapshot.paramMap.get('id');

    this.getAssignment();
    this.getComments();
    this.getAssignmentSolutions();

    let a:string = localStorage.getItem('currentUser');
    console.log(a);
    if(a){
      let currentUser:CurrentUser=JSON.parse(a);
      this.username = currentUser.username;
      this.userId = currentUser.userId;
      this.loggedIn=true;
      this.authToken = currentUser.authToken;

    }




  }

  getAssignment(): void {
    this.loading=true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.assignmentService.getAssignment(id)
      .subscribe(task => {
        this.task = task;
        this.loading = false;
      });
  }
  getAssignmentSolutions(): void {
    this.loading=true;
    this.assignmentService.getSolutionsForAssignment(this.assignmentId)
      .subscribe(solutions => {
        console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
        this.solutions = solutions;
        this.loading = false;
      });
  }

  getComments(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.assignmentService.getAssignmentComments(id)
      .subscribe(comments => this.dicussions = comments);
  }



  addComment(): void{
    this.loading=true;
    let assignmentId = this.task.id;
    console.log(assignmentId);
    this.assignmentService.addAssignmentComment(this.newcomment,assignmentId,this.authToken).subscribe(response=>{

      this.loading = false;
      console.log(response);

      if(response.id==0){
        this.snackBar.open("Couldn't post the comment", null, {
          duration: 2000,
        });
      }
      else{
        this.newcomment='';
        this.getComments();


      }




    });
  }



}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
