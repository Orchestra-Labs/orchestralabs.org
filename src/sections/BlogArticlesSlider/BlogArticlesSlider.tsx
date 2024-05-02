import '@splidejs/react-splide/css';

import styled from '@emotion/styled';
import { Title as MTitle } from '@mantine/core';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';

import { ArrowNext } from '@/assets/icons/ArrowNext';
import { ArrowPrev } from '@/assets/icons/ArrowPrev';
import { ArticleSlide } from '@/sections/BlogArticlesSlider/ArticleSlide';
import { design } from '@/theme/design';

import blogArticleDefault from '../../assets/images/blog-article-default.jpeg';
import { Article } from './Article';

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

type MediumArticle = {
  author: string;
  categories: string[];
  content: string;
  description: string;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};

const MEDIUM_ARTICLES_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@orchestra_labs';

const ID_FROM_URL_REGEX = /[^/]+$/;
const IMAGE_FROM_DESCRIPTION_REGEX = /<img[^>]+src="([^">]+)"/;

export const BlogArticlesSlider = () => {
  const [slides, setSlides] = useState<Article[]>([]);

  useEffect(() => {
    fetch(MEDIUM_ARTICLES_URL)
      .then(response => response.json())
      .then(data => {
        if (data && data.items.length) {
          const articles = data.items.map((item: MediumArticle) => {
            const description = item.description.toString();
            const regexMatch = description.match(IMAGE_FROM_DESCRIPTION_REGEX);
            const image = regexMatch ? regexMatch[1] : blogArticleDefault;

            return {
              id: item.guid.match(ID_FROM_URL_REGEX)![0],
              title: item.title,
              image,
              link: item.link,
              createdAt: item.pubDate,
            };
          });

          setSlides(articles);
        }
      });
  }, []);

  return (
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
            {slides.map(slide => (
              <SplideSlide key={slide.id}>
                <ArticleSlide data={slide} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </Wrapper>
    </Root>
  );
};
