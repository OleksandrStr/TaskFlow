import { Router } from 'express';
import { authMiddleware } from '../middlewares';
import { columnController } from '../controllers';

export const columnsRoutes = Router();

columnsRoutes.get(
  '/:boardId/columns',
  authMiddleware,
  columnController.getColumns
);
columnsRoutes.post(
  '/:boardId/columns',
  authMiddleware,
  columnController.createColumn
);
