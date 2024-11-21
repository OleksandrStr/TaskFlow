export const AUTH_FEATURE = 'auth';

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthState {
  user: User;
  error: string;
}

export interface RegisterInfo {
  email: string;
  username: string;
  password: string;
}

export interface LoginInfo {
  email: string;
  password: string;
}
