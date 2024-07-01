import { ProjectModel } from '../model';

export const GetProjects = async () => {
  const projects = await ProjectModel.find();
  return projects;
};
