import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { AssignmentService } from '../services/assignment.service';
import { CurrentUser } from '../schema/currentuser';
import { AssignmentSolution } from '../schema/assignment-solution';

import { Observable ,  Subject ,  of } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


@Component({
  selector: 'app-task-solution-details',
  templateUrl: './task-solution-details.component.html',
  styleUrls: [ './task-solution-details.component.css' ]
})

export class TaskSolutionDetailsComponent implements OnInit {
  // heroes$: Observable<Hero[]>;


  solution: AssignmentSolution;
  loading:boolean = true;


  dicussions = [
  ];


  newcomment:string;


  text:any;
  userId:any;
  externalAttachment:any;
  username:any;
  authToken:any;
  loggedIn:any;
  assignmentId:any;



  constructor(private route: ActivatedRoute,
    private assignmentService: AssignmentService,
    private location: Location) {}



  ngOnInit(): void {

    this.loading = true;
    this.assignmentId = +this.route.snapshot.paramMap.get('id');

    this.getSolution();
    // this.getComments();

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

  getSolution(): void {
    this.loading=true;
    const id = +this.route.snapshot.paramMap.get('id');
    // this.assignmentService.getSolution(id)
    //   .subscribe(solution => {
    //     this.solution = solution;
    //     this.loading = false;
    //   });
  }

  // getComments(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.assignmentService.getSolutionComments(id)
  //     .subscribe(comments => this.dicussions = comments);
  // }



  // addComment(): void{
  //   this.loading=true;
  //   let solutionId = this.task.id;
  //   console.log(assignmentId);
  //   this.assignmentService.addSolutionComment(this.newcomment,solutionId,this.authToken).subscribe(response=>{
  //
  //     this.loading = false;
  //     console.log(response);
  //
  //     if(response.id==0){
  //       this.snackBar.open("Couldn't post the comment", null, {
  //         duration: 2000,
  //       });
  //     }
  //     else{
  //       this.newcomment='';
  //       this.getComments();
  //     }
  //
  //   });
  // }



}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
