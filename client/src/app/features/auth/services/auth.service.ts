import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import {
  AuthCookiesKey,
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
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable()
export class AuthService {
  constructor(
    private cookieService: SsrCookieService,
    private store: Store<AuthState>
  ) {}

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
    return this.cookieService.get(AuthCookiesKey.AUTH_TOKEN);
  }

  setToken(user: UserResponse): void {
    this.cookieService.set(AuthCookiesKey.AUTH_TOKEN, user.token, {
      path: '/',
      secure: true,
      sameSite: 'Strict',
      expires: 7,
    });
  }

  deleteToken(): void {
    this.cookieService.delete(AuthCookiesKey.AUTH_TOKEN);
  }
}
