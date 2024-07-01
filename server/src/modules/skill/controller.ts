import { SendSuccessResponse } from '../../helpers';
import { TryCatch } from '../../utils/try-catch';
import { SkillService } from './services';

// skill
const AddSkill = TryCatch(async (req, res) => {
  const skill = await SkillService.AddSkill(req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Skill is added',
    data: skill,
  });
});

//  skills
const GetSkills = TryCatch(async (req, res) => {
  const skills = await SkillService.GetSkills();

  SendSuccessResponse(res, {
    status: 200,
    message: 'Skill retrieved successfully',
    data: skills,
  });
});

export const SkillController = { AddSkill, GetSkills };
