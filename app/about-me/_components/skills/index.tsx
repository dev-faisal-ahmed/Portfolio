import { Heading } from '@/components/shared/heading';
import { backEndSkills, frontEndSkills, tools } from './skill.data';
import { SkillGroup } from './skill-group';

export function Skills() {
  return (
    <>
      <Heading className="mt-16">My Skills.</Heading>
      <SkillGroup title="Front End." skills={frontEndSkills} />
      <SkillGroup title="Back End." skills={backEndSkills} />
      <SkillGroup title="Tools." skills={tools} />
    </>
  );
}
