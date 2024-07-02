import { Heading } from '@/components/shared/heading';
import { AddExperience } from './add-experience';

export default function ExperiencesPage() {
  return (
    <main className="container py-6">
      <section className="flex items-center justify-between gap-6">
        <Heading>Experiences</Heading>
        <AddExperience />
      </section>
    </main>
  );
}
