import styled from '@emotion/styled';
import { Image, ImageProps, rem, Text, Title as MTitle } from '@mantine/core';
import { TextProps } from '@mantine/core/lib/components/Text/Text';
import React, { PropsWithChildren } from 'react';

import { design } from '@/theme/design';
import { Article } from './Article';

const Root = styled.article`
  border-radius: 16px;
  background: rgba(17, 15, 20, 1);
  display: flex;
  flex-direction: column;
  max-width: 280px;
  cursor: pointer;
  overflow: hidden;
  @media screen and (min-width: 48em) {
    max-width: 348px;
  }
  @media screen and (min-width: 75em) {
    max-width: 424px;
  }
`;

const StyledImage = styled(Image)<ImageProps>`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Content = styled.div`
  padding: 20px;
  border: 1px solid #27272d;
  border-top: none;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  @media screen and (min-width: 48em) {
    padding: 25px;
  }
  @media screen and (min-width: 75em) {
    padding: 30px;
  }
`;

const Title = styled(MTitle)`
  color: ${design.colors.showWhite};
  font-size: ${design.typography.size.bodyXs.fontSize};
  line-height: ${design.typography.size.bodyXs.lineHeight};
  margin-top: ${rem(8)};
  @media screen and (min-width: 48em) {
    font-size: ${design.headings.size.h6.fontSize};
    line-height: ${design.headings.size.h6.lineHeight};
  }
  @media screen and (min-width: 75em) {
    font-size: ${design.headings.size.h4.fontSize};
    line-height: ${design.headings.size.h4.lineHeight};
  }
`;

// const Description = styled(Text)<PropsWithChildren<TextProps>>`
//   color: ${design.colors.dustyGrey};
//   max-width: 80%;
//   text-wrap: balance;
//   font-size: ${rem(10)};
//   line-height: ${rem(18)};
//   margin-top: ${rem(6)};
//   @media screen and (min-width: 48em) {
//     margin-top: ${rem(8)};
//     font-size: ${design.typography.size.bodySm.fontSize};
//     line-height: ${design.typography.size.bodySm.lineHeight};
//   }
//   @media screen and (min-width: 75em) {
//     margin-top: ${rem(10)};
//     font-size: ${design.typography.size.bodyMd.fontSize};
//     line-height: ${design.typography.size.bodyMd.lineHeight};
//   }
// `;

const Date = styled(Text)<PropsWithChildren<TextProps>>`
  color: ${design.colors.stormGrey};
  font-weight: 600;
  font-size: ${rem(8)};
  line-height: ${rem(14)};
  margin-top: ${rem(4)};
  @media screen and (min-width: 48em) {
    font-size: ${rem(11)};
    line-height: ${rem(20)};
  }
  @media screen and (min-width: 75em) {
    font-size: ${rem(14)};
    line-height: ${rem(25)};
  }
`;

type ArticleSlideProps = {
  data: Article;
};

export const ArticleSlide: React.FC<ArticleSlideProps> = ({ data }) => {
  const handleClick = () => {
    window.open(data.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Root onClick={handleClick}>
      <StyledImage src={data.image} />
      <Content>
        <Date>{data.createdAt}</Date>
        <Title lineClamp={3}>{data.title}</Title>
        {/* <Description lineClamp={3}>{data.description}</Description> */}
      </Content>
    </Root>
  )
};
