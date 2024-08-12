import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLocalStorageKey } from '../types/auth.enum';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem(AuthLocalStorageKey.AUTH_TOKEN);
    req = req.clone({
      setHeaders: {
        Authorization: authToken || '',
      },
    });

    return next.handle(req);
  }
}
