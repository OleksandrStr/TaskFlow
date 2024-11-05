import { createReducer, on } from '@ngrx/store';
import { BoardsActions } from '../actions';
import { BoardsState } from '../../models';

const initialBoardsState: BoardsState = {
  boards: [],
  currentBoard: null,
  currentColumns: null,
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
  })),
  on(BoardsActions.LoadColumnsSuccess, (state, { payload }) => ({
    ...state,
    currentColumns: payload,
  })),
  on(BoardsActions.CreateColumnSuccess, (state, { payload }) => ({
    ...state,
    currentColumns: [...state.currentColumns, payload],
  }))
);
