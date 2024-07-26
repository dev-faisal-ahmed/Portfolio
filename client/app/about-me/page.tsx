import { Metadata } from 'next';
import { AboutMe } from './_components/about-me';
import { Skills } from './_components/skills';
import { Experiences } from './_components/experiences';
import { Education } from './_components/education';

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
