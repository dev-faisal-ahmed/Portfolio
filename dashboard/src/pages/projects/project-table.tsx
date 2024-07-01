import { Loader } from '@/components/shared/loader';
import { TD, TH } from '@/components/shared/table';
import { Button } from '@/components/ui/button';
import { useGetProjectsQuery } from '@/redux/api/project-api';
import { Link } from 'react-router-dom';
import { DeleteProject } from './delete-project';

export function ProjectTable() {
  const {
    data: projectsData,
    isLoading,
    isFetching,
  } = useGetProjectsQuery(null);

  if (isLoading || isFetching)
    return (
      <div className="flex w-full items-center justify-center p-6">
        <Loader />
      </div>
    );

  return (
    <div className="mt-6 rounded-md bg-white p-6">
      {projectsData?.data && projectsData.data.length ? (
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <TH className="rounded-s-full pl-6 text-left">
                  Technology Name
                </TH>
                <TH>Client Side</TH>
                <TH>Server Side</TH>
                <TH>Live</TH>
                <TH>Priority</TH>
                <TH className="rounded-e-full">Actions</TH>
              </tr>
            </thead>
            <tbody>
              {projectsData.data.map((project) => (
                <tr className="border-b border-neutral-300" key={project._id}>
                  <TD>{project.name}</TD>
                  <TD className="text-center">
                    <Link to={project.links.client} target="_blank">
                      <Button variant={'link'}>Click Here</Button>
                    </Link>
                  </TD>
                  <TD className="text-center">
                    <Link to={project.links.server} target="_blank">
                      <Button variant={'link'}>Click Here</Button>
                    </Link>
                  </TD>
                  <TD className="text-center">
                    <Link to={project.links.live} target="_blank">
                      <Button variant={'link'}>Click Here</Button>
                    </Link>
                  </TD>
                  <TD className="text-center">{project.priority}</TD>
                  <TD>
                    <div className="mx-auto flex w-fit items-center gap-4">
                      <Link to={`update-project/${project._id}`}>
                        <Button variant={'secondary'}>Update</Button>
                      </Link>
                      <Link to={`/project/${project._id}`}>
                        <Button variant={'outline'}>Details</Button>
                      </Link>
                      <DeleteProject projectId={project._id} />
                    </div>
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center font-semibold">No Project Found</p>
      )}
    </div>
  );
}
