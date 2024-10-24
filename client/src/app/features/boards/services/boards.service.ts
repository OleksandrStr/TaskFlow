import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../models';
import { environment } from '@environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BoardsService {
  constructor(private http: HttpClient) {}

  getBoards(): Observable<Board[]> {
    const url = environment.apiUrl + '/boards';
    return this.http.get<Board[]>(url);
  }
}
