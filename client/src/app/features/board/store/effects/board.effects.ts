import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { BoardActions } from '../actions';
import { BoardConnector } from '../../connectors';

@Injectable()
export class BoardEffects {
  constructor(
    private actions$: Actions,
    private boardsConnector: BoardConnector
  ) {}

  loadBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardActions.LoadBoard),
      switchMap(({ payload }) => this.boardsConnector.getBoard(payload)),
      map((board) => BoardActions.LoadBoardSuccess({ payload: board }))
    )
  );

  updateBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardActions.UpdateBoard),
      switchMap(({ payload }) => this.boardsConnector.updateBoard(payload)),
      map((board) => BoardActions.UpdateBoardSuccess({ payload: board }))
    )
  );
}
