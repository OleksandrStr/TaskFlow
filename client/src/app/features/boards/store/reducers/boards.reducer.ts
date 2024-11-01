import { createReducer, on } from '@ngrx/store';
import { BoardsActions } from '../actions';
import { BoardsState } from '../../models';

const initialBoardsState: BoardsState = {
  currentBoard: null,
  boards: [],
};

export const BoardsReducer = createReducer(
  initialBoardsState,
  on(BoardsActions.LoadBoardsSuccess, (state, { payload }) => ({
    ...state,
    boards: payload,
  })),
  on(BoardsActions.CreateBoardSuccess, (state, { payload }) => ({
    ...state,
    boards: [...state.boards, payload],
  })),
  on(BoardsActions.LoadBoardSuccess, (state, { payload }) => ({
    ...state,
    currentBoard: payload,
  }))
);
