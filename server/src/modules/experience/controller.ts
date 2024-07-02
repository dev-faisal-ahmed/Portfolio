import { SendSuccessResponse } from '../../helpers';
import { TryCatch } from '../../utils/try-catch';
import { ExperienceService } from './services';

const AddExperience = TryCatch(async (req, res) => {
  const experience = await ExperienceService.AddExperience(req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Experience Added Successfully!',
    data: experience,
  });
});

const UpdateExperience = TryCatch(async (req, res) => {
  const message = await ExperienceService.UpdateExperience(
    req.params.experienceId,
    req.body
  );

  SendSuccessResponse(res, {
    status: 200,
    message,
    data: null,
  });
});

const DeleteExperience = TryCatch(async (req, res) => {
  const message = await ExperienceService.DeleteExperience(
    req.params.experienceId
  );

  SendSuccessResponse(res, {
    status: 200,
    message,
    data: null,
  });
});

const GetExperiences = TryCatch(async (req, res) => {
  const experiences = await ExperienceService.GetExperiences();

  SendSuccessResponse(res, {
    status: 200,
    message: 'Experiences Retrieved Successfully',
    data: experiences,
  });
});

export const ExperienceController = {
  AddExperience,
  UpdateExperience,
  DeleteExperience,
  GetExperiences,
};
