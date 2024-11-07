import { Injectable } from '@angular/core';
import {
  Board,
  BoardsState,
  Column,
  CreateColumnInfo,
  UpdateBoardInfo,
  UpdateColumnInfo,
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

  updateBoard(updateBoardInfo: UpdateBoardInfo): void {
    this.store.dispatch(
      BoardsActions.UpdateBoard({ payload: updateBoardInfo })
    );
  }

  deleteBoard(boardId: string): void {
    this.store.dispatch(BoardsActions.DeleteBoard({ payload: boardId }));
  }

  loadColumns(boardId: string): void {
    this.store.dispatch(BoardsActions.LoadColumns({ payload: boardId }));
  }

  getCurrentColumns(): Observable<Column[]> {
    return this.store.select(BoardsSelectors.getColumns);
  }

  createColumn(createColumnInfo: CreateColumnInfo): void {
    this.store.dispatch(
      BoardsActions.CreateColumn({ payload: createColumnInfo })
    );
  }

  updateColumn(updateColumnInfo: UpdateColumnInfo): void {
    this.store.dispatch(
      BoardsActions.UpdateColumn({
        payload: updateColumnInfo,
      })
    );
  }

  deleteColumn(columnId: string): void {
    this.store.dispatch(BoardsActions.DeleteColumn({ payload: columnId }));
  }
}