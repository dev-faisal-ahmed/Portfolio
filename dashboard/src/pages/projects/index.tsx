import { Heading } from '@/components/shared/heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProjectTable } from './project-table';

export default function ProjectsPage() {
  return (
    <main className="container py-6">
      <div className="flex items-center justify-between">
        <Heading>Projects.</Heading>
        <Link to={'/add-project'}>
          <Button>Add Project</Button>
        </Link>
      </div>
      <ProjectTable />
    </main>
  );
}
