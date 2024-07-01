/* eslint-disable @typescript-eslint/no-explicit-any */
export type TServerResponse<DataType> = {
  data?: DataType;
  error?: any;
  message: string;
  ok: boolean;
};
