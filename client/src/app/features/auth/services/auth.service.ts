import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  AuthLocalStorageKey,
  AuthState,
  LoginRequest,
  RegisterRequest,
} from '../models';
import { Store } from '@ngrx/store';
import { CurrentUser } from '@common';
import { AuthActions, AuthSelectors } from '../store';

@Injectable()
export class AuthService {
  constructor(private store: Store<AuthState>) {}

  currentUser$ = this.store.select(AuthSelectors.getUser);
  isLoggedIn$ = this.currentUser$.pipe(map(Boolean));

  register(registerRequest: RegisterRequest): void {
    this.store.dispatch(AuthActions.RegisterUser({ payload: registerRequest }));
  }

  login(loginRequest: LoginRequest): void {
    this.store.dispatch(AuthActions.Login({ payload: loginRequest }));
  }

  getCurrentUser(): void {
    this.store.dispatch(AuthActions.GetCurrentUser());
  }

  getError(): Observable<string> {
    return this.store.select(AuthSelectors.getAuthError);
  }

  cleanError(): void {
    this.store.dispatch(AuthActions.CleanAuthError());
  }

  getToken(): string {
    return localStorage.getItem(AuthLocalStorageKey.AUTH_TOKEN);
  }

  setToken(currentUser: CurrentUser): void {
    localStorage.setItem(AuthLocalStorageKey.AUTH_TOKEN, currentUser.token);
  }
}
