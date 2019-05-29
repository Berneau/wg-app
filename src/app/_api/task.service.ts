import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Task } from '../_models/task.model';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  readAll(): Observable<Task[]> {

    return this.http.get(`tasks`)
    .map((response: any) => {
      return response.tasks;
    })
  }

  read(task: Task): Observable<Task> {

    return this.http.get(`tasks/${task._id}`)
    .map((response: any) => {
      return response.task;
    })
  }

  create(task: Task): Observable<Task> {

    return this.http.post(`tasks`, task)
    .map((response: any) => {
      return response.task;
    })
  }

  update(task: Task): Observable<Task> {

    return this.http.put(`tasks/${task._id}`, task)
    .map((response: any) => {
      return response.task;
    })
  }

  delete(task: Task, shouldDelete: boolean): Observable<Task> {

    return this.http.delete(`tasks/${task._id}?shouldDelete=${shouldDelete}`)
    .map((response: any) => {
      return response.task;
    })
  }
}
