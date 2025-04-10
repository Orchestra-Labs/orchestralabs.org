import { useDisclosure } from '@mantine/hooks';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Logo } from '@/assets/icons/Logo';
import { MobileMenu, SocialLinks } from '@/components';
import { ROUTES } from '@/config/';
import { MAIN_LAYOUT_LINKS } from '@/constants';
import { BurgerButton } from '@/ui-kit';

import { NavItems } from '../NavItems';

export type HeaderProps = Record<string, unknown>;

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(
    null,
  ) as MutableRefObject<HTMLDivElement>;
  const { pathname } = useLocation();

  const [opened, { toggle }] = useDisclosure();

  useEffect(() => {
    const handleBackgroundOnScroll = () => {
      const opacity = pathname === ROUTES.HOME ? window.scrollY / 200 : 1;

      if (headerRef?.current) {
        headerRef.current.style!.backgroundColor = `rgba(10, 9, 13, ${opacity})`;
      }
    };

    handleBackgroundOnScroll();

    window.addEventListener('scroll', handleBackgroundOnScroll);

    return () => {
      window.removeEventListener('scroll', handleBackgroundOnScroll);
    };
  }, [pathname]);

  return (
    <header
      className="fixed top-0 inset-x-0 z-10 px-[25px] py-7 lg:px-6 lg:py-7.5"
      ref={headerRef}
    >
      <div className="mx-auto max-h-11 max-w-[1278px] w-full flex justify-between items-center">
        <Link
          className="z-10 w-[127px] h-7 sm:w-[165px] sm:h-[34px] lg:w-[209px] lg:h-11"
          to={import.meta.env.VITE_PUBLIC_APP_URL || window.location.origin}
        >
          <Logo />
        </Link>
        <NavItems items={MAIN_LAYOUT_LINKS} className="hidden lg:flex" />
        <SocialLinks className="hidden lg:flex" linkClassName="text-white" />
        <BurgerButton opened={opened} toggle={toggle} />
        <MobileMenu opened={opened} toggle={toggle} links={MAIN_LAYOUT_LINKS} />
      </div>
    </header>
  );
};
