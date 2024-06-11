import { ClassValue } from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { SOCIAL_LINKS } from '@/constants';
import { cn } from '@/helpers';

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  linkClassName,
}) => (
  <div
    className={cn('flex flex-row items-center gap-5', className as ClassValue)}
  >
    {SOCIAL_LINKS.map(link => (
      <NavLink
        key={link.id}
        className={cn('inline-flex', linkClassName as ClassValue)}
        to={link.href}
        target="_blank"
      >
        <link.Icon />
      </NavLink>
    ))}
  </div>
);
