import { SkillModel } from '../model';

export const GetSkills = async () => {
  const skills = await SkillModel.find();
  return skills;
};
