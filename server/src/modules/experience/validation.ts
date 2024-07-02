import { z } from 'zod';

const AddExperience = z.object({
  organizationName: z.string({ required_error: 'Organization is required' }),
  designation: z.string({ required_error: 'Designation is required' }),
  description: z.string({ required_error: 'Job Description is required' }),
  duration: z.string({ required_error: 'Job Description is required' }),
});

const UpdateExperience = z.object({
  organizationName: z.string().optional(),
  designation: z.string().optional(),
  description: z.string().optional(),
  duration: z.string().optional(),
});

export const ExperienceValidation = { AddExperience, UpdateExperience };

export type TAddExperiencePayload = z.infer<typeof AddExperience>;
export type TUpdateExperiencePayload = z.infer<typeof UpdateExperience>;
