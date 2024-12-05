import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isLoggedIn$.pipe(
      map((isLoggedIn) => !isLoggedIn || this.router.createUrlTree(['boards']))
    );
  }
}
