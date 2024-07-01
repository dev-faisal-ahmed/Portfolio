import { Schema, model } from 'mongoose';
import { TSkill } from './interface';
import { SkillStatutes, SkillTypes } from './constants';

const SkillSchema = new Schema<TSkill>(
  {
    name: { type: String, required: true, unique: true },
    status: { type: String, enum: SkillStatutes, required: true },
    type: { type: String, enum: SkillTypes, required: true },
    icon: { type: String, required: true },
  },
  { timestamps: true }
);

export const SkillModel = model('skill', SkillSchema);
