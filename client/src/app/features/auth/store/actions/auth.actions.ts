import { createAction, props } from '@ngrx/store';
import { UserResponse } from '@common';
import { LoginRequest, RegisterRequest } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

const REGISTER_USER = '[Auth] Register User';
const REGISTER_USER_SUCCESS = '[Auth] Register User Success';
const REGISTER_USER_ERROR = '[Auth] Register User Error';

const LOGIN = '[Auth] Login';
const LOGIN_SUCCESS = '[Auth] Login Success';
const LOGIN_ERROR = '[Auth] Login Error';

const CLEAN_AUTH_ERROR = '[Auth] Clen Auth Error';

const GET_CURRENT_USER = '[Auth] Get Current User';
const GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User Success';

export const RegisterUser = createAction(
  REGISTER_USER,
  props<{ payload: RegisterRequest }>()
);
export const RegisterUserSuccess = createAction(
  REGISTER_USER_SUCCESS,
  props<{ payload: UserResponse }>()
);
export const RegisterUserError = createAction(
  REGISTER_USER_ERROR,
  props<{ err: HttpErrorResponse }>()
);

export const Login = createAction(LOGIN, props<{ payload: LoginRequest }>());
export const LoginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ payload: UserResponse }>()
);
export const LoginError = createAction(
  LOGIN_ERROR,
  props<{ err: HttpErrorResponse }>()
);

export const CleanAuthError = createAction(CLEAN_AUTH_ERROR);

export const GetCurrentUser = createAction(GET_CURRENT_USER);
export const GetCurrentUserSuccess = createAction(
  GET_CURRENT_USER_SUCCESS,
  props<{ payload: UserResponse }>()
);
