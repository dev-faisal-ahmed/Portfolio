import { Metadata } from 'next';
import { AboutMe } from './_components/about-me';
import { Skills } from './_components/skills';

export const meta: Metadata = {
  title: 'About Faisal Ahmed',
};

export default function AboutMePage() {
  return (
    <main className="container my-10">
      <AboutMe />
      <Skills />
    </main>
  );
}
