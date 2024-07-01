import { Router } from 'express';
import { AuthRouter } from '../modules/auth/router';
import { SkillRouter, SkillsRouter } from '../modules/skill/router';
import { ProjectRouter, ProjectsRouter } from '../modules/project/router';

export const AppRouter = Router();

AppRouter.use('/auth', AuthRouter);
AppRouter.use('/skill', SkillRouter);
AppRouter.use('/skills', SkillsRouter);
AppRouter.use('/project', ProjectRouter);
AppRouter.use('/projects', ProjectsRouter);
