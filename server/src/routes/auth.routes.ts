import { Router } from 'express';
import { authMiddleware } from '../middlewares';
import { userController } from '../controllers';

export const authRoutes = Router();

authRoutes.post('/register', userController.register);
authRoutes.post('/login', userController.login);
authRoutes.get('/current', authMiddleware, userController.getCurrentUser);
