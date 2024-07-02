import { AppError } from '../../../utils/app-error';
import { ExperienceModel } from '../model';
import { TUpdateExperiencePayload } from '../validation';

export const UpdateExperience = async (
  experienceId: string,
  payload: TUpdateExperiencePayload
) => {
  const updateExperience = await ExperienceModel.updateOne(
    { _id: experienceId },
    { $set: payload }
  );

  if (!updateExperience.acknowledged)
    throw new AppError('Failed to update experience', 400);

  return 'Experience Updated Successfully';
};
