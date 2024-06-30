import { Heading } from '@/shared/heading';
import Image from 'next/image';

export function AboutMe() {
  return (
    <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
      <div className="w-full text-center lg:text-left">
        <Heading>About Me.</Heading>
        <p className="mt-5 text-justify text-sm text-white/60 md:text-base lg:w-[80%]">
          I am a passionate Full Stack Developer dedicated to building
          innovative and efficient web solutions. With a keen eye for detail and
          a love for coding, I create seamless user experiences that blend
          creativity with functionality. Dive in to learn more about my journey
          and the skills I bring to the table.
        </p>
      </div>
      <div className="w-full max-w-[400px] rounded-3xl bg-black/20">
        <Image
          style={{}}
          className="rounded-3xl"
          src={'/images/about-faisal.png'}
          alt="Faisal-Ahmed"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
