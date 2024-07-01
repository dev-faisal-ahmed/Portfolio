import { AppError } from '../../../utils/app-error';
import { ProjectModel } from '../model';
import { TUpdateProjectPayload } from '../validation';

export const UpdateProject = async (
  projectId: string,
  payload: TUpdateProjectPayload
) => {
  const projectUpdateStatus = await ProjectModel.updateOne(
    { _id: projectId },
    { $set: payload }
  );

  if (!projectUpdateStatus.acknowledged)
    throw new AppError('Failed to updated project', 400);

  return 'Project Updated Successfully';
};
