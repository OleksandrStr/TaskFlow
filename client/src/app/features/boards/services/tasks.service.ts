import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BoardsState, Task, CreateTaskInfo, UpdateTaskInfo } from '../models';
import { TasksActions, TasksSelectors } from '../store';
import { Observable } from 'rxjs';

@Injectable()
export class TasksService {
  constructor(private store: Store<BoardsState>) {}

  loadTasks(boardId: string): void {
    this.store.dispatch(TasksActions.LoadTasks({ payload: boardId }));
  }

  getCurrentTasks(): Observable<Task[]> {
    return this.store.select(TasksSelectors.getTasks);
  }

  createTask(createTaskInfo: CreateTaskInfo): void {
    this.store.dispatch(TasksActions.CreateTask({ payload: createTaskInfo }));
  }

  updateTask(updateTaskInfo: UpdateTaskInfo): void {
    this.store.dispatch(TasksActions.UpdateTask({ payload: updateTaskInfo }));
  }

  deleteTask(taskId: string): void {
    this.store.dispatch(TasksActions.DeleteTask({ payload: taskId }));
  }
}
