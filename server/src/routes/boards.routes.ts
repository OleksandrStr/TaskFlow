import { Router } from 'express';
import { authMiddleware } from '../middlewares';
import { boardController } from '../controllers';

export const boardRoutes = Router();

boardRoutes.get('', authMiddleware, boardController.getBoards);
