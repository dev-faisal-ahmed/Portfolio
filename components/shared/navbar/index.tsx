'use client';

import Link from 'next/link';
import { Button } from '../../ui/button';
import { navLinks } from './nav-links';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NavMenu } from './nav-menu';

export function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="border-b border-neutral-600 py-4">
      <div className="container flex items-center gap-6">
        <NavMenu />
        <Link className="sm:text-3xl text-2xl" href={'/'}>
          Faisal<span className="text-primary">.</span>
        </Link>
        <div className="md:flex hidden items-center gap-6 mx-auto">
          {navLinks.map(({ title, url }) => (
            <Link
              className={cn(
                'border-b pb-1',
                pathName === url
                  ? 'border-primary text-primary'
                  : 'border-transparent'
              )}
              key={url}
              href={url}
            >
              {title}
            </Link>
          ))}
        </div>
        <Link className="ml-auto md:ml-0" href={'/contact'}>
          <Button className="font-semibold">Contact Me</Button>
        </Link>
      </div>
    </nav>
  );
}
