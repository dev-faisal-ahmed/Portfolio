'use client';

import * as Sheet from '@/components/ui/sheet';
import Link from 'next/link';
import { AlignRight } from 'lucide-react';
import { navLinks } from './nav-links';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function NavMenu() {
  const pathName = usePathname();
  return (
    <div className="block md:hidden">
      <Sheet.Sheet>
        <Sheet.SheetTrigger>
          <AlignRight size={24} />
        </Sheet.SheetTrigger>
        <Sheet.SheetContent
          side={'left'}
          className="flex min-h-[100dvh] flex-col border-neutral-500"
        >
          <Sheet.SheetTitle>
            <Link className="text-2xl text-white" href={'/'}>
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
                  pathName === url ? 'border-primary' : 'border-transparent',
                )}
              >
                <Link href={url}>
                  <Sheet.SheetClose>{title}</Sheet.SheetClose>
                </Link>
              </div>
            ))}
          </div>
          <Link className="mt-auto" href={'/contact'}>
            <Button className="w-full font-semibold">Contact Me</Button>
          </Link>
        </Sheet.SheetContent>
      </Sheet.Sheet>
    </div>
  );
}
