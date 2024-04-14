import styled from '@emotion/styled';
import { Text, Title as MTitle } from '@mantine/core';
import { TextProps } from '@mantine/core/lib/components/Text/Text';
import { PropsWithChildren } from 'react';

import { design } from '@/theme/design';

const Root = styled.section`
  max-width: 1328px;
  margin: 0 auto;
  padding: 60px 25px 30px;
  @media screen and (min-width: 48em) {
    padding: 70px 24px 90px;
  }
  @media screen and (min-width: 75em) {
    padding: 90px 24px 150px;
  }
`;

const RowWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
  @media screen and (min-width: 48em) {
    padding-left: 76px;
    padding-top: 114px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 75em) {
    padding-left: 125px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 48em) {
    align-items: flex-start;
  }
  @media screen and (min-width: 75em) {
    gap: 23px;
  }
`;

const Title = styled(MTitle)`
  font-size: ${design.headings.size.h4.fontSize};
  line-height: ${design.headings.size.h4.lineHeight};
  color: ${design.colors.showWhite};
  @media screen and (min-width: 48em) {
    font-size: ${design.headings.size.h3.fontSize};
    line-height: ${design.headings.size.h3.lineHeight};
  }
  @media screen and (min-width: 75em) {
    font-size: ${design.headings.size.h1.fontSize};
    line-height: ${design.headings.size.h1.lineHeight};
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

const ShadowText = styled.span`
  display: none;
  @media screen and (min-width: 48em) {
    display: block;
    position: absolute;
    top: 0;
    color: rgba(255, 255, 255, 0.08);
    font-size: 120px;
    font-weight: 600;
    line-height: 168px;
  }
  @media screen and (min-width: 75em) {
    font-size: 150px;
    line-height: 210px;
  }
`;

const ROWS = [
  {
    id: 1,
    title: '10000 TPS',
    subtitle: 'Transactions per second',
    shadowText: '10000 TPS',
  },
  {
    id: 2,
    title: '< 3 seconds',
    subtitle: 'Transaction finalization time',
    shadowText: '<3 seconds',
  },
  {
    id: 3,
    title: '$0.00001',
    subtitle: 'Transaction fee in USD',
    shadowText: '$0.00001',
  },
];

export const AdvantagesSection = () => (
  <Root>
    {ROWS.map(row => (
      <RowWrapper key={row.id}>
        <Content>
          <Title>{row.title}</Title>
          <Subtitle>{row.subtitle}</Subtitle>
          <ShadowText>{row.shadowText}</ShadowText>
        </Content>
      </RowWrapper>
    ))}
  </Root>
);
