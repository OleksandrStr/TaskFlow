import { Router } from 'express';
import { authMiddleware } from '../middlewares';
import { taskController } from '../controllers';

export const tasksRoutes = Router();

tasksRoutes.patch('/:taskId', authMiddleware, taskController.updateTask);
tasksRoutes.delete('/:taskId', authMiddleware, taskController.deleteTask);
