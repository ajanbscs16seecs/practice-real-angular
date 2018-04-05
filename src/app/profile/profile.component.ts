import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  

  profileImgUrl = 'https://designshack.net/tutorialexamples/profile-layout-content-tabs/images/avatar.png';

  username = 'jan.arifullah';
  publicName = 'Arifullah Jan';

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/