import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { User } from './schema/user';
import { Comment } from './schema/comment';
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
    private newAssignmentUrl = 'http://localhost/pr/assignment-new.php';  // URL to web api
  private commentUrl = 'http://localhost/pr/comment.php';  // URL to web api
  private newCommentUrl = 'http://localhost/pr/comment-new.php';  // URL to web api
  private accessToken = '';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {


    }


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



  /** POST: add a new hero to the server */
  addAssignment (title:string,description:string,tags:string,authToken:string): Observable<Assignment> {
    const url = `${this.newAssignmentUrl}?authToken=${authToken}`;
    return this.http.post<Assignment>(url, JSON.stringify({title,description,tags}), headersCons.headers).pipe(
      tap((assignment: Assignment) => this.log(`added assignment w/ id=${assignment.id}`)),
      catchError(this.handleError<Assignment>('addAssignment'))
    );
  }




  ///comments...........
  getAssignmentComments(id: number): Observable<Comment[]> {
    const url = `${this.commentUrl}?assignmentId=${id}`;
    return this.http.get<Assignment>(url).pipe(
      tap(_ => this.log(`fetched assignment  comments`)),
      catchError(this.handleError<Assignment>(`getAssignment id=${id}`))
    );
  }



  /** POST: add a new hero to the server */
  addAssignmentComment (text:string,assignmentId:number,authToken:string): Observable<Comment> {
    const url = `${this.newCommentUrl}?authToken=${authToken}`;
    return this.http.post<Comment>(url, JSON.stringify({text,assignmentId}), headersCons.headers).pipe(
      tap((assignment: Comment) => this.log(`added comment w/ id=${assignment.id}`)),
      catchError(this.handleError<Comment>('addComment'))
    );
  }


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
