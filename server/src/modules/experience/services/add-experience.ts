import { ExperienceModel } from '../model';
import { TAddExperiencePayload } from '../validation';

export const AddExperience = async (payload: TAddExperiencePayload) => {
  const experience = await ExperienceModel.create(payload);
  return experience;
};
