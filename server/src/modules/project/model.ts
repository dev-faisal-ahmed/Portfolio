import { Schema, model } from 'mongoose';
import { TLink, TProject } from './interface';

const LinkSubSchema = new Schema<TLink>(
  {
    client: { type: String, required: true },
    server: { type: String, required: true },
    live: { type: String, required: true },
  },
  { _id: false }
);

const ProjectSchema = new Schema<TProject>(
  {
    name: { type: String, required: true, unique: true },
    coverUrl: { type: String, required: true },
    description: { type: String, required: true },
    links: { type: LinkSubSchema, required: true },
    technologies: { type: [String], required: true },
    priority: { type: Number, required: true },
  },
  { timestamps: true }
);

export const ProjectModel = model('project', ProjectSchema);
