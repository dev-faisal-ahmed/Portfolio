'use client';

import { socialLinks } from '@/app/(home)/_data/social-links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { socialLinks } from '@/app/(main)/(home)/_data/social-links';

export function Footer() {
  const pathName = usePathname();

  return (
    <footer className="mt-auto flex flex-col items-center bg-black py-4 text-sm">
      {pathName !== '/' && (
        <div className="mx-auto my-6 flex w-fit items-center gap-6 lg:mx-0">
          {socialLinks.map(({ icon, url }) => (
            <Link
              className="hover:bg-primary/110 rounded-full p-2 transition hover:shadow-[0_0_30px_10px_#159763]"
              key={url}
              href={url}
              target="_blank"
            >
              {icon}
            </Link>
          ))}
        </div>
      )}

      <h3>
        Designed & developed by{' '}
        <Link
          className="text-primary underline"
          href={'https://www.linkedin.com/in/ost-faisal-ahmed/'}
          target="_blank"
        >
          Faisal Ahmed
        </Link>{' '}
      </h3>
    </footer>
  );
}
