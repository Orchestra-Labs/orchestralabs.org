import styled from '@emotion/styled';
import React from 'react';

import { SocialLinks } from '@/components';
import { design } from '@/theme/design';

import { NavItems } from '../NavItems';

type StyledRootProps = {
  opened: boolean;
};

const Root = styled('div')<StyledRootProps>`
  position: fixed;
  right: 0;
  transform: translateX(${props => (props.opened ? 0 : '100%')});
  top: 0;
  width: 100%;
  padding: 84px 25px;
  transition: transform 0.3s ease-in-out;
  height: 100vh;
  background: ${design.colors.black};
  z-index: 5;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 62px;
`;

type MobileMenuProps = {
  opened: boolean;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ opened }) => (
  <Root opened={opened}>
    <ContentWrapper>
      <NavItems
        direction="column"
        gap="lg"
        linkColor={design.colors.showWhite}
      />
      <SocialLinks mt={40} />
    </ContentWrapper>
  </Root>
);
