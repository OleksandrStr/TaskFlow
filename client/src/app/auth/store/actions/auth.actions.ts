import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../../types/register-request.interface';
import { CurrentUser } from '../../../../../../shared/interfaces/user.interface';

const REGISTER_USER = '[Auth] Register User';
const REGISTER_USER_SUCCESS = '[Auth] Register User Success';

const RegisterUser = createAction(REGISTER_USER, props<RegisterRequest>());
const RegisterUserSuccess = createAction(
  REGISTER_USER_SUCCESS,
  props<CurrentUser>()
);

export const AuthActions = {
  RegisterUser,
  RegisterUserSuccess,
};
