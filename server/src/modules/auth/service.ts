import { generateToken } from '../../helpers';
import { AppError } from '../../utils/app-error';
import { UserModel } from '../user/model';
import { TLoginPayload } from './validation';

const Login = async (payload: TLoginPayload) => {
  const { userName, password } = payload;
  const isUserExist = await UserModel.findOne({ userName, password });

  if (!isUserExist) throw new AppError('Wrong credential', 400);

  const token = generateToken({
    _id: isUserExist._id,
    name: isUserExist.name,
    userName: isUserExist.userName,
  });

  return token;
};

export const AuthService = { Login };
