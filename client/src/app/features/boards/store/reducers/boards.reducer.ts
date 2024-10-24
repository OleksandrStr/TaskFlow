import { createReducer, on } from '@ngrx/store';
import { BoardsActions } from '../actions';
import { BoardsState } from '../../models';

const initialBoardsState: BoardsState = {
  boards: [],
};

export const BoardsReducer = createReducer(
  initialBoardsState,
  on(BoardsActions.GetBoardsSuccess, (_state, { payload }) => ({
    boards: payload,
  }))
);
