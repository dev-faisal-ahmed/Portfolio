import { Schema, model } from 'mongoose';
import { TUser } from './interface';

const UserSchema = new Schema<TUser>({
  name: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = model('user', UserSchema);
