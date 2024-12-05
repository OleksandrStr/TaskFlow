import { Routes } from '@angular/router';
import { HomeComponent } from './components';
import { NoAuthGuard } from '../auth/guards';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [NoAuthGuard],
  },
];
