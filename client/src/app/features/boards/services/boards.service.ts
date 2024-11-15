import { Injectable } from '@angular/core';
import { Board, BoardsState } from '../models';
import { Store } from '@ngrx/store';
import { BoardsActions } from '../store/actions';
import { BoardsSelectors } from '../store/selectors';
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

  deleteBoard(boardId: string): void {
    this.store.dispatch(BoardsActions.DeleteBoard({ payload: boardId }));
  }
}
