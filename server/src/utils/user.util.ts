import { TokenData, UserDocument } from '../models';
import { UserResponse } from '@common';
import jwt from 'jsonwebtoken';
import { jwtSecretKey } from '../config';

export const normalizeUser = (user: UserDocument): UserResponse => {
  const tokenData: TokenData = { id: user.id, email: user.email };
  const token = jwt.sign(tokenData, jwtSecretKey);
  return {
    email: user.email,
    username: user.username,
    id: user.id,
    token: `Bearer ${token}`,
  };
};
