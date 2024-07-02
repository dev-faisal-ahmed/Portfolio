import { ProjectModel } from '../model';

export const GetProjects = async () => {
  const projects = await ProjectModel.find().sort({ priority: 1 });
  return projects;
};
