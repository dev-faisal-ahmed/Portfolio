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
          className="border-neutral-500 min-h-[100dvh] flex flex-col"
        >
          <Link className="text-2xl" href={'/'}>
            Faisal<span className="text-primary">.</span>{' '}
          </Link>
          <div className="flex flex-col mt-6 gap-3">
            {navLinks.map(({ title, url }) => (
              <Link
                className={cn(
                  'text-lg border-b pb-1 px-2',
                  pathName === url ? 'border-primary' : 'border-transparent'
                )}
                key={url}
                href={url}
              >
                {title}
              </Link>
            ))}
          </div>
          <Link className="mt-auto" href={'/contact'}>
            <Button className="font-semibold w-full">Contact Me</Button>
          </Link>
        </Sheet.SheetContent>
      </Sheet.Sheet>
    </div>
  );
}
