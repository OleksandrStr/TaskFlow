import { Routes } from '@angular/router';
import { BoardComponent, BoardsComponent } from './components';
import { TaskComponent } from '../tasks';
import { AuthGuard } from '../auth/guards';

export const boardsRoutes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'boards/:boardId',
    component: BoardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'tasks/:taskId',
        component: TaskComponent,
      },
    ],
  },
];
