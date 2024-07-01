import { z } from 'zod';
import { EnumGenerator } from '../../helpers/zod.helper';
import { SkillStatutes, SkillTypes } from './constants';

const AddSkill = z.object({
  name: z.string({ required_error: 'Skill name is required' }),
  status: EnumGenerator(SkillStatutes, `Skill Statues is required`),
  type: EnumGenerator(SkillTypes, `Skill Statues is required`),
  icon: z.string({ required_error: 'Icon is required' }),
});

const UpdateSkill = z.object({
  name: z.string({ required_error: 'Skill name is required' }).optional(),
  status: EnumGenerator(SkillStatutes, `Skill Statues is required`).optional(),
  type: EnumGenerator(SkillTypes, `Skill Statues is required`).optional(),
  icon: z.string({ required_error: 'Icon is required' }).optional(),
});

export const SkillValidation = { AddSkill, UpdateSkill };

export type TAddSkillPayload = z.infer<typeof AddSkill>;
export type TUpdateSkillPayload = z.infer<typeof UpdateSkill>;
