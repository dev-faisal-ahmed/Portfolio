import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TProject } from '@/lib/types';

export function ProjectCard(project: TProject) {
  const { id, coverUrl, techStack, title, description, links } = project;

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
        {techStack.map((technology) => (
          <span
            className="flex-1 whitespace-nowrap rounded-full bg-neutral-600 px-3 py-1 text-center text-xs font-semibold"
            key={technology}
          >
            {technology}
          </span>
        ))}
      </div>
      <h3 className="mt-8 text-2xl font-bold uppercase tracking-wider">
        {title}
      </h3>

      <p className="mt-6 line-clamp-3 text-justify text-sm text-white/70">
        {description}
      </p>

      <div className="mt-8 flex flex-row flex-wrap items-center justify-end gap-6">
        {links.client && (
          <Link href={links.client} target="_blank">
            <Button className="flex-1" variant={'outline'}>
              Client
            </Button>
          </Link>
        )}

        {links.server && (
          <Link href={links.server} target="_blank">
            <Button className="flex-1" variant={'outline'}>
              Server
            </Button>
          </Link>
        )}

        {links.code && (
          <Link href={links.code} target="_blank">
            <Button className="flex-1" variant={'outline'}>
              Code
            </Button>
          </Link>
        )}

        <Link href={links.live} target="_blank">
          <Button>Live Site</Button>
        </Link>

        <Link href={`/project/${id}`}>
          <Button className="bg-cyan-600 text-white hover:bg-cyan-700">
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
