import { IconPicker } from '@/components/shared/icon-picker';
import { cn } from '@/lib/utils';

type TProps = {
  icon: string;
  name: string;
  status: string;
};

export function SkillCard({ icon, name, status }: TProps) {
  return (
    <div className="cursor-pointer rounded-2xl bg-neutral-800 p-6 text-center">
      <div className="mx-auto mb-6 w-fit text-6xl">
        <IconPicker iconName={icon} />
      </div>
      <h2>{name}</h2>
      <p
        className={cn(
          'mx-auto mt-4 w-fit rounded-md px-3 py-1 text-xs font-bold',
          status === 'EXPERT' && 'bg-primary text-neutral-900',
          status === 'INTERMEDIATE' && 'bg-cyan-600',
          status === 'FAMILIAR' && 'bg-neutral-500',
        )}
      >
        {status}
      </p>
    </div>
  );
}
