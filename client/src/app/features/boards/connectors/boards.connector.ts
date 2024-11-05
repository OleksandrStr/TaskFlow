import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import {
  Board,
  Column,
  CreateColumnPayload,
  UpdateBoardPayload,
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

  loadBoard(boardId: string): Observable<Board> {
    const url = `${environment.apiUrl}/boards/${boardId}`;
    return this.http.get<Board>(url);
  }

  updateBoard(updateBoardPayload: UpdateBoardPayload): Observable<Board> {
    const url = `${environment.apiUrl}/boards/${updateBoardPayload.boardId}`;
    return this.http.put<Board>(url, updateBoardPayload);
  }

  deleteBoard(boardId: string): Observable<void> {
    const url = `${environment.apiUrl}/boards/${boardId}`;
    return this.http.delete<void>(url);
  }

  getColumns(boardId: string): Observable<Column[]> {
    const url = `${environment.apiUrl}/boards/${boardId}/columns`;
    return this.http.get<Column[]>(url);
  }

  createColumn(createColumnPayload: CreateColumnPayload): Observable<Column> {
    const url = `${environment.apiUrl}/boards/${createColumnPayload.boardId}/columns`;
    return this.http.post<Column>(url, createColumnPayload);
  }
}
