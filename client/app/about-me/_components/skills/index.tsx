import { Heading } from '@/shared/heading';
import { SkillGroup } from './skill-group';
import { NetworkError } from '@/components/shared/network-error';
import { getGroupedSkills } from '@/app/_api-helper';

export async function Skills() {
  const groupedSkills = await getGroupedSkills();

  return (
    <>
      {groupedSkills && groupedSkills.length ? (
        <>
          <Heading className="mt-16">My Skills.</Heading>
          {groupedSkills.map(({ _id, skills }) => (
            <SkillGroup key={_id} title={_id} skills={skills} />
          ))}
        </>
      ) : (
        <NetworkError />
      )}
    </>
  );
}
