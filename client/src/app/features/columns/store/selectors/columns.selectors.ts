import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COLUMNS_FEATURE, ColumnsState } from '../../models';

export const getColumnsState =
  createFeatureSelector<ColumnsState>(COLUMNS_FEATURE);

export const getColumns = createSelector(
  getColumnsState,
  (state) => state.columns
);
