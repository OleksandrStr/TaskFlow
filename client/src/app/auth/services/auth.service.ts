import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentUser } from '../../../../../shared/interfaces/user.interface';
import { environment } from '../../../environments/environment';
import { RegisterRequest } from '../types/register-request.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  currentUser$ = new BehaviorSubject<CurrentUser | null>(null);

  register(registerRequest: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http.post<CurrentUser>(url, registerRequest);
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
