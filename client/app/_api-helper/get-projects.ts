import { TProject } from '@/lib/types';
import { apiUrl } from '../_data/api.url';

export const getProjects = async () => {
  try {
    const response = await fetch(apiUrl.getProjects, { cache: 'no-store' });
    const responseData = await response.json();
    if (!responseData.ok) return null;

    return responseData?.data as TProject[];
  } catch {
    return null;
  }
};
