import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';
import { AuthState } from '../../models';

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
  on(AuthActions.Logout, (_state, _action) => initialAuthState),
  on(AuthActions.CleanAuthError, (state, _action) => ({
    ...state,
    error: '',
  })),
  on(
    AuthActions.RegisterUserError,
    AuthActions.LoginError,
    (state, { err }) => ({
      ...state,
      error: err.error.error || err.error.join(', '),
    })
  )
);
