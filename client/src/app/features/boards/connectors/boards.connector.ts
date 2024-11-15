import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import { Board } from '../models';

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

  deleteBoard(boardId: string): Observable<void> {
    const url = `${environment.apiUrl}/boards/${boardId}`;
    return this.http.delete<void>(url);
  }
}
