import { Schema } from 'mongoose';

export type TSkill = {
  _id: Schema.Types.ObjectId;
  name: string;
  type: TSkillType;
  status: TSkillStatus;
  icon: string;
};

export type TSkillType = 'FRONT_END' | 'BACK_END' | 'TOOLS' | 'OTHERS';
export type TSkillStatus = 'EXPERT' | 'INTERMEDIATE' | 'FAMILIAR';
