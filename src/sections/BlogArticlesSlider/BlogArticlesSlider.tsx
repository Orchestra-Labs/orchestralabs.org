import '@splidejs/react-splide/css';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';

import { ArrowNext } from '@/assets/icons/ArrowNext';
import { ArrowPrev } from '@/assets/icons/ArrowPrev';
import { ArticleSlide } from '@/sections/BlogArticlesSlider/ArticleSlide';
import { Article, MediumArticle } from '@/types';

import blogArticleDefault from '@/assets/images/blog-article-default.png';

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
    <section className="bg-background-black py-15 px-25px md:py-17.5 md:px-6 xl:py-22.5">
      <div className="section-container md:px-19 xl:px-[125px]">
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
          <div className="flex justify-between items-center mb-[35px] md:mb-12.5 xl:mb-22.5 relative">
            <h2 className="text-white font-semibold text-h4 md:text-h2 xl:text-display2">
              Last posts
            </h2>
            <div className="splide__arrows flex gap-[14px] absolute right-0 bottom-[-20px]">
              <button
                aria-label="Previous slide"
                type="button"
                className="splide__arrow splide__arrow--prev custom-splide-arrow-button"
              >
                <ArrowPrev />
              </button>
              <button
                aria-label="Next slide"
                type="button"
                className="splide__arrow splide__arrow--next custom-splide-arrow-button"
              >
                <ArrowNext />
              </button>
            </div>
          </div>
          <SplideTrack>
            {slides.map(slide => (
              <SplideSlide key={slide.id}>
                <ArticleSlide data={slide} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>
    </section>
  );
};
