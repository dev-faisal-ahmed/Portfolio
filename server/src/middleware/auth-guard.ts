import { JWT_SECRET } from '../config';
import { AppError } from '../utils/app-error';
import { TryCatch } from '../utils/try-catch';
import JWT, { JwtPayload, Secret } from 'jsonwebtoken';

export const AuthGuard = TryCatch(async (req, _, next) => {
  const token = req.headers.authorization;
  if (!token) throw new AppError('No Token Found!', 403);

  const decodedUser = JWT.verify(token, JWT_SECRET as Secret) as JwtPayload;
  if (!decodedUser) throw new AppError('Invalid Token', 400);

  next();
});
