import styled from '@emotion/styled';
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { MutableRefObject, useEffect, useRef } from 'react';

import { Logo } from '@/assets/icons/Logo';
import { MobileMenu, SocialLinks } from '@/components';
import { design } from '@/theme/design';

import { NavItems } from '../NavItems';

const Root = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 28px 25px;
  @media screen and (min-width: 62em) {
    padding: 30px 24px;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-height: 44px;
  max-width: 1278px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.a`
  z-index: 10;
  width: 127px;
  height: 28px;
  @media screen and (min-width: 36em) {
    width: 165px;
    height: 34px;
  }
  @media screen and (min-width: 62em) {
    width: 209px;
    height: 44px;
  }
`;

export type HeaderProps = Record<string, unknown>;

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(
    null,
  ) as MutableRefObject<HTMLDivElement>;

  const [opened, { toggle }] = useDisclosure();

  useEffect(() => {
    const handleBackgroundOnScroll = () => {
      const opacity = window.scrollY / 200;

      if (headerRef?.current) {
        headerRef.current.style!.backgroundColor = `rgba(10, 9, 13, ${opacity})`;
      }
    };

    window.addEventListener('scroll', handleBackgroundOnScroll);

    return () => {
      window.removeEventListener('scroll', handleBackgroundOnScroll);
    };
  }, []);

  return (
    <Root ref={headerRef}>
      <Wrapper>
        <LogoWrapper href={import.meta.env.VITE_PUBLIC_APP_URL}>
          <Logo />
        </LogoWrapper>
        <NavItems visibleFrom="md" linkColor={design.colors.showWhite} />
        <SocialLinks visibleFrom="md" />
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" />
        <MobileMenu opened={opened} />
      </Wrapper>
    </Root>
  );
};
