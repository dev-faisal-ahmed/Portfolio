import { Schema } from 'mongoose';

export type TExperience = {
  _id: Schema.Types.ObjectId;
  organizationName: string;
  designation: string;
  description: string;
  duration: string;
};
