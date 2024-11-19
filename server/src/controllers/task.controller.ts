import { NextFunction, Response } from 'express';
import { TaskModel } from '../db-models';
import { ExpressRequest } from '../models';

export const getTasks = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const tasks = await TaskModel.find({ boardId: req.params.boardId });
    res.send(tasks);
  } catch (err) {
    next(err);
  }
};

export const createTask = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newTask = new TaskModel({
      title: req.body.title,
      boardId: req.params.boardId,
      userId: req.user.id,
      columnId: req.body.columnId,
    });
    const savedTask = await newTask.save();
    res.send(savedTask);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      req.params.taskId,
      req.body.fields,
      { new: true }
    );
    res.send(updatedTask);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await TaskModel.deleteOne({ _id: req.params.taskId });
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};
