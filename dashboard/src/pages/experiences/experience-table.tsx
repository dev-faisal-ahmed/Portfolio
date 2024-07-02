import { Loader } from '@/components/shared/loader';
import { TD, TH } from '@/components/shared/table';
import { useGetExperiencesQuery } from '@/redux/api/experience-api';

export function ExperienceTable() {
  const {
    data: experiencesData,
    isLoading,
    isFetching,
  } = useGetExperiencesQuery(null);

  console.log(experiencesData);

  if (isLoading || isFetching)
    return (
      <div className="flex w-full items-center justify-center p-6">
        <Loader />
      </div>
    );

  return (
    <div className="mt-6 rounded-md bg-white p-6">
      {experiencesData?.data && experiencesData.data.length ? (
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <TH className="rounded-s-full text-left">Organization</TH>
                <TH className="text-left">Designation</TH>
                <TH className="text-left">Duration</TH>
                <TH className="rounded-e-full">Actions</TH>
              </tr>
            </thead>
            <tbody>
              {experiencesData.data.map((experience) => (
                <tr
                  className="border-b border-neutral-300"
                  key={experience._id}
                >
                  <TD>{experience.organizationName}</TD>
                  <TD>{experience.designation}</TD>
                  <TD>{experience.duration}</TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center font-semibold">No Skills Found</p>
      )}
    </div>
  );
}
