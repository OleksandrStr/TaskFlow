import { Document } from 'mongoose';

export interface User {
  email: string;
  username: string;
  password: string;
  createdAt: Date;
}

export interface UserDocument extends User, Document {
  validatePassword(password: string): Promise<boolean>;
}

export interface CurrentUser {
  id: string;
  token: string;
  username: string;
  email: string;
}

export interface TokenData {
  id: string;
  email: string;
}
