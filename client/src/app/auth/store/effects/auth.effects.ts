import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CurrentUser } from '../../../../../../shared/interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
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

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.RegisterUser),
      switchMap((action) => {
        const url = environment.apiUrl + '/users';
        return this.http.post<CurrentUser>(url, action);
      }),
      map((currentUser) => {
        this.authService.setToken(currentUser);
        this.router.navigateByUrl('/');

        return AuthActions.RegisterUserSuccess(currentUser);
      })
    )
  );
}
