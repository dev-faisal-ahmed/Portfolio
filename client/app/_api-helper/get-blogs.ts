import { TBlog } from '@/lib/types/blog.types';
import { apiUrl } from '../_data/api.url';

export const getBlogs = async () => {
  try {
    const response = await fetch(apiUrl.getBlogs, { cache: 'no-store' });
    const responseData = await response.json();
    return responseData?.data as TBlog[];
  } catch {
    return null;
  }
};
