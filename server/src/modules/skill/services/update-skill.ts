import { AppError } from '../../../utils/app-error';
import { SkillModel } from '../model';
import { TUpdateSkillPayload } from '../validation';

export const UpdateSkill = async (
  skillId: string,
  payload: TUpdateSkillPayload
) => {
  const updatedSkill = await SkillModel.updateOne(
    { _id: skillId },
    { $set: payload }
  );

  if (!updatedSkill.acknowledged)
    throw new AppError('Failed to update skill', 400);

  return 'Skill Updated';
};
