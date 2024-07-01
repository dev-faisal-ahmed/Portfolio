import { Schema, model } from 'mongoose';
import { TBlog } from './interface';

const BlogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
  },
  { timestamps: true }
);

export const BlogModel = model('blog', BlogSchema);
