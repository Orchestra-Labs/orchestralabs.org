import '@splidejs/react-splide/css';

import { ClassValue } from 'clsx';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { cn } from '@/helpers';
import { COMPANIES } from './TrustedCompanies';

export const TrustedCompaniesSection = () => (
  <section className="section-container pt-5 md:pt-11 pb-15 md:pb-22.5 px-25px lg:px-6">
    <h2 className="text-body-sm uppercase text-blue text-center">
      Trusted by the following companies
    </h2>
    <div className="mt-8 md:mt-12.5 xl:mt-10">
      <Splide
        aria-label="Trusted companies"
        hasTrack={false}
        options={{
          type: 'loop',
          autoplay: true,
          interval: 2000,
          speed: 800,
          pauseOnHover: true,
          pauseOnFocus: false,
          pagination: false,
          arrows: false,
          gap: 24,
          perPage: 6,
          perMove: 1,
          breakpoints: {
            1200: {
              perPage: 5,
            },
            992: {
              perPage: 4,
            },
            768: {
              perPage: 3,
            },
            480: {
              perPage: 2,
            },
          },
        }}
      >
        <SplideTrack>
          {COMPANIES.map(company => {
            const content = (
              <div className="bg-background-dark-grey p-5 h-20 flex items-center justify-center">
                <img
                  className={cn(
                    'w-auto max-h-8 h-full',
                    company?.logoClass as ClassValue,
                  )}
                  src={company.src}
                  alt={company.name}
                />
              </div>
            );
            return (
              <SplideSlide key={company.id}>
                {company.href ? (
                  <a href={company.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </div>
  </section>
);
