import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AssignmentService } from '../services/assignment.service';
import { CurrentUser } from '../schema/currentuser';
import { Assignment } from '../schema/assignment';


import {MatSnackBar} from '@angular/material';

import {Router} from '@angular/router';
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





text:any;
userId:any;
externalAttachment:any;
username:any;
authToken:any;
loggedIn:any;
assignmentId:any;
loading:any=false;


  constructor(private route: ActivatedRoute,
    private assignmentService: AssignmentService,
    private location: Location,public snackBar: MatSnackBar,private router: Router) {

  }



  ngOnInit(): void {
    let a:string = localStorage.getItem('currentUser');
    console.log(a);
    if(a){
      let currentUser:CurrentUser=JSON.parse(a);
      this.username = currentUser.username;
      this.userId = currentUser.userId;
      this.loggedIn=true;
      this.authToken = currentUser.authToken;

    }
    this.assignmentId = +this.route.snapshot.paramMap.get('id');

  }



    addAssignmentSol(){
      this.loading=true;
      this.assignmentService.addAssignmentSol(this.assignmentId,this.text,this.externalAttachment,this.authToken).subscribe(response=>{
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










}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
