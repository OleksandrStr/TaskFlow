import { createSelector } from '@ngrx/store';
import { getBoardsState } from './boards.selectors';

export const getColumns = createSelector(
  getBoardsState,
  (state) => state.currentColumns
);
