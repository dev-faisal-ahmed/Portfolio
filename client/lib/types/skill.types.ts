export type TSkill = {
  _id: string;
  name: string;
  type: TSkillType;
  status: TSkillStatus;
  icon: string;
};

export type TSkillType = 'FRONT_END' | 'BACK_END' | 'TOOLS' | 'OTHERS';
export type TSkillStatus = 'EXPERT' | 'INTERMEDIATE' | 'FAMILIAR';

export type TGroupedSkills = {
  _id: TSkillType;
  skills: TSkill[];
};
