import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import{HttpEventType,HttpResponse} from '@angular/common/http';
import { Observable ,  Subject ,  of } from 'rxjs';

import {Router} from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { User } from '../schema/user';

import { AssignmentService } from '../services/assignment.service';
import { UserService } from '../services/user.service';
import { CurrentUser } from '../schema/currentuser';
import { Assignment } from '../schema/assignment';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 import { UploadEvent, UploadFile,FileSystemDirectoryEntry ,FileSystemFileEntry} from 'ngx-file-drop';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {


  isEditable:boolean=false;

  uploadingImg:boolean = false;

  user:any = null;
  loading:any=true;
  authToken:any;
  userId:any;


  tasks:any = [
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Android Layout Design',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Write a letter',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Make a mathematical model',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Android Layout Design',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Android Layout Design',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},

  ];




  constructor(private userService: UserService,private assignmentService: AssignmentService,private route: ActivatedRoute,
    private location: Location) { }





  ngOnInit(): void {

    this.getUser();
    const id:any = +this.route.snapshot.paramMap.get('id');
    this.assignmentService.getAssignmentsUploadedBy(id).subscribe(assignments=>{
      this.tasks = assignments;
    });

    let a:string = localStorage.getItem('currentUser');
    console.log(a);
    if(a){
      let currentuser:CurrentUser=JSON.parse(a);
      if(currentuser.userId == id){
        this.isEditable = true;
      }
      this.authToken = currentuser.authToken;

    }

    this.uploadingImg = false;


  }




  getUser(): void {
    this.loading=true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
    .subscribe(user => {
      this.user = user;
      this.loading = false;




    });
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

















   //  function getBase64(file, callback) {
   //    var reader = new FileReader();
   //    reader.onload = function(event) {
   //        callback(event.target.result);
   //    };
   //    reader.readAsDataURL(file);
   // }


    mode:any = 'indeterminate';
    progressValue:any=50;


    public files: UploadFile[] = [];

    public dropped(event: UploadEvent) {
      this.files = event.files;
      for (const droppedFile of event.files) {

        // Is it a file?
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {



            //
            //
            //
            // var imgtag = document.getElementById("dp-img");
            // imgtag.title = droppedFile.name;
            // const callback = function(result) {
            //   imgtag.src = event.target.result;
            // };
            //
            // this.getBase64(droppedFile,callback)
            //



            // Here you can access the real file
            console.log(droppedFile.relativePath, file);

            this.uploadingImg = true;
            this.userService.postDp(file,this.authToken).subscribe(event => {
              // Via this API, you get access to the raw event stream.
              // Look for upload progress events.
              if (event.type === HttpEventType.UploadProgress) {
                // This is an upload progress event. Compute and show the % done:
                const percentDone = Math.round(100 * event.loaded / event.total);
                console.log(`File is ${percentDone}% uploaded.`);
              } else if (event instanceof HttpResponse) {
                console.log('File is completely uploaded!');
                this.uploadingImg = false;
              }
            });

          });
        } else {
          // It was a directory (empty directories are added, otherwise only files)
          const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
          console.log(droppedFile.relativePath, fileEntry);
        }
      }
    }

    public fileOver(event){
      console.log(event);
    }

    public fileLeave(event){
      console.log(event);
    }






}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
