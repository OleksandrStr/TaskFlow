import { Routes } from '@angular/router';
import { BoardComponent } from './components';
import { TaskComponent } from '../tasks';
import { AuthGuard } from '../auth/guards';

export const boardRoutes: Routes = [
  {
    path: '',
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
