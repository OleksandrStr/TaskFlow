import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import { CreateColumnInfo, Column, UpdateColumnInfo } from '../models';

@Injectable()
export class ColumnsConnector {
  constructor(private http: HttpClient) {}

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
