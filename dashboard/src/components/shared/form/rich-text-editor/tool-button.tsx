/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type TProps = PropsWithChildren & {
  onClick: () => void;
  isActive: boolean;
};

export function ToolButton({ children, onClick, isActive }: TProps) {
  return (
    <div
      className={cn(
        'cursor-pointer rounded-md p-1 font-semibold',
        isActive ? 'bg-primary-100 text-primary-600' : '',
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
