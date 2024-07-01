import { AppError } from '../../../utils/app-error';
import { BlogModel } from '../model';
import { TUpdateBlogPayload } from '../validation';

export const UpdateBlog = async (
  blogId: string,
  payload: TUpdateBlogPayload
) => {
  const updateStatus = await BlogModel.updateOne(
    { _id: blogId },
    { $set: payload }
  );

  if (!updateStatus.acknowledged)
    throw new AppError('Failed to update blog', 400);

  return 'Blog Updated Successfully';
};
