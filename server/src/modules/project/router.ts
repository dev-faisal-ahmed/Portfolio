import { Router } from 'express';
import { AuthGuard } from '../../middleware/auth-guard';
import { ValidationHandler } from '../../middleware/validation.handler';
import { ProjectValidation } from './validation';
import { ProjectController } from './controller';

export const ProjectRouter = Router();

//  Project Router
ProjectRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(ProjectValidation.AddProject),
  ProjectController.AddProject
);

ProjectRouter.get('/:projectId', ProjectController.GetProjectDetails);

// Projects Router
export const ProjectsRouter = Router();

ProjectsRouter.get('/', ProjectController.GetProjects);
