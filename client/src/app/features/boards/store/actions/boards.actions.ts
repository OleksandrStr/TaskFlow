import { createAction, props } from '@ngrx/store';
import { Board } from '../../models';

const LOAD_BOARDS = '[Boards] Load Boards';
const LOAD_BOARDS_SUCCESS = '[Boards] Load Boards Success';

const CREATE_BOARD = '[Boards] Create Board';
const CREATE_BOARD_SUCCESS = '[Boards] Create Board Success';

const DELETE_BOARD = '[Boards] Delete Board';
const DELETE_BOARD_SUCCESS = '[Boards] Delete Board Success';

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

export const DeleteBoard = createAction(
  DELETE_BOARD,
  props<{ payload: string }>()
);
export const DeleteBoardSuccess = createAction(
  DELETE_BOARD_SUCCESS,
  props<{ payload: string }>()
);
