import * as Dialog from '@/components/ui/dialog';
import Image from 'next/image';
import Link from 'next/link';
import { TProject } from '@/lib/types';
import { Button } from '@/components/ui/button';

export function ProjectDetails({
  coverUrl,
  name,
  description,
  technologies,
  links,
  liveLink,
  features,
}: TProject) {
  return (
    <Dialog.Dialog>
      <Dialog.DialogTrigger asChild>
        <Button className="bg-cyan-600 text-white hover:bg-cyan-700">
          View Details
        </Button>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent className="max-h-[80vh] overflow-auto">
        <Dialog.DialogHeader>
          <Dialog.DialogTitle className="text-xl">
            Project Details
          </Dialog.DialogTitle>
        </Dialog.DialogHeader>

        <Image
          className="mt-3 w-full rounded-md"
          src={coverUrl}
          width={700}
          height={700}
          alt="Project_Cover"
        />
        <h3 className="mt-2 text-2xl font-bold uppercase tracking-wider">
          {name}
        </h3>
        <Dialog.DialogDescription asChild>
          <p className="mt-3 text-justify text-sm text-white/70">
            {description}
          </p>
        </Dialog.DialogDescription>
        <h4 className="text-lg font-semibold">Features.</h4>
        <ul className="flex flex-col pl-4">
          {features?.map((feature, index) => (
            <li
              className="list-disc text-justify text-sm text-white/80"
              key={index}
            >
              {feature}
            </li>
          ))}
        </ul>
        <h4 className="text-lg font-semibold">Technologies.</h4>
        <ul className="flex flex-col pl-4">
          {technologies.map((technology, index) => (
            <li
              className="list-disc text-justify text-sm text-white/80"
              key={index}
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-row flex-wrap items-center justify-end gap-4">
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
          <Dialog.DialogClose>
            <Button variant={'destructive'}>Close</Button>
          </Dialog.DialogClose>
        </div>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
}
