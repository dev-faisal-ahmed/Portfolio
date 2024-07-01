import { BlogModel } from '../model';
import { TCreateBlogPayload } from '../validation';

export const CreateBlog = async (payload: TCreateBlogPayload) => {
  const blog = await BlogModel.create(payload);
  return blog;
};
