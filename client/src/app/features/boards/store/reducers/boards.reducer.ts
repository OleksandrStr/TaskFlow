import { createReducer, on } from '@ngrx/store';
import { BoardsActions } from '../actions';
import { BoardsState } from '../../models';

export const initialBoardsState: BoardsState = {
  boards: null,
  currentBoard: null,
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
  })),
  on(BoardsActions.UpdateBoardSuccess, (state, { payload }) => ({
    ...state,
    currentBoard: payload,
  })),
  on(BoardsActions.DeleteBoardSuccess, (state, { payload }) => ({
    ...state,
    boards: state.boards.filter((board) => board.id !== payload),
  }))
);
