import { ClassValue } from 'clsx';
import { useRef } from 'react';
import { cn } from '@/helpers';
import { COMPANIES } from './TrustedCompanies';

export const TrustedCompaniesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-container pt-5 md:pt-11 pb-15 md:pb-22.5 px-25px lg:px-6">
      <h2 className="text-body-sm uppercase text-blue text-center">
        Trusted by the following companies
      </h2>
      <div
        className="mt-8 md:mt-12.5 xl:mt-10 overflow-x-auto"
        ref={containerRef}
      >
        <div
          className="grid grid-rows-2 auto-cols-max gap-6"
          style={{ gridAutoFlow: 'column', gridTemplateRows: 'repeat(2, 1fr)' }}
        >
          {COMPANIES.map(company => (
            <div
              key={company.id}
              className="bg-background-dark-grey p-5 min-w-[225px] max-w-[225px] h-20 flex items-center justify-center"
            >
              <img
                className={cn(
                  'w-auto max-h-8 h-full',
                  company?.logoClass as ClassValue,
                )}
                src={company.src}
                alt={company.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
