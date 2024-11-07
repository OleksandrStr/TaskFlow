import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import {
  Board,
  Column,
  CreateColumnInfo,
  UpdateBoardInfo,
  UpdateColumnInfo,
} from '../models';

@Injectable()
export class BoardsConnector {
  constructor(private http: HttpClient) {}

  getBoards(): Observable<Board[]> {
    const url = environment.apiUrl + '/boards';
    return this.http.get<Board[]>(url);
  }

  createBoard(title: string): Observable<Board> {
    const url = environment.apiUrl + '/boards';
    return this.http.post<Board>(url, { title });
  }

  getBoard(boardId: string): Observable<Board> {
    const url = `${environment.apiUrl}/boards/${boardId}`;
    return this.http.get<Board>(url);
  }

  updateBoard(updateBoardInfo: UpdateBoardInfo): Observable<Board> {
    const { boardId, fields } = updateBoardInfo;
    const url = `${environment.apiUrl}/boards/${boardId}`;
    return this.http.put<Board>(url, { fields });
  }

  deleteBoard(boardId: string): Observable<void> {
    const url = `${environment.apiUrl}/boards/${boardId}`;
    return this.http.delete<void>(url);
  }

  createColumn(createColumnInfo: CreateColumnInfo): Observable<Column> {
    const { boardId, title } = createColumnInfo;
    const url = `${environment.apiUrl}/boards/${boardId}/columns`;
    return this.http.post<Column>(url, { title });
  }

  getColumns(boardId: string): Observable<Column[]> {
    const url = `${environment.apiUrl}/boards/${boardId}/columns`;
    return this.http.get<Column[]>(url);
  }

  updateColumn(updateColumnInfo: UpdateColumnInfo): Observable<Column> {
    const { columnId, fields } = updateColumnInfo;

    const url = `${environment.apiUrl}/columns/${columnId}`;
    return this.http.put<Column>(url, { fields });
  }

  deleteColumn(columnId: string): Observable<void> {
    const url = `${environment.apiUrl}/columns/${columnId}`;
    return this.http.delete<void>(url);
  }
}
