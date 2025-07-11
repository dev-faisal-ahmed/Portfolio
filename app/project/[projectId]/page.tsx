import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/app/_data';
import { Button } from '@/components/ui/button';

type TProps = {
  params: { projectId: string };
};

export default function ProjectDetailsPage({ params: { projectId } }: TProps) {
  const projectDetails = projects.find((project) => project.id === projectId);

  if (!projectDetails)
    return <p className="my-6 text-center font-semibold">No Project Found</p>;

  const { coverUrl, title, description, features, techStack, links } =
    projectDetails;

  return (
    <main className="container flex flex-col-reverse gap-12 py-6 lg:flex-row">
      <section className="w-full">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="mt-6 space-y-6">
          <p className="text-white/80">{description}</p>
          <div className="space-y-3">
            <h3 className="text-lg">Features.</h3>
            <ul className="flex list-disc flex-col gap-2 pl-4">
              {features.map((feature, index) => (
                <li key={index} className="text-white/80">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
          {techStack.map((technology) => (
            <span
              className="flex-1 whitespace-nowrap rounded-full bg-neutral-600 px-3 py-1 text-center text-xs font-semibold"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-end gap-3">
          {links.client && (
            <Link href={links.client} target="_blank">
              <Button className="w-full" variant={'outline'}>
                Client
              </Button>
            </Link>
          )}

          {links.server && (
            <Link href={links.server} target="_blank">
              <Button className="w-full" variant={'outline'}>
                Server
              </Button>
            </Link>
          )}

          {links.code && (
            <Link href={links.code} target="_blank">
              <Button className="w-full" variant={'outline'}>
                Code
              </Button>
            </Link>
          )}

          <Link href={links.live} target="_blank">
            <Button className="w-full">Live Site</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
