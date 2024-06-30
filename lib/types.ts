export type TSkill = {
  name: string;
  type: TSkillType;
  status: TSkillStatus;
  icon: string;
};

export type TSkillType = 'FRONT_END' | 'BACK_END' | 'TOOLS' | 'OTHERS';
export type TSkillStatus = 'EXPERT' | 'INTERMEDIATE' | 'FAMILIAR';

export type TLink = {
  url: string;
  title: string;
};

export type TProject = {
  name: string;
  coverUrl: string;
  description: string;
  liveLink: string;
  links: TLink[];
  technologies: string[];
  features?: string[];
};
