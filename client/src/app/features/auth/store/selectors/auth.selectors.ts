import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE, AuthState } from '../../types/auth.model';

const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE);
export const getUser = createSelector(getAuthState, (state) => state.user);
export const getAuthError = createSelector(
  getAuthState,
  (state) => state.error
);
