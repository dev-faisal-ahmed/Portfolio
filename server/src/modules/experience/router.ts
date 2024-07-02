import { Router } from 'express';
import { AuthGuard } from '../../middleware/auth-guard';
import { ValidationHandler } from '../../middleware/validation.handler';
import { ExperienceValidation } from './validation';
import { ExperienceController } from './controller';

// experience
export const ExperienceRouter = Router();

ExperienceRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(ExperienceValidation.AddExperience),
  ExperienceController.AddExperience
);

ExperienceRouter.patch(
  '/:experienceId',
  AuthGuard,
  ValidationHandler(ExperienceValidation.UpdateExperience),
  ExperienceController.UpdateExperience
);

ExperienceRouter.delete(
  '/:experienceId',
  AuthGuard,
  ExperienceController.DeleteExperience
);

// experiences
export const ExperiencesRouter = Router();

ExperiencesRouter.get('/', ExperienceController.GetExperiences);
