import styled from '@emotion/styled';
import {
  Button,
  rem,
  Stack,
  StackProps,
  Text,
  Title as MTitle,
} from '@mantine/core';
import { TextProps } from '@mantine/core/lib/components/Text/Text';
import { PropsWithChildren } from 'react';

import { design } from '@/theme/design';

import waves2 from '../../assets/images/waves-test.svg';

const Root = styled.div`
  min-height: 100vh;
  position: relative;
`;

const WavesBackground = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 291px;
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 372px;
  height: 372px;
  border-radius: 50%;
  background: radial-gradient(circle, #61cbf4 0%, #0a090d 100%);
  filter: blur(180px);
  transition:
    width 0.5s,
    height 0.5s;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: inherit;
  position: relative;
  z-index: 1;
  padding: 0 25px;
  @media screen and (min-width: 48em) {
    padding: 0 24px;
  }
`;

const StyledStack = styled(Stack)<PropsWithChildren<StackProps>>`
  margin-top: -50%;
  @media screen and (min-width: 48em) {
    margin-top: ${rem(-160)};
  }
  @media screen and (min-width: 75em) {
    margin-top: ${rem(-120)};
  }
`;

const Title = styled(MTitle)`
  color: ${design.colors.showWhite};
  font-size: ${design.headings.size.h4.fontSize};
  line-height: ${design.headings.size.h4.lineHeight};
  @media screen and (min-width: 48em) {
    font-size: ${design.headings.size.h2.fontSize};
    line-height: ${design.headings.size.h2.lineHeight};
  }
  @media screen and (min-width: 75em) {
    font-size: ${design.typography.size.display2.fontSize};
    line-height: ${design.typography.size.display2.lineHeight};
  }
`;

const Subtitle = styled(Text)<PropsWithChildren<TextProps>>`
  color: ${design.colors.dustyGrey};
  font-size: ${design.typography.size.bodyMd.fontSize};
  line-height: ${design.typography.size.bodyMd.lineHeight};
  @media screen and (min-width: 48em) {
    font-size: ${design.typography.size.bodyLg.fontSize};
    line-height: ${design.typography.size.bodyLg.lineHeight};
  }
  @media screen and (min-width: 75em) {
    font-size: ${design.typography.size.bodyXl.fontSize};
    line-height: ${design.typography.size.bodyXl.lineHeight};
  }
`;

export const HeroSection = () => (
  <Root>
    <BlurBackground />
    <Content>
      <StyledStack gap="md" maw={rem(882)} ta="center" align="center">
        <Title>Discover a decentralized ecosystem for stablecoins</Title>
        <Subtitle size="xl">
          Experience the true potential of decentralized stablecoins with
          Symphony
        </Subtitle>
        <Button w="fit-content" mt={rem(28)}>
          Get Started
        </Button>
      </StyledStack>
    </Content>
    <WavesBackground src={waves2} />
  </Root>
);
