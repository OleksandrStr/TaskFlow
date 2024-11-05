import { createAction, props } from '@ngrx/store';
import {
  Board,
  Column,
  CreateColumnPayload,
  UpdateBoardPayload,
} from '../../models';

const LOAD_BOARDS = '[Boards] Load Boards';
const LOAD_BOARDS_SUCCESS = '[Boards] Load Boards Success';

const CREATE_BOARD = '[Boards] Create Board';
const CREATE_BOARD_SUCCESS = '[Boards] Create Board Success';

const LOAD_BOARD = '[Boards] Load Board';
const LOAD_BOARD_SUCCESS = '[Boards] Load Board Success';

const UPDATE_BOARD = '[Boards] Update Board';
const UPDATE_BOARD_SUCCESS = '[Boards] Update Board Success';

const DELETE_BOARD = '[Boards] Delete Board';
const DELETE_BOARD_SUCCESS = '[Boards] Delete Board Success';

const LOAD_COLUMNS = '[Boards] Load Columns';
const LOAD_COLUMNS_SUCCESS = '[Boards] Load Columns Success';

const CREATE_COLUMN = '[Boards] Create Column';
const CREATE_COLUMN_SUCCESS = '[Boards] Create Column Success';

export const LoadBoards = createAction(LOAD_BOARDS);
export const LoadBoardsSuccess = createAction(
  LOAD_BOARDS_SUCCESS,
  props<{ payload: Board[] }>()
);

export const CreateBoard = createAction(
  CREATE_BOARD,
  props<{ payload: string }>()
);
export const CreateBoardSuccess = createAction(
  CREATE_BOARD_SUCCESS,
  props<{ payload: Board }>()
);

export const LoadBoard = createAction(LOAD_BOARD, props<{ payload: string }>());
export const LoadBoardSuccess = createAction(
  LOAD_BOARD_SUCCESS,
  props<{ payload: Board }>()
);

export const UpdateBoard = createAction(
  UPDATE_BOARD,
  props<{ payload: UpdateBoardPayload }>()
);
export const UpdateBoardSuccess = createAction(
  UPDATE_BOARD_SUCCESS,
  props<{ payload: Board }>()
);

export const DeleteBoard = createAction(
  DELETE_BOARD,
  props<{ payload: string }>()
);
export const DeleteBoardSuccess = createAction(
  DELETE_BOARD_SUCCESS,
  props<{ payload: string }>()
);

export const LoadColumns = createAction(
  LOAD_COLUMNS,
  props<{ payload: string }>()
);
export const LoadColumnsSuccess = createAction(
  LOAD_COLUMNS_SUCCESS,
  props<{ payload: Column[] }>()
);

export const CreateColumn = createAction(
  CREATE_COLUMN,
  props<{ payload: CreateColumnPayload }>()
);
export const CreateColumnSuccess = createAction(
  CREATE_COLUMN_SUCCESS,
  props<{ payload: Column }>()
);
