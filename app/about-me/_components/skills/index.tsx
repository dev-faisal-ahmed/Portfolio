import { Heading } from '@/components/shared/heading';
import { backEndSkills, frontEndSkills, tools } from './skill.data';
import { SkillCard } from './skill.card';

export function Skills() {
  return (
    <div className="mt-16">
      <Heading>My Skills.</Heading>
      <h3 className="mt-12 text-xl font-semibold">Front End.</h3>
      <div className="mt-6 grid grid-cols-4 gap-6">
        {frontEndSkills.map((skill) => (
          <SkillCard key={skill.icon} {...skill} />
        ))}
      </div>

      <h3 className="mt-12 text-xl font-semibold">Backend End.</h3>
      <div className="mt-6 grid grid-cols-4 gap-6">
        {backEndSkills.map((skill) => (
          <SkillCard key={skill.icon} {...skill} />
        ))}
      </div>

      <h3 className="mt-12 text-xl font-semibold">Tools.</h3>
      <div className="mt-6 grid grid-cols-4 gap-6">
        {tools.map((skill) => (
          <SkillCard key={skill.icon} {...skill} />
        ))}
      </div>
    </div>
  );
}
