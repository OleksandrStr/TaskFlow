import { NextFunction, Response } from 'express';
import { ExpressRequest } from '../models';
import { BoardModel } from '../db-models';

export const getBoards = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }

    const boards = await BoardModel.find({ userId: req.user.id });
    res.send(boards);
  } catch (error) {
    next(error);
  }
};
