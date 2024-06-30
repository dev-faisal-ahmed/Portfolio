import { TSkill } from '@/lib/types';
import { SkillCard } from './skill.card';

type TProps = {
  title: string;
  skills: TSkill[];
};

export function SkillGroup({ title, skills }: TProps) {
  return (
    <>
      <h3 className="mt-12 text-xl font-semibold">{title}</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.icon} {...skill} />
        ))}
      </div>
    </>
  );
}
