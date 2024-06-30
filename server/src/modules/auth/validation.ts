import { z } from 'zod';

const Login = z.object({
  userName: z.string({ required_error: 'Email is required' }),
  password: z.string({ required_error: 'Password is required' }),
});

export const AuthValidation = { Login };
export type TLoginPayload = z.infer<typeof Login>;
