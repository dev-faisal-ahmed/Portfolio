export * from './skill.types';

export type TProject = {
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
