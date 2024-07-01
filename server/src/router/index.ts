import { Router } from 'express';
import { AuthRouter } from '../modules/auth/router';
import { SkillRouter } from '../modules/skill/router';

export const AppRouter = Router();

AppRouter.use('/auth', AuthRouter);
AppRouter.use('/skill', SkillRouter);
