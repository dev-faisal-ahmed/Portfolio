import { TBlog } from '@/utils/types/blog.types';

export type TCreateBlogPayload = Omit<TBlog, '_id'>;
export type TUpdateBlogPayload = {
  blogId: string;
  payload: Partial<TBlog>;
};
