import { NextFunction, Response } from 'express';
import { ExpressRequest } from '../models';
import { ColumnModel } from '../db-models';

export const getColumns = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }

    const columns = await ColumnModel.find({ boardId: req.params.boardId });
    res.send(columns);
  } catch (error) {
    next(error);
  }
};

export const createColumn = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }

    const newColumn = new ColumnModel({
      title: req.body.title,
      boardId: req.body.boardId,
      userId: req.user.id,
    });
    const savedColumn = await newColumn.save();
    res.send(savedColumn);
  } catch (error) {
    next(error);
  }
};
