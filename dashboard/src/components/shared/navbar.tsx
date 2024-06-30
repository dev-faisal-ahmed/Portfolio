import { navLinks } from '@/data/nav.links';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { UserIcon } from './user-icon';

export function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="border-neutral-400 bg-white py-3 shadow">
      <div className="container flex items-center justify-between gap-6">
        <Link to={'/'} className="text-3xl font-semibold">
          Faisal.
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map(({ title, url }) => (
            <Link
              className={cn(
                'rounded-md px-3 py-1 text-sm font-semibold',
                pathname === url ? 'bg-primary-100 text-primary-600' : '',
              )}
              to={url}
            >
              {title}
            </Link>
          ))}
        </div>
        <UserIcon name="Faisal" />
      </div>
    </nav>
  );
}
