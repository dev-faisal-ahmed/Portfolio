import * as Sheet from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '@/data/nav.links';

export function NavMenu() {
  const { pathname } = useLocation();
  return (
    <div className="block md:hidden">
      <Sheet.Sheet>
        <Sheet.SheetTrigger>
          <HiOutlineMenuAlt1 size={24} />
        </Sheet.SheetTrigger>
        <Sheet.SheetContent
          side={'left'}
          className="flex min-h-[100dvh] flex-col border-neutral-500"
        >
          <Sheet.SheetTitle>
            <Link className="text-xl" to={'/'}>
              <Sheet.SheetClose>
                Faisal<span className="text-primary">.</span>{' '}
              </Sheet.SheetClose>
            </Link>
          </Sheet.SheetTitle>

          <div className="mt-6 flex flex-col gap-3">
            {navLinks.map(({ title, url }) => (
              <div
                key={url}
                className={cn(
                  'border-b px-2 pb-1',
                  pathname === url ? 'border-primary' : 'border-transparent',
                )}
              >
                <Link to={url}>
                  <Sheet.SheetClose>{title}</Sheet.SheetClose>
                </Link>
              </div>
            ))}
          </div>
        </Sheet.SheetContent>
      </Sheet.Sheet>
    </div>
  );
}
