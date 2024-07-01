import { Schema } from 'mongoose';

export type TBlog = {
  _id: Schema.Types.ObjectId;
  title: string;
  image?: string;
  content: string;
  tags: string[];
};
