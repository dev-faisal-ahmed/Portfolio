import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type TProps = PropsWithChildren & {
  className?: string;
};

export function Heading({ children, className }: TProps) {
  return (
    <h1
      className={cn(
        'text-3xl font-semibold uppercase tracking-widest',
        className,
      )}
    >
      {children}
    </h1>
  );
}
