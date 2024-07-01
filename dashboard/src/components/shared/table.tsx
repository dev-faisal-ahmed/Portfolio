import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type TProps = PropsWithChildren & {
  className?: string;
};

export const TH = ({ children, className }: TProps) => {
  return (
    <th
      className={twMerge(
        'whitespace-nowrap bg-slate-100 px-6 py-3 text-center font-semibold uppercase',
        className,
      )}
    >
      {children}
    </th>
  );
};

export const TD = ({ children, className }: TProps) => {
  return <td className={twMerge('px-6 py-3', className)}>{children}</td>;
};
