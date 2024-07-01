import { Router } from 'express';
import { AuthGuard } from '../../middleware/auth-guard';
import { ValidationHandler } from '../../middleware/validation.handler';
import { SkillValidation } from './validation';
import { SkillController } from './controller';

// skill router
export const SkillRouter = Router();

SkillRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(SkillValidation.AddSkill),
  SkillController.AddSkill
);

SkillRouter.patch(
  '/:skillId',
  AuthGuard,
  ValidationHandler(SkillValidation.UpdateSkill),
  SkillController.UpdateSkill
);

SkillRouter.delete('/:skillId', AuthGuard, SkillController.DeleteSkill);

// skills router
export const SkillsRouter = Router();

SkillsRouter.get('/', AuthGuard, SkillController.GetSkills);

SkillsRouter.get('/grouped', SkillController.GetGroupedSkills);
