import { ProjectModel } from '../model';

export const GetProjectDetails = async (projectId: string) => {
  const project = await ProjectModel.findOne({ _id: projectId });
  return project;
};
