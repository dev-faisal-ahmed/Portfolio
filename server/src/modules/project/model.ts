import { Schema, model } from 'mongoose';
import { TLink, TProject } from './interface';
import { text } from 'express';

const LinkSubSchema = new Schema<TLink>(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
  },
  { _id: false }
);

const ProjectSchema = new Schema<TProject>({
  name: { type: String, required: true, unique: true },
  coverUrl: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: String, required: true },
  links: { type: [LinkSubSchema], required: true },
  liveLink: { type: String, required: true },
  technologies: { type: [String], required: true },
});

export const ProjectModel = model('', ProjectSchema);
