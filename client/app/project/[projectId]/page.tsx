import { getProjectDetails } from '@/app/_api-helper/get-project-details';
import { Parsed } from '@/components/shared/parsed/parsed';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

type TProps = {
  params: { projectId: string };
};

export default async function ProjectDetailsPage({
  params: { projectId },
}: TProps) {
  const projectDetails = await getProjectDetails(projectId);

  if (!projectDetails)
    return <p className="my-6 text-center font-semibold">No Project Found</p>;

  const { name, description, coverUrl, technologies, links, _id } =
    projectDetails;

  return (
    <main className="container flex flex-col-reverse gap-12 py-6 lg:flex-row">
      <section className="w-full">
        <h1 className="mb-4 text-2xl font-semibold">{name}</h1>
        <Parsed className="text-neutral-300" data={description} />
      </section>
      <section className="w-full">
        <Image
          width={600}
          height={600}
          alt="cover-image"
          className="rounded-lg"
          src={coverUrl}
        />
        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              className="flex-1 whitespace-nowrap rounded-full bg-neutral-600 px-3 py-1 text-center text-xs font-semibold"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-end gap-3">
          <Link href={links.client} target="_blank">
            <Button className="w-full" variant={'outline'}>
              Client
            </Button>
          </Link>

          <Link href={links.server} target="_blank">
            <Button className="w-full" variant={'outline'}>
              Server
            </Button>
          </Link>

          <Link href={links.live} target="_blank">
            <Button className="w-full">Live Site</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
