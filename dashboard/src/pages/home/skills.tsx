import { IconPicker } from '@/components/shared/icon-picker';
import { Loader } from '@/components/shared/loader';
import { TD, TH } from '@/components/shared/table';
import { useGetSkillsQuery } from '@/redux/api/skill-api';

export function Skills() {
  const { data: skillsData, isFetching, isLoading } = useGetSkillsQuery(null);

  if (isLoading || isFetching)
    return (
      <div className="flex w-full items-center justify-center border p-6">
        <Loader />
      </div>
    );

  return (
    <div className="mt-6 rounded-md bg-white p-6">
      {skillsData?.data && skillsData.data.length ? (
        <table className="w-full">
          <thead>
            <tr>
              <TH className="rounded-s-full pl-6">Icon</TH>
              <TH className="text-left">Technology Name</TH>
              <TH className="text-left">Status</TH>
              <TH className="rounded-e-full text-left">Type</TH>
            </tr>
          </thead>
          <tbody>
            {skillsData.data.map(({ _id, icon, name, type, status }) => (
              <tr className="border-b border-neutral-300" key={_id}>
                <TD className="pl-6 text-center">
                  <div className="mx-auto w-fit text-5xl">
                    <IconPicker iconName={icon} />
                  </div>
                </TD>
                <TD>{name}</TD>
                <TD>{type}</TD>
                <TD className="">{status}</TD>
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
