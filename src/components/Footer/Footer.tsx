import styled from '@emotion/styled';
import { Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { SocialLinks } from '@/components';
import { design } from '@/theme/design';

import { NavItems } from '../NavItems';

const Root = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1278px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 58px 24px;
  @media screen and (min-width: 62em) {
    padding: 58px 24px;
  }
`;

export const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <Root>
      <Wrapper>
        <Stack gap="xl" align="center">
          <NavItems
            linkColor={design.colors.dustyGrey}
            direction={isMobile ? 'column' : 'row'}
          />
          <SocialLinks iconFill={design.colors.dustyGrey} />
          <Text
            styles={{
              root: {
                color: design.colors.dustyGrey,
              },
            }}
          >
            © 2024 Symphony, Inc. All rights reserved
          </Text>
        </Stack>
      </Wrapper>
    </Root>
  );
};
