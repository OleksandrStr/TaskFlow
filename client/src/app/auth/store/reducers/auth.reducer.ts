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
}

const initialAuthState: AuthState = {
  user: null,
};

export const AuthReducer = createReducer(
  initialAuthState,
  on(AuthActions.RegisterUserSuccess, (_state, currentUser) => ({
    user: {
      id: currentUser.id,
      username: currentUser.username,
      email: currentUser.email,
    },
  }))
);
