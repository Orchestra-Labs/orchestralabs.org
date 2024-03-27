import styled from '@emotion/styled';
import {
  Image,
  ImageProps,
  MantineColor,
  StyleProp,
  Text,
  Title as MTitle,
} from '@mantine/core';
import React from 'react';

import { design } from '@/theme/design';

const Root = styled.div`
  max-width: 1328px;
  margin: 0 auto;
  padding: 60px 25px;
  @media screen and (min-width: 48em) {
    padding: 10px 0 35px;
  }
  @media screen and (min-width: 75em) {
    padding: 10px 24px 35px;
  }
`;

const SectionTitle = styled(MTitle)`
  text-align: center;
  max-width: 80%;
  margin: 0 auto 50px;
  font-size: ${design.headings.size.h4.fontSize};
  line-height: ${design.headings.size.h4.lineHeight};
  @media screen and (min-width: 48em) {
    margin: 0 auto 30px;
    font-size: ${design.headings.size.h2.fontSize};
    line-height: ${design.headings.size.h2.lineHeight};
  }
  @media screen and (min-width: 75em) {
    margin-bottom: 90px;
    font-size: ${design.typography.size.display1.fontSize};
    line-height: ${design.typography.size.display1.lineHeight};
  }
`;

const RowsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div<{ revertType: 'odd' | 'even' }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0;
  border-bottom: 1px solid #363636;
  @media screen and (min-width: 48em) {
    flex-direction: row;
    padding: 70px 76px;
    &:nth-of-type(${props => props.revertType}) {
      flex-direction: row-reverse;
    }
  }
  @media screen and (min-width: 75em) {
    padding: 70px 125px;
  }

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const HalfSideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 48em) {
    max-width: 55%;
  }
`;

const TextContentWrapper = styled.div<{ textAlign?: string }>`
  display: flex;
  flex-direction: column;
  gap: 23px;
  text-align: ${props => props?.textAlign};
`;

const StyledImage = styled(Image)<ImageProps>`
  width: 50%;
  max-width: 211px;
  margin-bottom: 40px;
  @media screen and (min-width: 48em) {
    width: 29.2vw;
    max-width: 300px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 75em) {
    width: 26.1vw;
    max-width: 352px;
  }
`;

const Title = styled(MTitle)`
  font-size: ${design.headings.size.h4.fontSize};
  line-height: ${design.headings.size.h4.lineHeight};
  @media screen and (min-width: 48em) {
    white-space: pre-line;
    font-size: ${design.headings.size.h3.fontSize};
    line-height: ${design.headings.size.h3.lineHeight};
  }
  @media screen and (min-width: 75em) {
    font-size: ${design.headings.size.h1.fontSize};
    line-height: ${design.headings.size.h1.lineHeight};
  }
`;

const Link = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  min-height: 48px;
  min-width: 176px;
  padding: 12px;
  border-radius: 50px;
  color: ${design.colors.dustyGrey};
  background: ${design.colors.darkGrey};
  font-size: ${design.typography.size.buttonSm.fontSize};
  line-height: ${design.typography.size.buttonSm.lineHeight};
  text-align: center;
  @media screen and (min-width: 48em) {
    width: fit-content;
    margin-top: 50px;
  }
  @media screen and (min-width: 75em) {
    font-size: ${design.typography.size.buttonLg.fontSize};
    line-height: ${design.typography.size.buttonLg.lineHeight};
  }
`;

type RowType = {
  id: number;
  src: string;
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
};

type InfoRowsSectionProps = {
  title?: string;
  rows: RowType[];
  revertType?: 'odd' | 'even';
  textAlign?: 'left' | 'center' | 'right';
};

export const InfoRowsSection: React.FC<InfoRowsSectionProps> = ({
  title,
  rows,
  revertType = 'odd',
  textAlign = 'left',
}) => (
  <Root>
    {title && <SectionTitle>{title}</SectionTitle>}
    <RowsList>
      {rows.map(row => (
        <RowWrapper key={row.id} revertType={revertType}>
          <HalfSideWrapper>
            <StyledImage src={row.src} />
          </HalfSideWrapper>
          <HalfSideWrapper>
            <TextContentWrapper textAlign={textAlign}>
              <Title c={design.colors.showWhite}>{row.title}</Title>
              <Text c={design.colors.dustyGrey as StyleProp<MantineColor>}>
                {row.description}
              </Text>
              {row?.link && row?.linkLabel && (
                <Link href={row.link}>{row.linkLabel}</Link>
              )}
            </TextContentWrapper>
          </HalfSideWrapper>
        </RowWrapper>
      ))}
    </RowsList>
  </Root>
);
