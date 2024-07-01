import { AddSkill } from './add-skill';
import { DeleteSkill } from './delete-skill';
import { GetGroupedSkills } from './get-grouped-skills';
import { GetSkills } from './get-skills';
import { UpdateSkill } from './update-skill';

export const SkillService = {
  // skill
  AddSkill,
  UpdateSkill,
  DeleteSkill,

  // skills
  GetSkills,
  GetGroupedSkills,
};
