import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../schema/user';
import { MessageService } from './message.service';










const headersCons = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json' ,
     'Access-Control-Allow-Origin':'*'
  }),
  headersWithProgress: new HttpHeaders({
     'Content-Type': 'application/json' ,
     'Access-Control-Allow-Origin':'*',
     'reportProgress': 'true',
  })
};

@Injectable({ providedIn: 'root' })
export class UserService {

  private sampleUserUrl = 'http://localhost/pr/user.php?id=1';  // URL to web api

  private dpUrl = 'http://localhost/pr/dp.php';  // URL to web api
    private usersUrl = 'http://localhost/pr/user.php';  // URL to web api
    private newUserUrl = 'http://localhost/pr/user-new.php';  // URL to web api
  private signinUrl = 'http://localhost/pr/signin.php';  // URL to web api
  public authToken: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.authToken = currentUser && currentUser.authToken;
    }



    login(email: string, password: string): Observable<boolean> {
        return this.http.post(this.signinUrl, JSON.stringify({email, password}), {headers: new HttpHeaders({'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})}).pipe(
          map((response: any) => {
            // login successful if there's a jwt token in the response
            const authToken = response && response.authToken;
            if (authToken) {
                // set token property
                this.authToken = authToken;
                let userId = response.userId;
                let username = response.username;



                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({userId,email,username, authToken }));

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
          }),
          catchError(this.handleError<any>(`couldn't login`))
        );
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.authToken = null;
        localStorage.removeItem('currentUser');
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
  addUser (username:String,email:String,password:String): Observable<any> {

    //
    return this.http.post(this.signinUrl,JSON.stringify({username,email,password}) ,{headers: new HttpHeaders({'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})}).pipe(
      map((response: any) => {
        // login successful if there's a jwt token in the response
        const authToken = response && response.authToken;
        if (authToken) {
            // set token property
            this.authToken = authToken;
            let userId = response.userId;
            let username = response.username;

            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({userId,email,username, authToken }));

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




  postDp(fileToUpload: File,authToken:string): Observable<any> {
    const url = `${this.dpUrl}?authToken=${authToken}`;
    const formData: FormData = new FormData();
    formData.append('dp', fileToUpload, fileToUpload.name);
    return this.http
      .post(url, formData,{headers: new HttpHeaders({'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*','reportProgress': 'true'})})
      .pipe(
        catchError(this.handleError<any>(`couldn't upload`))
      );
    }

  // /** PUT: update the hero on the server */
  // updateHero (user: User): Observable<any> {
  //   return this.http.put(this.usersUrl, user, httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${user.id}`)),
  //     catchError(this.handleError<any>('updateUser'))
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
      return error.message;
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
