import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Typewriter } from './_components/typewriter';
import { ArrowBigDownDashIcon } from 'lucide-react';
import { socialLinks } from './_data/social-links';

export default function HomePage() {
  return (
    <main className="container mb-10 mt-20 flex flex-col-reverse items-center gap-20 lg:flex-row lg:gap-6">
      <div className="w-full text-center lg:text-left">
        <h1 className="text-3xl font-semibold md:text-6xl">
          Hi, I am <br /> Faisal Ahmed
        </h1>

        <h3 className="mt-8 text-2xl md:text-3xl">
          <span>I am a</span> &nbsp;
          <span className="inline-block font-bold text-primary">
            <Typewriter />
          </span>
        </h3>
        <p className="mt-5 text-justify text-sm text-white/60 md:text-base lg:w-[70%]">
          I am a passionate Full Stack Developer dedicated to building
          innovative and efficient web solutions. With a keen eye for detail and
          a love for coding, I create seamless user experiences that blend
          creativity with functionality. Dive in to learn more about my journey
          and the skills I bring to the table.
        </p>

        <div className="mx-auto my-6 flex w-fit items-center gap-6 lg:mx-0">
          {socialLinks.map(({ icon, url }) => (
            <Link
              className="hover:bg-primary/110 rounded-full p-2 transition hover:shadow-[0_0_30px_10px_#159763]"
              key={url}
              href={url}
              target="_blank"
            >
              {icon}
            </Link>
          ))}
        </div>
        <a
          className={cn(
            'rounded-full bg-primary px-6 text-black',
            'mx-auto mt-10 flex w-fit items-center gap-2 py-3 text-sm lg:mx-0 lg:text-base',
          )}
          href="/assets/Resume-Faisal-Ahmed.pdf"
          download={true}
        >
          Download Resume
          <ArrowBigDownDashIcon />
        </a>
      </div>
      <div className="w-full max-w-[450px]">
        <Image
          className="hero-img rounded-full transition"
          src={'/images/faisal-ahmed.png'}
          alt="Faisal-Ahmed"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
