import { SendSuccessResponse } from '../../helpers';
import { TryCatch } from '../../utils/try-catch';
import { ProjectService } from './services';

const AddProject = TryCatch(async (req, res) => {
  const project = await ProjectService.AddProject(req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Project Created Successfully',
    data: project,
  });
});

const GetProjectDetails = TryCatch(async (req, res) => {
  const project = await ProjectService.GetProjectDetails(req.params.projectId);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Project Retrieved Successfully',
    data: project,
  });
});

const GetProjects = TryCatch(async (req, res) => {
  const projects = await ProjectService.GetProjects();

  SendSuccessResponse(res, {
    status: 200,
    message: 'Projects Retrieved Successfully',
    data: projects,
  });
});

export const ProjectController = { AddProject, GetProjectDetails, GetProjects };
