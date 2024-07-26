import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SocialIcons } from './social-icons';

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center bg-black py-4 text-sm">
      <SocialIcons />
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
