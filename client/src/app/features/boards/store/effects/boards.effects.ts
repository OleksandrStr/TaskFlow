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
      ofType(BoardsActions.GetBoards),
      switchMap(() => this.boardsConnector.getBoards()),
      map((boards) => BoardsActions.GetBoardsSuccess({ payload: boards }))
    )
  );
}
