import { createSelector } from '@ngrx/store';
import { getBoardsState } from './boards.selectors';

export const getTasks = createSelector(
  getBoardsState,
  (state) => state.currentTasks
);
