import { Heading } from '@/shared/heading';
import { SkillGroup } from './skill-group';
import { skills } from '@/app/_data';

export function Skills() {
  return (
    <>
      <Heading className="mt-16">My Skills.</Heading>
      <SkillGroup title="Front End" skills={skills.frontEnds} />
      <SkillGroup title="Back End" skills={skills.backends} />
      <SkillGroup title="Tools" skills={skills.tools} />
    </>
  );
}
