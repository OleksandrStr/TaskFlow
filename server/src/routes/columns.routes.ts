import { Router } from 'express';
import { authMiddleware } from '../middlewares';
import { columnController } from '../controllers';

export const columnsRoutes = Router();

columnsRoutes.put('/:columnId', authMiddleware, columnController.updateColumn);
columnsRoutes.delete(
  '/:columnId',
  authMiddleware,
  columnController.deleteColumn
);
