import { Request } from 'express';
import { UserDocument } from './user.model';

export interface ExpressRequest extends Request {
  user?: UserDocument;
}
