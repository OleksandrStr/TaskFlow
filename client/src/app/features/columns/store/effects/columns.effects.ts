import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ColumnsActions } from '../actions';
import { ColumnsConnector } from '../../connectors';

@Injectable()
export class ColumnsEffects {
  constructor(
    private actions$: Actions,
    private columnsConnector: ColumnsConnector
  ) {}

  loadColumns$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ColumnsActions.LoadColumns),
      switchMap(({ payload }) => this.columnsConnector.getColumns(payload)),
      map((columns) => ColumnsActions.LoadColumnsSuccess({ payload: columns }))
    )
  );

  createColumn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ColumnsActions.CreateColumn),
      switchMap(({ payload }) => this.columnsConnector.createColumn(payload)),
      map((column) => ColumnsActions.CreateColumnSuccess({ payload: column }))
    )
  );

  updateColumn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ColumnsActions.UpdateColumn),
      switchMap(({ payload }) => this.columnsConnector.updateColumn(payload)),
      map((column) => ColumnsActions.UpdateColumnSuccess({ payload: column }))
    )
  );

  deleteColumn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ColumnsActions.DeleteColumn),
      switchMap(({ payload }) =>
        this.columnsConnector
          .deleteColumn(payload)
          .pipe(map(() => ColumnsActions.DeleteColumnSuccess({ payload })))
      )
    )
  );
}
