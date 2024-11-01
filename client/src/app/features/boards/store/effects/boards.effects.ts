import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { BoardsActions } from '../actions';
import { BoardsConnector } from '../../connectors';

@Injectable()
export class BoardsEffects {
  constructor(
    private actions$: Actions,
    private boardsConnector: BoardsConnector
  ) {}

  getBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardsActions.LoadBoards),
      switchMap(() => this.boardsConnector.getBoards()),
      map((boards) => BoardsActions.LoadBoardsSuccess({ payload: boards }))
    )
  );

  loadBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardsActions.LoadBoard),
      switchMap(({ payload }) => this.boardsConnector.loadBoard(payload)),
      map((board) => BoardsActions.LoadBoardSuccess({ payload: board }))
    )
  );

  createBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardsActions.CreateBoard),
      switchMap(({ payload }) => this.boardsConnector.createBoard(payload)),
      map((board) => BoardsActions.CreateBoardSuccess({ payload: board }))
    )
  );
}
