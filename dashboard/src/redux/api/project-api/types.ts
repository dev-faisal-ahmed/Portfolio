import { TProject } from '@/utils/types';

export type TAddProjectPayload = Omit<TProject, '_id'>;
export type TUpdateProjectPayload = {
  projectId: string;
  data: Partial<TProject>;
};
