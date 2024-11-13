import { Routes } from '@angular/router';
import { BoardComponent, BoardsComponent, TaskComponent } from './components';

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
