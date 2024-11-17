import { createReducer, on } from '@ngrx/store';
import { ColumnsActions } from '../actions';
import { ColumnsState } from '../../models';

export const initialColumnsState: ColumnsState = {
  columns: null,
};

export const ColumnsReducer = createReducer(
  initialColumnsState,
  on(ColumnsActions.LoadColumnsSuccess, (state, { payload }) => ({
    ...state,
    columns: payload,
  })),
  on(ColumnsActions.CreateColumnSuccess, (state, { payload }) => ({
    ...state,
    columns: [...state.columns, payload],
  })),
  on(ColumnsActions.UpdateColumnSuccess, (state, { payload }) => ({
    ...state,
    columns: state.columns.map((column) =>
      column.id === payload.id ? payload : column
    ),
  })),
  on(ColumnsActions.DeleteColumnSuccess, (state, { payload }) => ({
    ...state,
    columns: state.columns.filter((column) => column.id !== payload),
  }))
);
