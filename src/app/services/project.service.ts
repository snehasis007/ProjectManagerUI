import { Injectable } from '@angular/core';
import { ProjectConsts } from '../consts/project-consts';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import {Task} from '../models/task';
import { catchError, tap } from 'rxjs/operators';
import { ServiceResult } from '../models/service-result';
import { Project } from '../models/project';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllTasks():Observable<ServiceResult>{
    return this.http.get<ServiceResult>(ProjectConsts.VIEWALL_TASK_URL).pipe(
      tap(
        data => {
          this.logResult(data);
        },
        error=> this.handleError(error)
    ));
  }
  getAllParentTasks():Observable<ServiceResult>{
    return this.http.get<ServiceResult>(ProjectConsts.VIEWALL_PARENT_TASK_URL).pipe(
      tap(
        data => {
          this.logResult(data);
        },
        error=> this.handleError(error)
    ));
  }

  getAllUsers():Observable<ServiceResult>{
    return this.http.get<ServiceResult>(ProjectConsts.VIEWALL_USER_URL).pipe(
      tap(
        data => {
          this.logResult(data);
        },
      error=> this.handleError(error)
    ));
  }
  getAllProjects():Observable<ServiceResult>{
    return this.http.get<ServiceResult>(ProjectConsts.VIEWALL_PROJECT_URL).pipe(
      tap(
        data => {
          this.logResult(data);
        },
      error=> this.handleError(error)
    ));
  }

  saveTask(task:Task):Observable<ServiceResult>{
    return this.http.post<ServiceResult>(ProjectConsts.ADD_TASK_URL,task,this.httpOptions).pipe(
      tap(
        data => {
          this.logResult(data);
        },
        error=> this.handleError(error)
    ));
  }
  saveProject(project:Project):Observable<ServiceResult>{
    return this.http.post<ServiceResult>(ProjectConsts.ADD_PROJECT_URL,project,this.httpOptions).pipe(
      tap(
        data => {
          this.logResult(data);
        },
        error=> this.handleError(error)
    ));
  }
  saveUser(user:User):Observable<ServiceResult>{
    return this.http.post<ServiceResult>(ProjectConsts.ADD_USER_URL,user,this.httpOptions).pipe(
      tap(
        data => {
          this.logResult(data);
        },
        error=> this.handleError(error)
    ));
  }

  removeUser(user:User):Observable<ServiceResult>{
    return this.http.post<ServiceResult>(ProjectConsts.REMOVE_USER_URL,user,this.httpOptions).pipe(
      tap(
        data => {
          this.logResult(data);
        },
        error=> this.handleError(error)
    ));
  }

  private logResult(data:ServiceResult){
    if(data && data.data)
      console.debug("service data:"+data.data.toString());
  }
  private handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if (err.error instanceof ErrorEvent) {
     
      errMsg = `An error occurred: ${err.error.message}`;
    } else {
      
      errMsg = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errMsg);
  }
}
