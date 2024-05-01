import { ClassValue } from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/helpers';
import { NavItem } from '@/types';

type NavItemProps = {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
};

export const NavItems: React.FC<NavItemProps> = ({
  items,
  className,
  linkClassName,
}) => (
  <div
    className={cn('flex flex-row items-center gap-8', className as ClassValue)}
  >
    {items.map(link => (
      <Link
        key={link.id}
        to={link.url}
        className={cn(
          'text-white text-lg/7 hover:underline',
          linkClassName as ClassValue,
        )}
      >
        {link.label}
      </Link>
    ))}
  </div>
);
