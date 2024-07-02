import { Heading } from '@/components/shared/heading';
import { Metadata } from 'next';
import { ProjectCard } from '@/shared/project-card';
import { getProjects } from '../_api-helper/get-projects';
import { NetworkError } from '@/components/shared/network-error';

export const metadata: Metadata = {
  title: 'Faisal Ahmed | Projects',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="container my-12">
      <Heading>My Works.</Heading>
      <div className="mt-6 grid gap-12 md:grid-cols-2">
        {projects && projects.length ? (
          <>
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </>
        ) : (
          <NetworkError />
        )}
      </div>
    </main>
  );
}
