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
import { BoardsActions } from '../store/actions';
import { BoardsSelectors } from '../store/selectors';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class BoardsService {
  constructor(
    private store: Store<BoardsState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

  goToBoard(): void {
    const boardId = this.route.firstChild.snapshot.paramMap.get('boardId');
    this.router.navigate(['boards', boardId]);
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
