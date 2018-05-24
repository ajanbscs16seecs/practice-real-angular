import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Observable ,  Subject ,  of } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';






@Component({
  selector: 'app-task-submit',
  templateUrl: './task-submit.component.html',
  styleUrls: [ './task-submit.component.css' ]
})
export class TaskSubmitComponent implements OnInit {
  // heroes$: Observable<Hero[]>;



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


  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  tags = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: any): void {
    let index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }










  //
  // currentUpload: Upload;
  // dropzoneActive:boolean = false;
  //
  // constructor() { }
  //
  // dropzoneState($event: boolean) {
  //   this.dropzoneActive = $event;
  // }
  //
  // handleDrop(fileList: FileList) {
  //
  //   let filesIndex = _.range(fileList.length)
  //
  //   _.each(filesIndex, (idx) => {
  //     this.currentUpload = new Upload(fileList[idx]);
  //     this.upSvc.pushUpload(this.currentUpload)}
  //   )
  // }
  //
  //







  constructor() {

  }



  ngOnInit(): void {



  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
