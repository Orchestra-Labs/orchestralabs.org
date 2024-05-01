import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '@/assets/icons';
import { SocialLinks } from '@/components';

const EXPLORER_FOOTER_LINKS = [
  {
    id: 1,
    name: 'COMPANY',
    links: [
      { id: 1, name: 'About Us', href: '#' },
      { id: 2, name: 'Contact Us', href: '#' },
      { id: 3, name: 'Terms & Privacy', href: '#' },
    ],
  },
  {
    id: 2,
    name: 'COMMUNITY',
    links: [
      { id: 1, name: 'Api Documentation', href: '' },
      { id: 2, name: 'Knowledge Base', href: '' },
    ],
  },
];

export const Footer = () => (
  <footer className="relative bottom-0 inset-x-0 border-t border-neutral-2">
    <div className="mx-auto max-w-[1278px] w-full flex flex-col items-center px-6 py-[50px]">
      <div className="flex gap-8 w-full justify-between flex-col items-center md:items-start md:flex-row">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Link
            className="z-10 w-[127px] h-7 sm:w-[165px] sm:h-[34px] lg:w-[209px] lg:h-11"
            to={import.meta.env.VITE_PUBLIC_APP_URL}
          >
            <Logo />
          </Link>
          <SocialLinks
            className="gap-8"
            linkClassName="text-neutral-1 hover:text-white"
          />
        </div>
        <div className="flex gap-8 md:gap-16 flex-col items-center md:items-start md:flex-row">
          {EXPLORER_FOOTER_LINKS.map(group => (
            <div key={group.id} className="text-center md:text-left">
              <h6 className="text-neutral-3 text-base font-semibold mb-5">
                {group.name}
              </h6>
              <div className="flex flex-col gap-5">
                {group.links.map(link => (
                  <Link className="text-lg hover:underline" to={link.href}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div />
      </div>
      <p className="text-neutral-3 text-sm lg:text-base mt-8 md:mt-24">
        © 2024 Symphony, Inc. All rights reserved
      </p>
    </div>
  </footer>
);
