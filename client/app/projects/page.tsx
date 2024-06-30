import { Heading } from '@/components/shared/heading';
import { Metadata } from 'next';
import { projects } from './_data/projects.data';
import { ProjectCard } from '@/shared/project-card';

export const metadata: Metadata = {
  title: 'Faisal Ahmed | Projects',
};

export default function ProjectsPage() {
  return (
    <main className="container my-12">
      <Heading>My Works.</Heading>
      <div className="mt-6 grid gap-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </main>
  );
}
