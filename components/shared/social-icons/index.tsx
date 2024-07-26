import Link from 'next/link';
import { socialLinks } from './social-links.data';

export function SocialIcons() {
  return (
    <div className="mx-auto my-6 flex w-fit items-center gap-6 lg:mx-0">
      {socialLinks.map(({ icon, url }) => (
        <Link
          className="hover:bg-primary/110 rounded-full p-2 text-5xl transition hover:shadow-[0_0_30px_10px_#159763]"
          key={url}
          href={url}
          target="_blank"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
}
