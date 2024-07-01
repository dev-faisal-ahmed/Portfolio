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

const UpdateSkill = TryCatch(async (req, res) => {
  const message = await SkillService.UpdateSkill(req.params.skillId, req.body);

  SendSuccessResponse(res, {
    status: 200,
    message,
    data: null,
  });
});

const DeleteSkill = TryCatch(async (req, res) => {
  const message = await SkillService.DeleteSkill(req.params.skillId);

  SendSuccessResponse(res, {
    status: 200,
    message,
    data: null,
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

const GetGroupedSkills = TryCatch(async (req, res) => {
  const skills = await SkillService.GetGroupedSkills();

  SendSuccessResponse(res, {
    status: 200,
    message: 'Skill retrieved successfully',
    data: skills,
  });
});

export const SkillController = {
  // skill
  AddSkill,
  UpdateSkill,
  DeleteSkill,

  // skills
  GetSkills,
  GetGroupedSkills,
};
