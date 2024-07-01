import { Loader } from '@/components/shared/loader';
import { Parsed } from '@/components/shared/parsed/parsed';
import { Button } from '@/components/ui/button';
import { useGetProjectDetailsQuery } from '@/redux/api/project-api';
import { Link, useParams } from 'react-router-dom';

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const { data: projectData, isLoading } = useGetProjectDetailsQuery(
    projectId!,
  );

  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center p-6">
        <Loader />
      </div>
    );

  if (!projectData?.data)
    return <p className="py-12 text-center font-semibold">No Data Found</p>;

  const { name, coverUrl, description, links, technologies } = projectData.data;

  return (
    <main className="container flex flex-col-reverse gap-12 py-6 lg:flex-row">
      <section className="flex-1">
        <h1 className="mb-4 text-2xl font-semibold">{name}</h1>
        <Parsed data={description} />
      </section>
      <section className="flex-1">
        <img className="rounded-lg" src={coverUrl} />
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {technologies.map((technology) => (
            <p className="flex-1 whitespace-nowrap rounded-md bg-neutral-400 px-3 py-1 text-center text-xs text-white">
              {technology}
            </p>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-end gap-3">
          <Link target="_blank" to={links.client}>
            <Button variant={'outline'}>Client</Button>
          </Link>
          <Link target="_blank" to={links.server}>
            <Button variant={'outline'}>Server</Button>
          </Link>
          <Link target="_blank" to={links.live}>
            <Button>Live</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
