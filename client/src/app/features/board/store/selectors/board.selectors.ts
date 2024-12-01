import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOARD_FEATURE, BoardState } from '../../models';

export const getBoardsState = createFeatureSelector<BoardState>(BOARD_FEATURE);

export const getCurrentBoard = createSelector(
  getBoardsState,
  (state) => state.board
);
