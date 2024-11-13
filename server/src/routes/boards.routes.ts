import { Router } from 'express';
import { authMiddleware } from '../middlewares';
import {
  boardController,
  columnController,
  taskController,
} from '../controllers';

export const boardRoutes = Router();

boardRoutes.get('', authMiddleware, boardController.getBoards);
boardRoutes.post('', authMiddleware, boardController.createBoard);
boardRoutes.get('/:boardId', authMiddleware, boardController.getBoard);
boardRoutes.put('/:boardId', authMiddleware, boardController.updateBoard);
boardRoutes.delete('/:boardId', authMiddleware, boardController.deleteBoard);

boardRoutes.get(
  '/:boardId/columns',
  authMiddleware,
  columnController.getColumns
);
boardRoutes.post(
  '/:boardId/columns',
  authMiddleware,
  columnController.createColumn
);

boardRoutes.get('/:boardId/tasks', authMiddleware, taskController.getTasks);
boardRoutes.post('/:boardId/tasks', authMiddleware, taskController.createTask);
