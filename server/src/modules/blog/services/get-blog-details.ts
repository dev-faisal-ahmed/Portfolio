import { BlogModel } from '../model';

export const GetBlogDetails = async (blogId: string) => {
  const blog = await BlogModel.findOne({ _id: blogId });
  return blog;
};
