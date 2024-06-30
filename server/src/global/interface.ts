import { Schema } from 'mongoose';

export type TAuth = {
  _id: Schema.Types.ObjectId;
  userName: string;
  name: string;
};
