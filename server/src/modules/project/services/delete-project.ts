import { AppError } from '../../../utils/app-error';
import { ProjectModel } from '../model';

export const DeleteProject = async (projectId: string) => {
  const deletedStatus = await ProjectModel.deleteOne({ _id: projectId });

  if (!deletedStatus.acknowledged)
    throw new AppError('Failed to delete the project', 400);

  return 'Project Deleted Successfully';
};
