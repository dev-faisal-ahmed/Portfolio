import { ReactNode } from 'react';
import { EmailIcon } from '@/components/icons/email.icon';
import { GithubIcon } from '@/components/icons/github.icon';
import { LinkedinIcon } from '@/components/icons/linkedin.icon';
import { TwitterIcon } from '@/components/icons/twitter.icon';

type TSocialLink = {
  icon: ReactNode;
  url: string;
};

export const socialLinks: TSocialLink[] = [
  { icon: <GithubIcon />, url: 'https://github.com/dev-faisal-ahmed' },
  {
    icon: <LinkedinIcon />,
    url: 'https://www.linkedin.com/in/ost-faisal-ahmed/',
  },
  { icon: <TwitterIcon />, url: 'https://x.com/ostfaisal' },
  {
    icon: <EmailIcon />,
    url: 'mailto:ost.faisal.ahmed@gmail.com',
  },
];
