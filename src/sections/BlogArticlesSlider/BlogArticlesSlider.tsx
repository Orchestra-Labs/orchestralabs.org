import '@splidejs/react-splide/css';

import styled from '@emotion/styled';
import { Title as MTitle } from '@mantine/core';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import { ArrowNext } from '@/assets/icons/ArrowNext';
import { ArrowPrev } from '@/assets/icons/ArrowPrev';
import { ArticleSlide } from '@/sections/BlogArticlesSlider/ArticleSlide';
import { design } from '@/theme/design';

import blogImage1 from '../../assets/images/blog-article1.jpeg';
import blogImage2 from '../../assets/images/blog-article2.jpeg';
import blogImage3 from '../../assets/images/blog-article3.jpeg';

const Root = styled.section`
  background: ${design.colors.darkGrey};
  padding: 60px 25px;
  @media screen and (min-width: 48em) {
    padding: 70px 24px;
  }
  @media screen and (min-width: 75em) {
    padding: 90px 24px;
  }
`;

const Wrapper = styled.div`
  max-width: 1328px;
  margin: 0 auto;
  @media screen and (min-width: 48em) {
    padding: 0 76px;
  }
  @media screen and (min-width: 75em) {
    padding: 0 125px;
  }
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 35px;
  @media screen and (min-width: 48em) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: 75em) {
    margin-bottom: 90px;
  }
`;

const SectionTitle = styled(MTitle)`
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

const StyledArrows = styled.div`
  display: flex;
  gap: 14px;
`;

const ArrowButton = styled.button`
  position: static;
  background: rgba(255, 255, 255, 0.06);
  width: 46px;
  height: 46px;
  padding: 4px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: unset;
    height: unset;
    transform: unset;
  }
`;

const SLIDES = [
  {
    id: 1,
    title: 'Exploring the Future of DeFi',
    description:
      'Join us as we delve into the latest trends and innovations shaping the decentralized finance landscape',
    image: blogImage1,
    createdAt: 'March 12, 2024',
  },
  {
    id: 2,
    title: 'Blockchain Gaming Revolution',
    description:
      'Explore the intersection of blockchain technology and gaming, where players become true owners of in-game assets',
    image: blogImage2,
    createdAt: 'March 22, 2024',
  },
  {
    id: 3,
    title: 'Developer Insights',
    description:
      'Gain valuable insights from leading developers in the blockchain space. Learn about innovative projects, development tools, and best practices for building on Symphony',
    image: blogImage3,
    createdAt: 'April 10, 2024',
  },
  {
    id: 4,
    title: 'Exploring the Future of DeFi (2nd)',
    description:
      'Join us as we delve into the latest trends and innovations shaping the decentralized finance landscape',
    image: blogImage1,
    createdAt: 'March 12, 2024',
  },
];

export const BlogArticlesSlider = () => (
  <Root>
    <Wrapper>
      <Splide
        aria-label="Last posts slider"
        hasTrack={false}
        options={{
          autoWidth: true,
          gap: 30,
          pagination: false,
          mediaQuery: 'min',
          arrows: false,
          breakpoints: {
            768: {
              arrows: false,
              gap: 37,
            },
            1200: {
              gap: 45,
              arrows: true,
            },
          },
        }}
      >
        <HeaderBox>
          <SectionTitle>Last posts</SectionTitle>
          <StyledArrows className="splide__arrows">
            <ArrowButton
              type="button"
              className="splide__arrow splide__arrow--prev"
            >
              <ArrowPrev />
            </ArrowButton>
            <ArrowButton
              type="button"
              className="splide__arrow splide__arrow--next"
            >
              <ArrowNext />
            </ArrowButton>
          </StyledArrows>
        </HeaderBox>
        <SplideTrack>
          {SLIDES.map(slide => (
            <SplideSlide key={slide.id}>
              <ArticleSlide data={slide} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </Wrapper>
  </Root>
);
