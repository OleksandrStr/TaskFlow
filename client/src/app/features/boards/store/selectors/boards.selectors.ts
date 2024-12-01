import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOARDS_FEATURE, BoardsState } from '../../models';

export const getBoardsState =
  createFeatureSelector<BoardsState>(BOARDS_FEATURE);

export const getBoards = createSelector(
  getBoardsState,
  (state) => state.boards
);
