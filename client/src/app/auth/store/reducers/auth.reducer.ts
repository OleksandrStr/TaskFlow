import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';

export const AUTH_FEATURE = 'auth';

export interface UserState {
  id: string;
  username: string;
  email: string;
}

export interface AuthState {
  user: UserState;
  error: string;
}

const initialAuthState: AuthState = {
  user: null,
  error: '',
};

export const AuthReducer = createReducer(
  initialAuthState,
  on(
    AuthActions.RegisterUserSuccess,
    AuthActions.LoginSuccess,
    AuthActions.GetCurrentUserSuccess,
    (_state, currentUser) => ({
      user: {
        id: currentUser.id,
        username: currentUser.username,
        email: currentUser.email,
      },
      error: '',
    })
  ),
  on(AuthActions.RegisterUserError, (state, { err }) => ({
    ...state,
    error: err.error.join(', '),
  }))
);
