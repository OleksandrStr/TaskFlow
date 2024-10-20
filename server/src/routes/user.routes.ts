import { Router } from 'express';
import { authMiddleware } from '../middlewares';
import { userController } from '../controllers';

export const userRoutes = Router();

userRoutes.post('/register', userController.register);
userRoutes.post('/login', userController.login);
userRoutes.get('/current', authMiddleware, userController.getCurrentUser);
