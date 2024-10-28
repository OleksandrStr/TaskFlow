import { createAction, props } from '@ngrx/store';
import { Board } from '../../models';

const LOA_BOARDS = '[Boards] Get Boards';
const LOAD_BOARDS_SUCCESS = '[Boards] Get Boards Success';

const CREATE_BOARD = '[Boards] Create Board';
const CREATE_BOARD_SUCCESS = '[Boards] Create Board Success';

export const LoadBoards = createAction(LOA_BOARDS);
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
