import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { TasksActions } from '../actions';
import { TasksConnector } from '../../connectors';
import { BoardService } from '../../../board/services';

@Injectable()
export class TasksEffects {
  constructor(
    private actions$: Actions,
    private boardService: BoardService,
    private tasksConnector: TasksConnector
  ) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.LoadTasks),
      switchMap(({ payload }) => this.tasksConnector.getTasks(payload)),
      map((tasks) => TasksActions.LoadTasksSuccess({ payload: tasks }))
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.CreateTask),
      switchMap(({ payload }) => this.tasksConnector.createTask(payload)),
      map((task) => TasksActions.CreateTaskSuccess({ payload: task }))
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.UpdateTask),
      switchMap(({ payload }) => this.tasksConnector.updateTask(payload)),
      map((task) => TasksActions.UpdateTaskSuccess({ payload: task }))
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.DeleteTask),
      switchMap(({ payload }) =>
        this.tasksConnector.deleteTask(payload).pipe(
          map(() => TasksActions.DeleteTaskSuccess({ payload })),
          tap(() => this.boardService.goToBoard())
        )
      )
    )
  );
}
