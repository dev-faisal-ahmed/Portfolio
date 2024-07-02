import { AppError } from '../../../utils/app-error';
import { ExperienceModel } from '../model';

export const DeleteExperience = async (experienceId: string) => {
  const deletedStatus = await ExperienceModel.deleteOne({ _id: experienceId });

  if (!deletedStatus.acknowledged)
    throw new AppError('Failed Delete Experience', 400);

  return 'Experience is deleted successfully';
};
