import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../../types/register-request.interface';
import { CurrentUser } from '../../../../../../shared/interfaces/user.interface';

const GET_CURRENT_USER = '[Auth] Get Current User';
const GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User Success';
const REGISTER_USER = '[Auth] Register User';
const REGISTER_USER_SUCCESS = '[Auth] Register User Success';

const GetCurrentUser = createAction(GET_CURRENT_USER);
const GetCurrentUserSuccess = createAction(
  GET_CURRENT_USER_SUCCESS,
  props<CurrentUser>()
);
const RegisterUser = createAction(REGISTER_USER, props<RegisterRequest>());
const RegisterUserSuccess = createAction(
  REGISTER_USER_SUCCESS,
  props<CurrentUser>()
);

export const AuthActions = {
  GetCurrentUser,
  GetCurrentUserSuccess,
  RegisterUser,
  RegisterUserSuccess,
};
