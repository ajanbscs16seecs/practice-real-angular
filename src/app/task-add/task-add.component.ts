import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Router} from '@angular/router';


import { Observable ,  Subject ,  of } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';



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
  addOnBlur: boolean = true;
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];
  tags = ['Technical Writing' ,'Buisness' ,'Project Proposal'];
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
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
