import { TSkill } from '@/utils/types';

export type TAddSkillPayload = Omit<TSkill, '_id'>;
