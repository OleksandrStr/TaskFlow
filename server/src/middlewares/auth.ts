import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwtSecretKey } from '../config';
import UserModel from '../models/user';
import { ExpressRequestInterface } from '../types/expressRequest.interface';
import { TokenData } from '../types/user.interface';

export default async (
  req: ExpressRequestInterface,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.sendStatus(401);
    }
    const token = authHeader.split(' ')[1];
    const data = jwt.verify(token, jwtSecretKey) as TokenData;
    const user = await UserModel.findById(data.id);

    if (!user) {
      return res.sendStatus(401);
    }

    req.user = user;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};
