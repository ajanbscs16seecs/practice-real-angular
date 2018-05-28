import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: [ './browse.component.css' ]
})
export class BrowseComponent implements OnInit {

  searchtag:any;
  constructor(private router: Router) { }

  ngOnInit() {

  }

  search(){
    if(this.searchtag!==''){
      this.router.navigate(['/explore/'+this.searchtag]);

    }
  }


}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
