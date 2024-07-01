import { SkillModel } from '../model';

export const GetGroupedSkills = async () => {
  const skills = await SkillModel.aggregate([
    {
      $group: {
        _id: '$type',
        skills: {
          $push: '$$ROOT',
        },
      },
    },
  ]);

  return skills;
};
