import { TExperience } from '@/utils/types';

export type TAddExperiencePayload = Omit<TExperience, '_id'>;

export type TUpdateExperiencePayload = {
  experienceId: string;
  payload: Partial<TExperience>;
};
