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

export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
