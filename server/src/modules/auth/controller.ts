import { SendSuccessResponse } from '../../helpers';
import { TryCatch } from '../../utils/try-catch';
import { AuthService } from './service';

const Login = TryCatch(async (req, res) => {
  const token = await AuthService.Login(req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Login Successful',
    data: { token },
  });
});

export const AuthController = { Login };
