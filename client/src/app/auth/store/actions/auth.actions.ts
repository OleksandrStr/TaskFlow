import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../../types/register-request.interface';
import { CurrentUser } from '../../../../../../shared/interfaces/user.interface';
import { LoginRequest } from '../../types/login-request.interface';

const REGISTER_USER = '[Auth] Register User';
const REGISTER_USER_SUCCESS = '[Auth] Register User Success';

const LOGIN = '[Auth] Login';
const LOGIN_SUCCESS = '[Auth] Login Success';

const GET_CURRENT_USER = '[Auth] Get Current User';
const GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User Success';

const RegisterUser = createAction(REGISTER_USER, props<RegisterRequest>());
const RegisterUserSuccess = createAction(
  REGISTER_USER_SUCCESS,
  props<CurrentUser>()
);

const Login = createAction(LOGIN, props<LoginRequest>());
const LoginSuccess = createAction(LOGIN_SUCCESS, props<CurrentUser>());

const GetCurrentUser = createAction(GET_CURRENT_USER);
const GetCurrentUserSuccess = createAction(
  GET_CURRENT_USER_SUCCESS,
  props<CurrentUser>()
);

export const AuthActions = {
  RegisterUser,
  RegisterUserSuccess,
  Login,
  LoginSuccess,
  GetCurrentUser,
  GetCurrentUserSuccess,
};
