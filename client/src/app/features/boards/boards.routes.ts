import { Routes } from '@angular/router';
import { BoardsComponent } from './components';
import { AuthGuard } from '../auth/guards';

export const boardsRoutes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    canActivate: [AuthGuard],
  },
];
