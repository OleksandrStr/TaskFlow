import { Routes } from '@angular/router';
import { LoginComponent, RegistrationComponent } from './components';
import { NoAuthGuard } from './guards';

export const authRoutes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard],
  },
];
