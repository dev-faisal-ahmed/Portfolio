import { ProjectModel } from '../model';
import { TAddProjectPayload } from '../validation';

export const AddProject = async (payload: TAddProjectPayload) => {
  const project = await ProjectModel.create(payload);
  return project;
};
