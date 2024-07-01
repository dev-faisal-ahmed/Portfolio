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
