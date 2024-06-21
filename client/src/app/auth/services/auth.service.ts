import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CurrentUser } from '../../../../../shared/interfaces/user.interface';
import { environment } from '../../../environments/environment';
import { RegisterRequest } from '../types/register-request.interface';
import { LoginRequest } from '../types/login-request.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  currentUser$ = new BehaviorSubject<CurrentUser | null>(null);
  isLoggedIn$ = this.currentUser$.pipe(map(Boolean));

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

  setCurrentUser(currentUser: CurrentUser | null): void {
    this.currentUser$.next(currentUser);
  }

  setToken(currentUser: CurrentUser): void {
    localStorage.setItem('token', currentUser.token);
  }
}
