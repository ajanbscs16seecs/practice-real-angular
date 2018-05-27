import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../schema/user';
import { Comment } from '../schema/comment';
import { Assignment } from '../schema/assignment';
import { AssignmentSolution } from '../schema/assignment-solution';
import { MessageService } from './message.service';

// const headersCons = {
//   headers: new HttpHeaders({
//      'Content-Type': 'application/json' ,
//      'Access-Control-Allow-Origin':'*'
//   })
// };

@Injectable({ providedIn: 'root' })
export class AssignmentService {

  private sampleAssignmetUrl:any = 'http://localhost/pr/assignment.php?id=1';  // URL to web api

  private assignmentUrl:any = 'http://localhost/pr/assignment.php';  // URL to web api
  private newAssignmentUrl:any = 'http://localhost/pr/assignment-new.php';  // URL to web api
  private solutionUrl:any = 'http://localhost/pr/assignment-solution.php';  // URL to web api
  private newSolutionUrl:any = 'http://localhost/pr/assignment-solution-new.php';  // URL to web api
  private commentUrl:any = 'http://localhost/pr/comment.php';  // URL to web api
  private newCommentUrl:any = 'http://localhost/pr/comment-new.php';  // URL to web api
  private countUrl:any = 'http://localhost/pr/count.php';  // URL to web api
  private accessToken:any = '';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {


    }


  getCount(count:string): Observable<number> {

    const url = `${this.countUrl}?count=${count}`;
    return this.http.get<number>(url);

  }
// {headers: new HttpHeaders({'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})}





  /** GET hero by id. Will 404 if id not found */
  getAssignment(id: number): Observable<Assignment> {
    const url = `${this.assignmentUrl}?id=${id}`;
    return this.http.get<Assignment>(url).pipe(
      tap(_ => this.log(`fetched assignment id=${id}`)),
      catchError(this.handleError<Assignment>(`getAssignment id=${id}`))
    );
  }


  /** GET hero by id. Will 404 if id not found */
  getAssignments(tag:string): Observable<Assignment[]> {
    let url:any;
    if(tag==null){
      url = `${this.assignmentUrl}`;
    }
    else{
      url = `${this.assignmentUrl}?tag=${tag}`;
    }
    return this.http.get<Assignment[]>(url).pipe(
      tap(_ => this.log(`fetched assignments`)),
      catchError(this.handleError<Assignment[]>(`getAssignments`))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getAssignmentsUploadedBy(uploadedBy:number): Observable<Assignment[]> {
    const url = `${this.assignmentUrl}?uploadedBy=${uploadedBy}`;

    return this.http.get<Assignment[]>(url).pipe(
      tap(_ => this.log(`fetched assignments`)),
      catchError(this.handleError<Assignment[]>(`getAssignments`))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getSolutionsForAssignment(assignmentId:number): Observable<AssignmentSolution[]> {
    const url = `${this.solutionUrl}?assignmentId=${assignmentId}`;

    return this.http.get<AssignmentSolution[]>(url).pipe(
      tap(_ => this.log(`fetched solutioons`)),
      catchError(this.handleError<AssignmentSolution[]>(`get Solutions for assignemtn`))
    );
  }




  getSolutionsForUser(userId:number): Observable<AssignmentSolution[]> {
    const url = `${this.solutionUrl}?userId=${userId}`;

    return this.http.get<AssignmentSolution[]>(url).pipe(
      tap(_ => this.log(`fetched solutioons`)),
      catchError(this.handleError<AssignmentSolution[]>(`get Solutions for user`))
    );
  }



  /** POST: add a new hero to the server */
  addAssignment (title:string,description:string,tags:any[],externalAttachment,authToken:string): Observable<Assignment> {
    const url = `${this.newAssignmentUrl}?authToken=${authToken}`;
    return this.http.post<Assignment>(url, JSON.stringify({title,description,tags,externalAttachment}), {headers: new HttpHeaders({'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})}).pipe(
      tap((assignment: Assignment) => this.log(`added assignment w/ id=${assignment.id}`)),
      catchError(this.handleError<Assignment>('addAssignment'))
    );
  }


  /** POST: add a new hero to the server */
  addAssignmentSol (assignmentId:number,text:string,externalAttachment,authToken:string): Observable<Assignment> {
    const url = `${this.newSolutionUrl}?authToken=${authToken}`;
    return this.http.post<Assignment>(url, JSON.stringify({assignmentId,text,externalAttachment}), {headers: new HttpHeaders({'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})}).pipe(
      tap((assignment: Assignment) => this.log(`added assignment w/ id=${assignment.id}`)),
      catchError(this.handleError<Assignment>('addAssignment'))
    );
  }


  ///comments...........
  getAssignmentComments(id: number): Observable<Comment[]> {
    const url = `${this.commentUrl}?assignmentId=${id}`;
    return this.http.get<Comment[]>(url).pipe(
      tap(_ => this.log(`fetched assignment  comments`)),
      catchError(this.handleError<Comment[]>(`getAssignment id=${id}`))
    );
  }



  /** POST: add a new hero to the server */
  addAssignmentComment (text:string,assignmentId:number,authToken:string): Observable<Comment> {
    const url = `${this.newCommentUrl}?authToken=${authToken}`;
    return this.http.post<Comment>(url, JSON.stringify({text,assignmentId}), {headers: new HttpHeaders({'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})}).pipe(
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
      return error.message;
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('AssiignmentService: ' + message);
  }
}
