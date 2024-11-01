export const BOARDS_FEATURE = 'boards';

export interface Board {
  id: string;
  title: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface BoardsState {
  currentBoard: Board;
  boards: Board[];
}
