import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import {
  AuthLocalStorageKey,
  AuthState,
  LoginInfo,
  RegisterInfo,
  User,
} from '../models';
import { Store } from '@ngrx/store';
import { UserResponse } from '@common';
import { AuthActions } from '../store/actions';
import { AuthSelectors } from '../store/selectors';
import { isDefined } from '@shared';

@Injectable()
export class AuthService {
  constructor(private store: Store<AuthState>) {}

  currentUser$ = this.getCurrentUser();
  isLoggedIn$ = this.currentUser$.pipe(map(Boolean));

  register(registerInfo: RegisterInfo): void {
    this.store.dispatch(AuthActions.RegisterUser({ payload: registerInfo }));
  }

  login(loginInfo: LoginInfo): void {
    this.store.dispatch(AuthActions.Login({ payload: loginInfo }));
  }

  logout(): void {
    this.store.dispatch(AuthActions.Logout());
  }

  loadCurrentUser(): void {
    this.store.dispatch(AuthActions.LoadCurrentUser());
  }

  getCurrentUser(): Observable<User> {
    return this.store.select(AuthSelectors.getUser).pipe(filter(isDefined));
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

  setToken(user: UserResponse): void {
    localStorage.setItem(AuthLocalStorageKey.AUTH_TOKEN, user.token);
  }
}
