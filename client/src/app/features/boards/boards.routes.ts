import { Routes } from '@angular/router';
import { BoardComponent, BoardsComponent } from './components';
import { TaskComponent } from '../tasks';

export const boardsRoutes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
  },
  {
    path: 'boards/:boardId',
    component: BoardComponent,
    children: [
      {
        path: 'tasks/:taskId',
        component: TaskComponent,
      },
    ],
  },
];
