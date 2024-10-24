import { createAction, props } from '@ngrx/store';
import { Board } from '../../models';

const GET_BOARDS = '[Boards] Get Boards';
const GET_BOARDS_SUCCESS = '[Boards] Get Boards Success';

export const GetBoards = createAction(GET_BOARDS);
export const GetBoardsSuccess = createAction(
  GET_BOARDS_SUCCESS,
  props<{ payload: Board[] }>()
);
