import { useDisclosure } from '@mantine/hooks';
import { LogIn } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '@/assets/icons/Logo';
import { MobileMenu, NavItems } from '@/components';
import { ROUTES } from '@/config/';
import { EXPLORER_LAYOUT_LINKS } from '@/constants';
import {
  BurgerButton,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui-kit';

export type HeaderProps = Record<string, unknown>;

export const Header: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <header className="fixed bg-background-black border-b border-neutral-2 top-0 inset-x-0 z-10 px-[25px] py-7 lg:px-6 lg:py-7.5">
      <div className="mx-auto max-h-11 max-w-[1278px] w-full flex justify-between items-center">
        <Link
          className="z-10 w-[127px] h-7 sm:w-[165px] sm:h-[34px] lg:w-[209px] lg:h-11"
          to={import.meta.env.VITE_PUBLIC_APP_URL || window.location.origin}
        >
          <Logo />
        </Link>
        <NavItems items={EXPLORER_LAYOUT_LINKS} className="hidden lg:flex" />
        <div className="flex items-center gap-x-2.5 lg:gap-x-5">
          <Select defaultValue="mainnet">
            <SelectTrigger className="w-28 lg:w-40 min-h-8 lg:min-h-11 text-sm lg:text-base">
              <SelectValue placeholder="Choose network" />
            </SelectTrigger>
            <SelectContent className="min-w-28 lg:min-w-40">
              <SelectItem className="text-sm lg:text-base" value="mainnet">
                Mainnet
              </SelectItem>
              <SelectItem className="text-sm lg:text-base" value="testnet">
                Testnet
              </SelectItem>
            </SelectContent>
          </Select>
          <Button
            className="rounded-lg w-8 h-8 lg:h-11 p-2 lg:p-2.5 lg:max-w-44 lg:w-44 text-lg"
            asChild
          >
            <Link to={ROUTES.EXPLORER.SIGN_IN}>
              <span className="hidden lg:block">Sign In</span>
              <LogIn className="block lg:hidden w-4 h-4" />
            </Link>
          </Button>
          <BurgerButton opened={opened} toggle={toggle} />
        </div>
        <MobileMenu
          opened={opened}
          toggle={toggle}
          links={EXPLORER_LAYOUT_LINKS}
        />
      </div>
    </header>
  );
};
