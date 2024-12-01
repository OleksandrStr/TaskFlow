import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import { UpdateBoardInfo } from '../models';
import { Board } from '../../boards/models';

@Injectable()
export class BoardConnector {
  constructor(private http: HttpClient) {}

  getBoard(boardId: string): Observable<Board> {
    const url = `${environment.apiUrl}/boards/${boardId}`;
    return this.http.get<Board>(url);
  }

  updateBoard(updateBoardInfo: UpdateBoardInfo): Observable<Board> {
    const { boardId, fields } = updateBoardInfo;
    const url = `${environment.apiUrl}/boards/${boardId}`;
    return this.http.put<Board>(url, { fields });
  }
}
