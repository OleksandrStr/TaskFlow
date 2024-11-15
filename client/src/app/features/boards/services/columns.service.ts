import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  BoardsState,
  Column,
  CreateColumnInfo,
  UpdateColumnInfo,
} from '../models';
import { ColumnsActions, ColumnsSelectors } from '../store';
import { Observable } from 'rxjs';

@Injectable()
export class ColumnsService {
  constructor(private store: Store<BoardsState>) {}

  loadColumns(boardId: string): void {
    this.store.dispatch(ColumnsActions.LoadColumns({ payload: boardId }));
  }

  getCurrentColumns(): Observable<Column[]> {
    return this.store.select(ColumnsSelectors.getColumns);
  }

  createColumn(createColumnInfo: CreateColumnInfo): void {
    this.store.dispatch(
      ColumnsActions.CreateColumn({ payload: createColumnInfo })
    );
  }

  updateColumn(updateColumnInfo: UpdateColumnInfo): void {
    this.store.dispatch(
      ColumnsActions.UpdateColumn({
        payload: updateColumnInfo,
      })
    );
  }

  deleteColumn(columnId: string): void {
    this.store.dispatch(ColumnsActions.DeleteColumn({ payload: columnId }));
  }
}
