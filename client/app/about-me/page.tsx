import { Metadata } from 'next';
import { AboutMe } from './_components/about-me';
import { Skills } from './_components/skills';
import { Education } from './_components/education';
import { Experiences } from './_components/experiences';

export const metadata: Metadata = {
  title: 'About Faisal Ahmed',
};

export default async function AboutMePage() {
  return (
    <main className="container my-10">
      <AboutMe />
      <Experiences />
      <Skills />
      <Education />
    </main>
  );
}
