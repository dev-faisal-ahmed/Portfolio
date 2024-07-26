export type TProject = {
  _id: string;
  name: string;
  coverUrl: string;
  description: string;
  links: TLink;
  technologies: string[];
};

export type TLink = {
  client: string;
  server: string;
  live: string;
};
