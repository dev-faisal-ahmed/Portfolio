'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 15;
  return totalSteps - index - 1;
};

export function StairTransition() {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex h-screen w-screen">
          {[...Array(15)].map((_, index) => (
            <motion.div
              key={index}
              variants={stairAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
                delay: reverseIndex(index) * 0.03,
              }}
              className="relative h-full w-full bg-neutral-100"
            />
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
}
