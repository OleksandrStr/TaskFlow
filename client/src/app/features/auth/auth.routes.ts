import { Routes } from '@angular/router';
import { LoginComponent, RegistrationComponent } from './components';

export const authRoutes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
