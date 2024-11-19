import { NextFunction, Response } from 'express';
import { ExpressRequest } from '../models';
import { BoardModel } from '../db-models';

export const getBoards = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
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
    const board = await BoardModel.findById(req.params.boardId);
    res.send(board);
  } catch (error) {
    next(error);
  }
};

export const updateBoard = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatedBoard = await BoardModel.findByIdAndUpdate(
      req.params.boardId,
      req.body.fields,
      { new: true }
    );
    res.send(updatedBoard);
  } catch (error) {
    next(error);
  }
};

export const deleteBoard = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await BoardModel.deleteOne({ _id: req.params.boardId });
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};
