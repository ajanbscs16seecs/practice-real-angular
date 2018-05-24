import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { User } from './schema/user';
import { Assignment } from './schema/assignment';
import { MessageService } from './message.service';

const headersCons = {
  headers: new Headers({
     'Content-Type': 'application/json' ,
     'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({ providedIn: 'root' })
export class AssignmentService {

  private sampleAssignmetUrl = 'http://localhost/pr/assignment.php?id=1';  // URL to web api

  private assignmentUrl = 'http://localhost/pr/assignment.php';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** GET heroes from the server */
  getAssignment (): Observable<Assignment> {
    return this.http.get<Assignment>(this.sampleAssignmetUrl)
      .pipe(
        tap(asssignment => this.log(`fetched asssignment`)),
        catchError(this.handleError('getAssignment', []))
      );
  }





  /** GET hero by id. Will 404 if id not found */
  getAssignment(id: number): Observable<Assignment> {
    const url = `${this.assignmentUrl}?id=${id}`;
    return this.http.get<Assignment>(url).pipe(
      tap(_ => this.log(`fetched assignment id=${id}`)),
      catchError(this.handleError<Assignment>(`getAssignment id=${id}`))
    );
  }


  /** GET hero by id. Will 404 if id not found */
  getAssignments(): Observable<Assignment[]> {
    const url = `${this.assignmentUrl}`;
    return this.http.get<Assignment>(this.assignmentUrl).pipe(
      tap(_ => this.log(`fetched assignments`)),
      catchError(this.handleError<Assignment>(`getAssignments`))
    );
  }



  //
  // /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<Hero[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching "${term}"`)),
  //     catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   );
  // }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addAssignment (assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(this.assignmentUrl, assignment, httpOptions).pipe(
      tap((asssignment: asssignment) => this.log(`added assignment w/ id=${assignment.id}`)),
      catchError(this.handleError<Assignment>('addAssignment'))
    );
  }
  //
  // /** DELETE: delete the hero from the server */
  // deleteHero (hero: Hero | number): Observable<Hero> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.heroesUrl}/${id}`;
  //
  //   return this.http.delete<Hero>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }
  //
  // /** PUT: update the hero on the server */
  // updateHero (hero: Hero): Observable<any> {
  //   return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('AssiignmentService: ' + message);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
