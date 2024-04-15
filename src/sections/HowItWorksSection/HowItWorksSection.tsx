import styled from '@emotion/styled';
import { Image, Text, Title as MTitle } from '@mantine/core';
import { PropsWithChildren } from 'react';

import image1 from '@/assets/images/schema.png';
import image2 from '@/assets/images/schema2.png';
import image3 from '@/assets/images/schema3.png';
import { design } from '@/theme/design';

const Root = styled.section`
  padding: 60px 0;
  background: ${design.colors.darkGrey};
  @media screen and (min-width: 48em) {
    padding: 70px 24px;
  }
  @media screen and (min-width: 75em) {
    padding: 90px 24px;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const RowWrapper = styled.div`
  padding: 25px 34px;
  border-bottom: 1px solid #363636;
  @media screen and (min-width: 48em) {
    padding: 50px 0;
  }
  @media screen and (min-width: 75em) {
    padding: 70px 0;
  }
  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const RowContent = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 48em) {
    padding: 0 16.5%;
  }
  @media screen and (min-width: 75em) {
    padding: 0 17%;
  }
`;

const Title = styled(MTitle)`
  color: ${design.colors.showWhite};
  text-align: center;
  margin-bottom: 15px;
  font-size: ${design.headings.size.h4.fontSize};
  line-height: ${design.headings.size.h4.lineHeight};
  @media screen and (min-width: 48em) {
    margin-bottom: 10px;
    font-size: ${design.headings.size.h2.fontSize};
    line-height: ${design.headings.size.h2.lineHeight};
  }
  @media screen and (min-width: 75em) {
    margin-bottom: 20px;
    font-size: ${design.typography.size.display2.fontSize};
    line-height: ${design.typography.size.display2.lineHeight};
  }
`;

const ImageLabel = styled(Text)<PropsWithChildren>`
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
  color: ${design.colors.primaryBlue};
  align-self: flex-end;
  margin-top: 10px;
  @media screen and (min-width: 48em) {
    font-size: 15px;
    line-height: 20px;
    margin-top: 20px;
  }
  @media screen and (min-width: 75em) {
    font-size: ${design.headings.size.h5.fontSize};
    line-height: ${design.headings.size.h5.lineHeight};
    margin-top: 30px;
  }
`;

const ROWS = [
  {
    id: 1,
    src: image1,
    label: 'a. Arbitrage section',
  },
  {
    id: 2,
    src: image2,
    label: 'b. Fee system',
  },
  {
    id: 3,
    src: image3,
    label: 'c. Rebalance mechanism',
  },
];

export const HowItWorksSection = () => (
  <Root>
    <Container>
      <Title>How it works</Title>
      {ROWS.map(row => (
        <RowWrapper key={row.id}>
          <RowContent>
            <Image src={row.src} />
            <ImageLabel>{row.label}</ImageLabel>
          </RowContent>
        </RowWrapper>
      ))}
    </Container>
  </Root>
);
