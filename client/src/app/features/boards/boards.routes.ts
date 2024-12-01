import { Routes } from '@angular/router';
import { BoardsComponent } from './components';
import { AuthGuard } from '../auth/guards';

export const boardsRoutes: Routes = [
  {
    path: '',
    component: BoardsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':boardId',
    loadChildren: () =>
      import('./../board/board.module').then((m) => m.BoardModule),
  },
];
