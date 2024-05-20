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
  const tokenData: TokenData = { id: user.id, email: user.email };
  const token = jwt.sign(tokenData, jwtSecretKey);
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
      const errorMessages = Object.values(error.errors).map(
        (err) => err.message
      );
      res.status(400).json(errorMessages);
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
    const error = { error: 'Invalid email or password' };
    const user = await UserModel.findOne({ email: req.body.email }).select(
      '+password'
    );
    const isPasswordEqual = await user?.validatePassword(req.body.password);

    if (!user || !isPasswordEqual) {
      res.status(401).json(error);
      return;
    }

    res.send(normalizeUser(user));
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = (
  req: ExpressRequestInterface,
  res: Response
): void => {
  res.send(normalizeUser(req.user));
};
