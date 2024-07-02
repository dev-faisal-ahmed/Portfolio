import { Heading } from '@/shared/heading';
import { SkillGroup } from './skill-group';
import { apiUrl } from '@/app/_data/api.url';
import { TGroupedSkills } from '@/lib/types';
import { NetworkError } from '@/components/shared/network-error';

const getGroupedSkills = async () => {
  const response = await fetch(apiUrl.getGroupedSkills, { cache: 'no-cache' });
  const responseData = await response.json();
  if (!responseData.ok) return null;

  return responseData?.data as TGroupedSkills[];
};

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
