import { TSkill } from '@/utils/types';

export type TAddSkillPayload = Omit<TSkill, '_id'>;
export type TUpdateSKillPayload = {
  skillId: string;
  data: Partial<TSkill>;
};
