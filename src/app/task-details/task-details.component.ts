import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { AssignmentService } from '../services/assignment.service';



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



  dpUrl = 'https://designshack.net/tutorialexamples/profile-layout-content-tabs/images/avatar.png';
  taskTitle = 'Dummy Task Dummy Task Dummy Task Dummy Task';
  username = 'jan.arifullah';
  publicName = 'Arifullah Jan';

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];


  dicussions = [
    {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},

  ];


  private searchTerms = new Subject<string>();

  constructor(private route: ActivatedRoute,
    private assignmentService: AssignmentService,
    private location: Location) {}



  ngOnInit(): void {


    this.getAssignment();



  }

  getAssignment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.assignmentService.getAssignment(id)
      .subscribe(task => this.task = task);
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
