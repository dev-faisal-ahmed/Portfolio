import { Router } from 'express';
import { AuthGuard } from '../../middleware/auth-guard';
import { ValidationHandler } from '../../middleware/validation.handler';
import { ProjectValidation } from './validation';
import { ProjectController } from './controller';

//  Project Router
export const ProjectRouter = Router();

ProjectRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(ProjectValidation.AddProject),
  ProjectController.AddProject
);

ProjectRouter.get('/:projectId', ProjectController.GetProjectDetails);

ProjectRouter.patch(
  '/:projectId',
  AuthGuard,
  ValidationHandler(ProjectValidation.UpdateProject),
  ProjectController.UpdateProject
);

ProjectRouter.delete('/:projectId', AuthGuard, ProjectController.DeleteProject);

// Projects Router
export const ProjectsRouter = Router();

ProjectsRouter.get('/', ProjectController.GetProjects);
