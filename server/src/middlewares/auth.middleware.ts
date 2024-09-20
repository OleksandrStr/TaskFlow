import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwtSecretKey } from '../config';
import UserModel from '../db-models/user.db-model';
import { ExpressRequest } from '../models/express.interface';
import { TokenData } from '../models/user.interface';

export default async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    const [_bearer, token] = authHeader.split(' ');
    const tokenData = jwt.verify(token, jwtSecretKey) as TokenData;
    const user = await UserModel.findById(tokenData.id);

    if (!user) {
      res.sendStatus(401);
      return;
    }

    req.user = user;
    next();
  } catch (_error) {
    res.sendStatus(401);
  }
};