import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';

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
    (_state, { payload }) => ({
      user: {
        id: payload.id,
        username: payload.username,
        email: payload.email,
      },
      error: '',
    })
  ),
  on(
    AuthActions.RegisterUserError,
    AuthActions.LoginError,
    (state, { err }) => ({
      ...state,
      error: err.error.error || err.error.join(', '),
    })
  )
);
