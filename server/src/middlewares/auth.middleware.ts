import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwtSecretKey } from '../config';
import { ExpressRequest } from '../models';
import { TokenData } from '../models';
import { UserModel } from '../db-models';

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
