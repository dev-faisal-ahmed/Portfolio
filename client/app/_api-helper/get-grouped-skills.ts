import { TGroupedSkills } from '@/lib/types';
import { apiUrl } from '../_data/api.url';

export const getGroupedSkills = async () => {
  try {
    const response = await fetch(apiUrl.getGroupedSkills, {
      cache: 'no-store',
    });
    const responseData = await response.json();
    if (!responseData.ok) return null;

    return responseData?.data as TGroupedSkills[];
  } catch {
    return null;
  }
};
