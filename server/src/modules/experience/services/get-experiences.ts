import { ExperienceModel } from '../model';

export const GetExperiences = async () => {
  const experiences = await ExperienceModel.find();
  return experiences;
};
