import { TProject } from '@/lib/types';
import { apiUrl } from '../_data/api.url';

export const getProjects = async () => {
  const response = await fetch(apiUrl.getProjects, { cache: 'no-cache' });
  const responseData = await response.json();
  if (!responseData.ok) return null;

  return responseData?.data as TProject[];
};
