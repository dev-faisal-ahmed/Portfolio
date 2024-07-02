import { TExperience } from '@/lib/types';
import { apiUrl } from '../_data/api.url';

export const getExperiences = async () => {
  try {
    const response = await fetch(apiUrl.getExperiences, { cache: 'no-store' });
    const responseData = await response.json();
    return responseData?.data as TExperience[];
  } catch {
    return null;
  }
};
