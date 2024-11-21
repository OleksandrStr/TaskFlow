import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo, RegisterInfo } from '../models';
import { environment } from '@environment';
import { UserResponse } from '@common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthConnector {
  constructor(private http: HttpClient) {}

  register(registerInfo: RegisterInfo): Observable<UserResponse> {
    const url = environment.apiUrl + '/users/register';
    return this.http.post<UserResponse>(url, registerInfo);
  }

  login(loginInfo: LoginInfo): Observable<UserResponse> {
    const url = environment.apiUrl + '/users/login';
    return this.http.post<UserResponse>(url, loginInfo);
  }

  getCurrentUser(): Observable<UserResponse> {
    const url = environment.apiUrl + '/users/current';
    return this.http.get<UserResponse>(url);
  }
}
