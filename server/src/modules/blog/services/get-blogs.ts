import { BlogModel } from '../model';

export const GetBlogs = async () => {
  const blogs = await BlogModel.find();
  return blogs;
};
