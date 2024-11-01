import { Routes } from '@angular/router';
import { BoardComponent, BoardsComponent } from './components';

export const boardsRoutes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
  },
  {
    path: 'boards/:boardId',
    component: BoardComponent,
  },
];
