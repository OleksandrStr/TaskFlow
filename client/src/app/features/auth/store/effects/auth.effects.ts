import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, iif, map, of, switchMap, tap } from 'rxjs';
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
      switchMap(({ payload }) =>
        this.authConnector.register(payload).pipe(
          map((user) => {
            this.authService.setToken(user);
            this.router.navigateByUrl('/');

            return AuthActions.RegisterUserSuccess({ payload: user });
          }),
          catchError((err: HttpErrorResponse) =>
            of(AuthActions.RegisterUserError({ err }))
          )
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Login),
      switchMap(({ payload }) =>
        this.authConnector.login(payload).pipe(
          map((user) => {
            this.authService.setToken(user);
            this.router.navigateByUrl('/');

            return AuthActions.LoginSuccess({ payload: user });
          }),
          catchError((err: HttpErrorResponse) =>
            of(AuthActions.LoginError({ err }))
          )
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.Logout),
        tap(() => {
          this.authService.deleteToken();
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LoadCurrentUser),
      switchMap(() =>
        iif(
          () => !!this.authService.getToken(),
          this.authConnector.getCurrentUser().pipe(
            map((user) =>
              AuthActions.LoadCurrentUserSuccess({ payload: user })
            ),
            catchError(() => of(AuthActions.LoadCurrentUserError()))
          ),
          of(AuthActions.LoadCurrentUserError())
        )
      )
    )
  );
}
