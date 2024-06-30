import { Schema } from 'mongoose';

export type TUser = {
  _id: Schema.Types.ObjectId;
  name: string;
  userName: string;
  password: string;
};
