import { createAction, props } from '@ngrx/store';
import { UserResponse } from '@common';
import { LoginInfo, RegisterInfo } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

const REGISTER_USER = '[Auth] Register User';
const REGISTER_USER_SUCCESS = '[Auth] Register User Success';
const REGISTER_USER_ERROR = '[Auth] Register User Error';

const LOGIN = '[Auth] Login';
const LOGIN_SUCCESS = '[Auth] Login Success';
const LOGIN_ERROR = '[Auth] Login Error';

const LOGOUT = '[Auth] Logout';

const CLEAN_AUTH_ERROR = '[Auth] Clen Auth Error';

const LOAD_CURRENT_USER = '[Auth] Load Current User';
const LOAD_CURRENT_USER_SUCCESS = '[Auth] Load Current User Success';
const LOAD_CURRENT_USER_ERROR = '[Auth] Load Current User Error';

export const RegisterUser = createAction(
  REGISTER_USER,
  props<{ payload: RegisterInfo }>()
);
export const RegisterUserSuccess = createAction(
  REGISTER_USER_SUCCESS,
  props<{ payload: UserResponse }>()
);
export const RegisterUserError = createAction(
  REGISTER_USER_ERROR,
  props<{ err: HttpErrorResponse }>()
);

export const Login = createAction(LOGIN, props<{ payload: LoginInfo }>());
export const LoginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ payload: UserResponse }>()
);
export const LoginError = createAction(
  LOGIN_ERROR,
  props<{ err: HttpErrorResponse }>()
);

export const Logout = createAction(LOGOUT);

export const CleanAuthError = createAction(CLEAN_AUTH_ERROR);

export const LoadCurrentUser = createAction(LOAD_CURRENT_USER);
export const LoadCurrentUserSuccess = createAction(
  LOAD_CURRENT_USER_SUCCESS,
  props<{ payload: UserResponse }>()
);
export const LoadCurrentUserError = createAction(LOAD_CURRENT_USER_ERROR);
