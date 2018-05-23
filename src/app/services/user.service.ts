import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/common/http';
import { Observable} from 'rxjs';
import {of} from 'rxjs/add/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../schema/user';
import { MessageService } from './message.service';

const headersCons = {
  headers: new Headers({
     'Content-Type': 'application/json' ,
     'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({ providedIn: 'root' })
export class UserService {

  private sampleUserUrl = 'http://localhost/pr/user.php?id=1';  // URL to web api

  private usersUrl = 'http://localhost/pr/user.php';  // URL to web api
  private signinUrl = 'http://localhost/pr/signin.php';  // URL to web api
  public authToken: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }



    login(email: string, password: string): Observable<boolean> {
        return this.http.post(this.signinUrl, JSON.stringify({email, password}), headersCons.headers).pipe(
          map((response: Response) => {
            // login successful if there's a jwt token in the response
            const authToken = response && response.authToken;
            if (authToken) {
                // set token property
                this.authToken = authToken;

                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email, authToken }));

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
          }),
          catchError(this.handleError<User>(`couldn't login`))
        );
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.authToken = null;
        localStorage.removeItem('currentUser');
    }


















  /** GET heroes from the server */
  getUser (): Observable<User> {
    return this.http.get<User>(this.sampleUserUrl)
      .pipe(
        tap(user => this.log(`fetched user`)),
        catchError(this.handleError('getUser', []))
      );
  }





  /** GET hero by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}?id=${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
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
  addUser (user: User): Observable<User> {
    console.log(user);
    //
    return this.http.post<User>(this.usersUrl,JSON.stringify(user) , headersCons.headers).pipe(
      tap((user: User) => this.log(`added user w/ id=${user.id}`)),
      catchError(this.handleError<Hero>('addUser'))
    );
  }


  /** PUT: update the hero on the server */
  updateHero (user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }



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
    this.messageService.add('UserService: ' + message);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
