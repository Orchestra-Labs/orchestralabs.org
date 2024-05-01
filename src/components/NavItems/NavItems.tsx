import { ClassValue } from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/helpers';
import { NavItem } from '@/types';

const LINKS = [
  {
    id: 1,
    label: 'Whitepaper',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://docs.google.com/document/d/1t6mzvrnWpbq3wyUlts9HUTcLE97Y6XUol8a_bJJTUlg/edit?usp=sharing',
  },
  {
    id: 2,
    label: 'Documentation',
    url: '#',
  },
  {
    id: 2,
    label: 'Explorer',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: '#',
  },
  {
    id: 3,
    label: 'Blogs',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://medium.com/@orchestra_labs',
  },
];
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
        target={link?.target}
        rel={link?.rel}
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
