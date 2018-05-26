import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';


import { Observable ,  Subject ,  of } from 'rxjs';

import {map, startWith} from 'rxjs/operators';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';



import { CovalentTextEditorModule } from '@covalent/text-editor';




import { AssignmentService } from '../services/assignment.service';




import * as $ from 'jquery';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: [ './task-add.component.css' ]
})
export class TaskAddComponent implements OnInit {
  // heroes$: Observable<Hero[]>;





visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;

  separatorKeysCodes = [ENTER, COMMA];

  tagCtrl = new FormControl();

  filteredTags: Observable<any[]>;

  tags = [
  ];

  allTags = [
    'computers',
    'writing',
    'accounting',
    'angular',
    'android-developement',
    'ios-developement0',
    'maths',
    'physics',
    'digital-logic-design',
    'health',
    'medical-sciences'
  ];

  @ViewChild('tagInput') tagInput: ElementRef;

  constructor(private assignmentService: AssignmentService) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
        startWith(null),
        map((tag: string | null) => tag ? this.filter(tag) : this.allTags.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);
  }

  remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.allTags.filter(tag =>
        tag.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }




  ////markdwon editor......

  simplemdeoptions : any ={
  	// autofocus: true,
    autoDownloadFontAwesome:true,
  	autosave: {
  		enabled: true,
  		uniqueId: "MyUniqueID",
  		delay: 1000,
  	},
  	// element: document.getElementById("MyID"),
  	forceSync: true,
  	// hideIcons: ["guide", "heading"],
  	// indentWithTabs: false,
  	// initialValue: "Hello world!",
  	// lineWrapping: false,
  	placeholder: "Description here...",
  	promptURLs: true,
  	// renderingConfig: {
  	// 	singleLineBreaks: false,
  	// 	codeSyntaxHighlighting: true,
  	// },
  	shortcuts: {
  		drawTable: "Cmd-Alt-T"
  	},
  	showIcons: ["code"],
  	// spellChecker: true,
  	styleSelectedText: false,
  	tabSize: 4,
    // toolbar: [{
    //         name: "bold",
    //         action: "toggleBold",
    //         className: "fa fa-bold",
    //         title: "Bold (Ctrl+B)",
    //     },
    //     "|"
    // ],
  	// toolbar: true,
  	// toolbarTips: true,
  };






  assignment:Assignment;
  title:string;
  description:string;
  userId:number;

  constructor(private assignmentService: AssignmentService,private router: Router) {
  }



  ngOnInit(): void {
    let a = localStorage.getItem('currentUser');
    console.log(a);
    if(a){
      a=JSON.parse(a);
      this.username = a.username;
      this.userId = a.userId;
      this.loggedIn=true;
      this.authToken = a.authToken;

    }




  }


  addAssignment(){
    this.loading=true;
    this.assignmentService.addAssignment(this.title,this.description,this.tags,this.authToken).subscribe(response=>{

      this.loading = false;
      console.log(response);

      if(response.id==0){
        this.snackBar.open("Couldn't post the assignment", null, {
          duration: 2000,
        });
      }
      else{
        console.log("navigating..");
        this.router.navigate(['/task/'+response.id]);

      }




    });
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
