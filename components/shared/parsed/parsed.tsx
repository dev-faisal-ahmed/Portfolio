import { cn } from '@/lib/utils';
import './style.css';

type TProps = {
  data: string;
  className?: string;
};

export function Parsed({ data, className }: TProps) {
  return (
    <div
      className={cn('tiptap', className)}
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
