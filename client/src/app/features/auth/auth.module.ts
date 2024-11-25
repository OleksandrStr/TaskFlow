import { RouterModule } from '@angular/router';
import { LoginComponent, RegistrationComponent } from './components';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE } from './models';
import { AuthEffects, AuthReducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from './guards';
import { AuthConnector } from './connectors';
import { authRoutes } from './auth.routes';
import { AuthService } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors';

function loadCurrentUser(authService: AuthService): () => void {
  return () => authService.loadCurrentUser();
}

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE, AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthService,
    AuthConnector,
    AuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: loadCurrentUser,
      deps: [AuthService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  declarations: [RegistrationComponent, LoginComponent],
})
export class AuthModule {}
