import { Column } from './column.interface';

export const BOARDS_FEATURE = 'boards';

export interface Board {
  id: string;
  title: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface BoardsState {
  boards: Board[];
  currentBoard: Board;
  currentColumns: Column[];
}
