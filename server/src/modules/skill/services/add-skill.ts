import { SkillModel } from '../model';
import { TAddSkillPayload } from '../validation';

export const AddSkill = async (payload: TAddSkillPayload) => {
  const skill = await SkillModel.create(payload);
  return skill;
};
