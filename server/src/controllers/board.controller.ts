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

export const createBoard = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }

    const newBoard = new BoardModel({
      title: req.body.title,
      userId: req.user.id,
    });
    const savedBoard = await newBoard.save();
    res.send(savedBoard);
  } catch (error) {
    next(error);
  }
};

export const getBoard = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }

    const board = await BoardModel.findById(req.params.boardId);
    res.send(board);
  } catch (error) {
    next(error);
  }
};
