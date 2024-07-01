import { Schema } from 'mongoose';

export type TProject = {
  _id: Schema.Types.ObjectId;
  name: string;
  coverUrl: string;
  description: string;
  liveLink: string;
  links: TLink[];
  technologies: string[];
  features?: string[];
};

export type TLink = {
  url: string;
  title: string;
};
