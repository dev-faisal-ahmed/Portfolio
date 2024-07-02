import { TBlog } from '@/lib/types';
import { apiUrl } from '../_data/api.url';

export const getBlogDetails = async (blogId: string) => {
  try {
    const response = await fetch(apiUrl.getBlogDetails(blogId), {
      cache: 'no-store',
    });
    const responseData = await response.json();
    return responseData?.data as TBlog;
  } catch {
    return null;
  }
};
