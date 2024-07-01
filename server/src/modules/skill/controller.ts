import { SendSuccessResponse } from '../../helpers';
import { TryCatch } from '../../utils/try-catch';
import { SkillService } from './services';

const AddSkill = TryCatch(async (req, res) => {
  const skill = await SkillService.AddSkill(req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Skill is added',
    data: skill,
  });
});

export const SkillController = { AddSkill };
