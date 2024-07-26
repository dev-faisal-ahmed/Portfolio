// ********** Skill ********** \\
export type TSkill = {
  _id: string;
  name: string;
  status: TSkillStatus;
  icon: string;
};
export type TSkillStatus = 'EXPERT' | 'INTERMEDIATE' | 'FAMILIAR';

// ********** Education ********** \\
export type TEducation = {
  year: string;
  degreeName: string;
  institution: string;
  obtainedCgpa: number;
  totalCgpa: number;
};

// ********** Project ********** \\
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

// ********** Experience ********** \\
export type TExperience = {
  _id: string;
  organizationName: string;
  designation: string;
  description: string;
  duration: string;
};

// ********** Blog ********** \\
export type TBlog = {
  _id: string;
  title: string;
  image: string;
  content: string;
  tags: string[];
};
