'use client';

import TypewriterComponent from 'typewriter-effect';

export function Typewriter() {
  return (
    <TypewriterComponent
      options={{
        strings: ['Full Stack Developer'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
