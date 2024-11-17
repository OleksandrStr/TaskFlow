import { createAction, props } from '@ngrx/store';
import { Column, CreateColumnInfo, UpdateColumnInfo } from '../../models';

const CREATE_COLUMN = '[Columns] Create Column';
const CREATE_COLUMN_SUCCESS = '[Columns] Create Column Success';

const LOAD_COLUMNS = '[Columns] Load Columns';
const LOAD_COLUMNS_SUCCESS = '[Columns] Load Columns Success';

const UPDATE_COLUMN = '[Columns] Update Column';
const UPDATE_COLUMN_SUCCESS = '[Columns] Update Column Success';

const DELETE_COLUMN = '[Columns] Delete Column';
const DELETE_COLUMN_SUCCESS = '[Columns] Delete Column Success';

export const CreateColumn = createAction(
  CREATE_COLUMN,
  props<{ payload: CreateColumnInfo }>()
);
export const CreateColumnSuccess = createAction(
  CREATE_COLUMN_SUCCESS,
  props<{ payload: Column }>()
);

export const LoadColumns = createAction(
  LOAD_COLUMNS,
  props<{ payload: string }>()
);
export const LoadColumnsSuccess = createAction(
  LOAD_COLUMNS_SUCCESS,
  props<{ payload: Column[] }>()
);

export const UpdateColumn = createAction(
  UPDATE_COLUMN,
  props<{ payload: UpdateColumnInfo }>()
);
export const UpdateColumnSuccess = createAction(
  UPDATE_COLUMN_SUCCESS,
  props<{ payload: Column }>()
);

export const DeleteColumn = createAction(
  DELETE_COLUMN,
  props<{ payload: string }>()
);
export const DeleteColumnSuccess = createAction(
  DELETE_COLUMN_SUCCESS,
  props<{ payload: string }>()
);
