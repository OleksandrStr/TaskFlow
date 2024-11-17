import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import { Task, CreateTaskInfo, UpdateTaskInfo } from '../models';

@Injectable()
export class TasksConnector {
  constructor(private http: HttpClient) {}

  getTasks(boardId: string): Observable<Task[]> {
    const url = `${environment.apiUrl}/boards/${boardId}/tasks`;
    return this.http.get<Task[]>(url);
  }

  createTask(createTaskInfo: CreateTaskInfo): Observable<Task> {
    const { title, columnId, boardId } = createTaskInfo;
    const url = `${environment.apiUrl}/boards/${boardId}/tasks`;

    return this.http.post<Task>(url, { title, columnId });
  }

  updateTask(updateTaskInfo: UpdateTaskInfo): Observable<Task> {
    const { taskId, fields } = updateTaskInfo;
    const url = `${environment.apiUrl}/tasks/${taskId}`;

    return this.http.patch<Task>(url, { fields });
  }

  deleteTask(taskId: string): Observable<void> {
    const url = `${environment.apiUrl}/tasks/${taskId}`;
    return this.http.delete<void>(url);
  }
}
