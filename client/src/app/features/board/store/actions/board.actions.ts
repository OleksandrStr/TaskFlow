import { createAction, props } from '@ngrx/store';
import { UpdateBoardInfo } from '../../models';
import { Board } from '../../../boards/models';

const LOAD_BOARD = '[Board] Load Board';
const LOAD_BOARD_SUCCESS = '[Board] Load Board Success';

const UPDATE_BOARD = '[Board] Update Board';
const UPDATE_BOARD_SUCCESS = '[Board] Update Board Success';

export const LoadBoard = createAction(LOAD_BOARD, props<{ payload: string }>());
export const LoadBoardSuccess = createAction(
  LOAD_BOARD_SUCCESS,
  props<{ payload: Board }>()
);

export const UpdateBoard = createAction(
  UPDATE_BOARD,
  props<{ payload: UpdateBoardInfo }>()
);
export const UpdateBoardSuccess = createAction(
  UPDATE_BOARD_SUCCESS,
  props<{ payload: Board }>()
);
