import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../../types/register-request.interface';
import { CurrentUser } from '../../../../../../shared/interfaces/user.interface';
import { LoginRequest } from '../../types/login-request.interface';
import { HttpErrorResponse } from '@angular/common/http';

const REGISTER_USER = '[Auth] Register User';
const REGISTER_USER_SUCCESS = '[Auth] Register User Success';
const REGISTER_USER_ERROR = '[Auth] Register User Error';

const LOGIN = '[Auth] Login';
const LOGIN_SUCCESS = '[Auth] Login Success';
const LOGIN_ERROR = '[Auth] Login Error';

const GET_CURRENT_USER = '[Auth] Get Current User';
const GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User Success';

const RegisterUser = createAction(
  REGISTER_USER,
  props<{ payload: RegisterRequest }>()
);
const RegisterUserSuccess = createAction(
  REGISTER_USER_SUCCESS,
  props<{ payload: CurrentUser }>()
);
const RegisterUserError = createAction(
  REGISTER_USER_ERROR,
  props<{ err: HttpErrorResponse }>()
);

const Login = createAction(LOGIN, props<{ payload: LoginRequest }>());
const LoginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ payload: CurrentUser }>()
);
const LoginError = createAction(
  LOGIN_ERROR,
  props<{ err: HttpErrorResponse }>()
);

const GetCurrentUser = createAction(GET_CURRENT_USER);
const GetCurrentUserSuccess = createAction(
  GET_CURRENT_USER_SUCCESS,
  props<{ payload: CurrentUser }>()
);

export const AuthActions = {
  RegisterUser,
  RegisterUserSuccess,
  RegisterUserError,
  Login,
  LoginSuccess,
  LoginError,
  GetCurrentUser,
  GetCurrentUserSuccess,
};
