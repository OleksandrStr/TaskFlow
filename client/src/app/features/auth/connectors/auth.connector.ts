import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, RegisterRequest } from '../models';
import { environment } from '@environment';
import { CurrentUser } from '@common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthConnector {
  constructor(private http: HttpClient) {}

  register(registerRequest: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http.post<CurrentUser>(url, registerRequest);
  }

  login(loginRequest: LoginRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users/login';
    return this.http.post<CurrentUser>(url, loginRequest);
  }

  getCurrentUser(): Observable<CurrentUser> {
    const url = environment.apiUrl + '/user';
    return this.http.get<CurrentUser>(url);
  }
}
