import { Injectable } from '@angular/core';
import {
  Board,
  BoardsState,
  Column,
  CreateColumnPayload,
  UpdateBoardPayload,
} from '../models';
import { Store } from '@ngrx/store';
import { BoardsActions, BoardsSelectors } from '../store';
import { Observable } from 'rxjs';

@Injectable()
export class BoardsService {
  constructor(private store: Store<BoardsState>) {}

  loadBoards(): void {
    this.store.dispatch(BoardsActions.LoadBoards());
  }

  getBoards(): Observable<Board[]> {
    return this.store.select(BoardsSelectors.getBoards);
  }

  createBoard(title: string): void {
    this.store.dispatch(BoardsActions.CreateBoard({ payload: title }));
  }

  loadBoard(boardId: string): void {
    this.store.dispatch(BoardsActions.LoadBoard({ payload: boardId }));
  }

  getCurrentBoard(): Observable<Board> {
    return this.store.select(BoardsSelectors.getCurrentBoard);
  }

  loadColumns(boardId: string): void {
    this.store.dispatch(BoardsActions.LoadColumns({ payload: boardId }));
  }

  getCurrentColumns(): Observable<Column[]> {
    return this.store.select(BoardsSelectors.getColumns);
  }

  createColumn(createColumnPayload: CreateColumnPayload): void {
    this.store.dispatch(
      BoardsActions.CreateColumn({ payload: createColumnPayload })
    );
  }

  updateBoard(updateBoardPayload: UpdateBoardPayload): void {
    this.store.dispatch(
      BoardsActions.UpdateBoard({ payload: updateBoardPayload })
    );
  }

  deleteBoard(boardId: string): void {
    this.store.dispatch(BoardsActions.DeleteBoard({ payload: boardId }));
  }
}
