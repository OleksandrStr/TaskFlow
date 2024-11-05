import { Router } from 'express';
import { authMiddleware } from '../middlewares';
import { boardController } from '../controllers';

export const boardRoutes = Router();

boardRoutes.get('', authMiddleware, boardController.getBoards);
boardRoutes.post('', authMiddleware, boardController.createBoard);
boardRoutes.get('/:boardId', authMiddleware, boardController.getBoard);
boardRoutes.put('/:boardId', authMiddleware, boardController.updateBoard);
boardRoutes.delete('/:boardId', authMiddleware, boardController.deleteBoard);
