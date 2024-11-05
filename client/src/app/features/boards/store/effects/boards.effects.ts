import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { BoardsActions } from '../actions';
import { BoardsConnector } from '../../connectors';
import { Router } from '@angular/router';

@Injectable()
export class BoardsEffects {
  constructor(
    private actions$: Actions,
    private boardsConnector: BoardsConnector,
    private router: Router
  ) {}

  loadBoards$ = createEffect(() =>
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

  updateBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardsActions.UpdateBoard),
      switchMap(({ payload }) => this.boardsConnector.updateBoard(payload)),
      map((board) => BoardsActions.UpdateBoardSuccess({ payload: board }))
    )
  );

  deleteBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardsActions.DeleteBoard),
      switchMap(({ payload }) =>
        this.boardsConnector.deleteBoard(payload).pipe(
          map(() => BoardsActions.DeleteBoardSuccess({ payload })),
          tap(() => this.router.navigateByUrl('/boards'))
        )
      )
    )
  );

  loadColumns$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardsActions.LoadColumns),
      switchMap(({ payload }) => this.boardsConnector.getColumns(payload)),
      map((columns) => BoardsActions.LoadColumnsSuccess({ payload: columns }))
    )
  );

  createColumn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardsActions.CreateColumn),
      switchMap(({ payload }) => this.boardsConnector.createColumn(payload)),
      map((column) => BoardsActions.CreateColumnSuccess({ payload: column }))
    )
  );
}
