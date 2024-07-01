import { Heading } from '@/components/shared/heading';
import { AddSkill } from './add-skill';

export default function HomePage() {
  return (
    <section className="container py-6">
      <div className="flex items-center justify-between">
        <Heading>Skills.</Heading>
        <AddSkill />
      </div>
    </section>
  );
}
