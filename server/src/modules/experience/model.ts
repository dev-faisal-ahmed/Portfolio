import { Schema, model } from 'mongoose';
import { TExperience } from './interface';

const ExperienceSchema = new Schema<TExperience>({
  organizationName: { type: String, required: true },
  designation: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
});

export const ExperienceModel = model('experience', ExperienceSchema);
