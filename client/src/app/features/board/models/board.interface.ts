import { Board } from '../../boards/models';

export const BOARD_FEATURE = 'board';

export interface BoardState {
  board: Board;
}

export interface UpdateBoardInfo {
  boardId: string;
  fields: { title: string };
}
