import { NextFunction, Response } from 'express';
import { ExpressRequest } from '../models';
import { ColumnModel } from '../db-models';

export const getColumns = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
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
    const newColumn = new ColumnModel({
      title: req.body.title,
      boardId: req.params.boardId,
      userId: req.user.id,
    });
    const savedColumn = await newColumn.save();
    res.send(savedColumn);
  } catch (error) {
    next(error);
  }
};

export const updateColumn = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatedColumn = await ColumnModel.findByIdAndUpdate(
      req.params.columnId,
      req.body.fields,
      { new: true }
    );
    res.send(updatedColumn);
  } catch (error) {
    next(error);
  }
};

export const deleteColumn = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await ColumnModel.deleteOne({ _id: req.params.columnId });
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};
