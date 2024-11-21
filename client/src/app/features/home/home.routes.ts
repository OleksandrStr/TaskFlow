import { Routes } from '@angular/router';
import { HomeComponent } from './components';
import { HomeGuard } from './guards';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [HomeGuard],
  },
];
