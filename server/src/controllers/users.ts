import { NextFunction, Request, Response } from 'express';
import UserModel from '../models/user';
import {
  CurrentUserInterface,
  TokenData,
  UserDocument,
} from '../types/user.interface';
import { Error } from 'mongoose';
import jwt from 'jsonwebtoken';
import { jwtSecretKey } from '../config';
import { ExpressRequestInterface } from '../types/express-request.interface';

const normalizeUser = (user: UserDocument): CurrentUserInterface => {
  const data: TokenData = { id: user.id, email: user.email };
  const token = jwt.sign(data, jwtSecretKey);
  return {
    email: user.email,
    username: user.username,
    id: user.id,
    token,
  };
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newUser = new UserModel({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
    const savedUser = await newUser.save();
    res.send(normalizeUser(savedUser));
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      const messages = Object.values(error.errors).map((err) => err.message);
      res.status(400).json(messages);
    } else {
      next(error);
    }
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const errors = { emailOrPassword: 'Invalid email or password' };
    const user = await UserModel.findOne({ email: req.body.email }).select(
      '+password'
    );

    if (!user) {
      res.status(400).json(errors);
      return;
    }

    const isPasswordEqual = await user.validatePassword(req.body.password);

    if (!isPasswordEqual) {
      res.status(400).json(errors);
      return;
    }

    res.send(normalizeUser(user));
  } catch (error) {
    next(error);
  }
};

export const currentUser = (
  req: ExpressRequestInterface,
  res: Response
): void => {
  if (!req.user) {
    res.sendStatus(401);
  } else {
    res.send(normalizeUser(req.user));
  }
};
