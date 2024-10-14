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

export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
