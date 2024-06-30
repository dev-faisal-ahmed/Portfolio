import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TProject } from '@/lib/types';
import { ProjectDetails } from './project-details';

export function ProjectCard(project: TProject) {
  const { coverUrl, technologies, name, description, links, liveLink } =
    project;

  return (
    <div className="cursor-pointer rounded-2xl bg-neutral-800 p-6">
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
      <p className="mt-3 line-clamp-3 text-justify text-sm text-white/70">
        {description}
      </p>
      <div className="mt-8 flex flex-row flex-wrap items-center justify-end gap-6">
        {links.map(({ url, title }) => (
          <Link className="flex-1" key={url} href={url} target="_blank">
            <Button className="w-full" variant={'outline'}>
              {title}
            </Button>
          </Link>
        ))}
        <Link className="flex-1" href={liveLink} target="_blank">
          <Button className="w-full">Live Site</Button>
        </Link>
        <ProjectDetails {...project} />
      </div>
    </div>
  );
}
