import { createAction, props } from '@ngrx/store';
import { Column, CreateColumnInfo, UpdateColumnInfo } from '../../models';

const CREATE_COLUMN = '[Boards] Create Column';
const CREATE_COLUMN_SUCCESS = '[Boards] Create Column Success';

const LOAD_COLUMNS = '[Boards] Load Columns';
const LOAD_COLUMNS_SUCCESS = '[Boards] Load Columns Success';

const UPDATE_COLUMN = '[Boards] Update Column';
const UPDATE_COLUMN_SUCCESS = '[Boards] Update Column Success';

const DELETE_COLUMN = '[Boards] Delete Column';
const DELETE_COLUMN_SUCCESS = '[Boards] Delete Column Success';

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
