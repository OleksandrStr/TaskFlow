import { createReducer, on } from '@ngrx/store';
import { BoardActions } from '../actions';
import { BoardState } from '../../models';

export const initialBoardState: BoardState = {
  board: null,
};

export const BoardReducer = createReducer(
  initialBoardState,
  on(BoardActions.LoadBoardSuccess, (state, { payload }) => ({
    ...state,
    board: payload,
  })),
  on(BoardActions.UpdateBoardSuccess, (state, { payload }) => ({
    ...state,
    board: payload,
  }))
);
