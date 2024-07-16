import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CurrentUser } from '../../../../../../shared/interfaces/user.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthActions } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.RegisterUser),
      switchMap((registerRequest) => {
        const url = environment.apiUrl + '/users';
        return this.http.post<CurrentUser>(url, registerRequest);
      }),
      map((currentUser) => {
        this.authService.setToken(currentUser);
        this.router.navigateByUrl('/');

        return AuthActions.RegisterUserSuccess(currentUser);
      }),
      catchError((err: HttpErrorResponse) =>
        of(AuthActions.RegisterUserError({ err }))
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Login),
      switchMap((loginRequest) => {
        const url = environment.apiUrl + '/users/login';
        return this.http.post<CurrentUser>(url, loginRequest);
      }),
      map((currentUser) => {
        this.authService.setToken(currentUser);
        this.router.navigateByUrl('/');

        return AuthActions.LoginSuccess(currentUser);
      }),
      catchError((err: HttpErrorResponse) =>
        of(AuthActions.LoginError({ err }))
      )
    )
  );

  currentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.GetCurrentUser),
      switchMap(() => {
        const url = environment.apiUrl + '/user';
        return this.http.get<CurrentUser>(url);
      }),
      map((currentUser) => AuthActions.GetCurrentUserSuccess(currentUser))
    )
  );
}
