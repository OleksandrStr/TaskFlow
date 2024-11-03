import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOARDS_FEATURE, BoardsState } from '../../models';

const getBoardsState = createFeatureSelector<BoardsState>(BOARDS_FEATURE);

export const getBoards = createSelector(
  getBoardsState,
  (state) => state.boards
);
export const getCurrentBoard = createSelector(
  getBoardsState,
  (state) => state.currentBoard
);

export const getColumns = createSelector(
  getBoardsState,
  (state) => state.currentColumns
);
