import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, RegisterRequest } from '../models';
import { environment } from '@environment';
import { UserResponse } from '@common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthConnector {
  constructor(private http: HttpClient) {}

  register(registerRequest: RegisterRequest): Observable<UserResponse> {
    const url = environment.apiUrl + '/users/register';
    return this.http.post<UserResponse>(url, registerRequest);
  }

  login(loginRequest: LoginRequest): Observable<UserResponse> {
    const url = environment.apiUrl + '/users/login';
    return this.http.post<UserResponse>(url, loginRequest);
  }

  getCurrentUser(): Observable<UserResponse> {
    const url = environment.apiUrl + '/users/current';
    return this.http.get<UserResponse>(url);
  }
}
