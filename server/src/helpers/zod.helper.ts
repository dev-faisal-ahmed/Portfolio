import { z } from 'zod';

export const EnumGenerator = (options: string[], required_error: string) => {
  return z.enum([...(options as [string, ...string[]])], { required_error });
};
