import React from 'react';

import { SocialLinks } from '@/components';
import { cn } from '@/helpers';
import { NavItem } from '@/types';

import { NavItems } from '../NavItems';

type MobileMenuProps = {
  opened: boolean;
  links: NavItem[];
  toggle: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  opened,
  links,
  toggle,
}) => (
  <aside
    className={cn(
      'fixed right-0 top-0 w-full h-screen px-[25px] py-20 transition-transform ease-in-out duration-300 bg-background-black z-[5] translate-x-full',
      opened && 'translate-x-0',
    )}
  >
    <div className="flex flex-col items-center mt-16">
      <NavItems items={links} onClick={toggle} className="flex-col gap-5" />
      <SocialLinks className="mt-10" linkClassName="text-white" />
    </div>
  </aside>
);
