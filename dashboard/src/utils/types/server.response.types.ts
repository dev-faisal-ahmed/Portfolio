/* eslint-disable @typescript-eslint/no-explicit-any */
export type ServerResponseType<DataType> = {
  data?: DataType;
  error?: any;
  message: string;
  ok: boolean;
};
