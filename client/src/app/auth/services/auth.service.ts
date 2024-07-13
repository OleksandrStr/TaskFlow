import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CurrentUser } from '../../../../../shared/interfaces/user.interface';
import { RegisterRequest } from '../types/register-request.interface';
import { LoginRequest } from '../types/login-request.interface';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';
import { AuthActions } from '../store/actions/auth.actions';
import { getAuthError, getUser } from '../store/selectors/auth.selectors';

@Injectable()
export class AuthService {
  constructor(private store: Store<AuthState>) {}

  currentUser$ = this.store.select(getUser);
  isLoggedIn$ = this.currentUser$.pipe(map(Boolean));

  register(registerRequest: RegisterRequest): void {
    this.store.dispatch(AuthActions.RegisterUser(registerRequest));
  }

  login(loginRequest: LoginRequest): void {
    this.store.dispatch(AuthActions.Login(loginRequest));
  }

  getCurrentUser(): void {
    this.store.dispatch(AuthActions.GetCurrentUser());
  }

  getError(): Observable<string> {
    return this.store.select(getAuthError);
  }

  setToken(currentUser: CurrentUser): void {
    localStorage.setItem('token', currentUser.token);
  }
}
