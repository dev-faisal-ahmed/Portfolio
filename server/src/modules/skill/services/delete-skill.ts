import { AppError } from '../../../utils/app-error';
import { SkillModel } from '../model';

export const DeleteSkill = async (skillId: string) => {
  const deletedStatus = await SkillModel.deleteOne({ _id: skillId });
  if (!deletedStatus.acknowledged)
    throw new AppError('Failed to delete the skill', 400);

  return 'Skill Deleted Successfully';
};
