import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services';
import { Router } from '@angular/router';
import { AuthActions } from '../actions';
import { AuthConnector } from '../../connectors';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private authConnector: AuthConnector,
    private router: Router
  ) {}

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.RegisterUser),
      switchMap(({ payload }) => this.authConnector.register(payload)),
      map((currentUser) => {
        this.authService.setToken(currentUser);
        this.router.navigateByUrl('/');

        return AuthActions.RegisterUserSuccess({ payload: currentUser });
      }),
      catchError((err: HttpErrorResponse) =>
        of(AuthActions.RegisterUserError({ err }))
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Login),
      switchMap(({ payload }) => this.authConnector.login(payload)),
      map((currentUser) => {
        this.authService.setToken(currentUser);
        this.router.navigateByUrl('/');

        return AuthActions.LoginSuccess({ payload: currentUser });
      }),
      catchError((err: HttpErrorResponse) =>
        of(AuthActions.LoginError({ err }))
      )
    )
  );

  currentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.GetCurrentUser),
      switchMap(() => this.authConnector.getCurrentUser()),
      map((currentUser) =>
        AuthActions.GetCurrentUserSuccess({ payload: currentUser })
      )
    )
  );
}
