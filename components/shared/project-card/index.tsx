import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TProject } from '@/lib/types';

export function ProjectCard(project: TProject) {
  const { _id, coverUrl, technologies, name, description, links } = project;

  return (
    <div className="cursor-pointer rounded-2xl bg-neutral-800/40 p-6 ring-1 ring-white/50 transition duration-300 hover:-translate-y-1">
      <Image
        className="w-full rounded-xl"
        src={coverUrl}
        width={700}
        height={700}
        alt="Project_Cover"
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
      <h3 className="mt-8 text-2xl font-bold uppercase tracking-wider">
        {name}
      </h3>

      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="mt-6 line-clamp-3 text-justify text-sm text-white/70"
      />
      <div className="mt-8 flex flex-row flex-wrap items-center justify-end gap-6">
        <Link className="flex-1" href={links.client} target="_blank">
          <Button className="w-full" variant={'outline'}>
            Client
          </Button>
        </Link>

        <Link className="flex-1" href={links.server} target="_blank">
          <Button className="w-full" variant={'outline'}>
            Server
          </Button>
        </Link>

        <Link className="flex-1" href={links.live} target="_blank">
          <Button className="w-full">Live Site</Button>
        </Link>
        <Link href={`/project/${_id}`}>
          <Button className="bg-cyan-600 text-white hover:bg-cyan-700">
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
