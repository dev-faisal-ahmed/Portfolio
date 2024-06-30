import * as DropDown from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';

type TProps = {
  name: string;
};

const size = 50;

export function UserIcon({ name }: TProps) {
  const onLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <DropDown.DropdownMenu>
      <DropDown.DropdownMenuTrigger asChild>
        <div
          style={{ width: size, height: size }}
          className="flex cursor-pointer items-center justify-center rounded-full bg-primary-500 text-2xl font-bold text-white"
        >
          {name[0]}
        </div>
      </DropDown.DropdownMenuTrigger>
      <DropDown.DropdownMenuContent className="border-neutral-400">
        <div className="pt-3">
          <h3 className="border-b border-neutral-400 px-3 pb-1">{name}</h3>
          <Button
            onClick={onLogout}
            variant={'destructive'}
            className="mt-2 w-full"
          >
            Logout
          </Button>
        </div>
      </DropDown.DropdownMenuContent>
    </DropDown.DropdownMenu>
  );
}
