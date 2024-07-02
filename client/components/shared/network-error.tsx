import { cn } from '@/lib/utils';
import { GlobeLock } from 'lucide-react';

type TProps = {
  className?: string;
  message?: string;
};

export function NetworkError({ className, message }: TProps) {
  return (
    <div className={cn('my-20 flex flex-col items-center gap-5', className)}>
      <GlobeLock size={50} />
      <p>{message || 'Failed to load data try refreshing again'}</p>
    </div>
  );
}
