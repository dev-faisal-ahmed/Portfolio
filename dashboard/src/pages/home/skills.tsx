import { IconPicker } from '@/components/shared/icon-picker';
import { Loader } from '@/components/shared/loader';
import { TD, TH } from '@/components/shared/table';
import { useGetSkillsQuery } from '@/redux/api/skill-api';
import { UpdateSkill } from './update-skill';
import { DeleteSkill } from './delete-skill';

export function Skills() {
  const { data: skillsData, isFetching, isLoading } = useGetSkillsQuery(null);

  if (isLoading || isFetching)
    return (
      <div className="flex w-full items-center justify-center p-6">
        <Loader />
      </div>
    );

  return (
    <div className="mt-6 overflow-x-auto rounded-md bg-white p-6">
      {skillsData?.data && skillsData.data.length ? (
        <table className="w-full">
          <thead>
            <tr>
              <TH className="rounded-s-full pl-6">Icon</TH>
              <TH className="text-left">Technology Name</TH>
              <TH className="text-left">Status</TH>
              <TH className="text-left">Type</TH>
              <TH className="rounded-e-full">Actions</TH>
            </tr>
          </thead>
          <tbody>
            {skillsData.data.map((skill) => (
              <tr className="border-b border-neutral-300" key={skill._id}>
                <TD className="pl-6 text-center">
                  <div className="mx-auto w-fit text-5xl">
                    <IconPicker iconName={skill.icon} />
                  </div>
                </TD>
                <TD>{skill.name}</TD>
                <TD>{skill.type}</TD>
                <TD>{skill.status}</TD>
                <TD>
                  <div className="mx-auto flex w-fit items-center gap-4">
                    <UpdateSkill {...skill} />
                    <DeleteSkill skillId={skill._id} />
                  </div>
                </TD>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </div>
  );
}
