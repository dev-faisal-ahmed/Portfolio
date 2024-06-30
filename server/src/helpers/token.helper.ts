import { JWT_SECRET } from '../config';
import { TAuth } from '../global/interface';
import jwt from 'jsonwebtoken';

export const generateToken = (payload: TAuth) => {
  const token = jwt.sign(payload, JWT_SECRET!);
  return token;
};
