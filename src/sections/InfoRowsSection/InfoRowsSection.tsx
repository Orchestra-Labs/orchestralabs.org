import React from 'react';
import { Link } from 'react-router-dom';

import { SocialLinks } from '@/components';
import { cn } from '@/helpers';

type RowType = {
  id: number;
  src: string;
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
  showSocials?: boolean;
};

type InfoRowsSectionProps = {
  title?: React.ReactNode;
  secondaryTitle?: React.ReactNode;
  rows: RowType[];
  revertType?: 'odd' | 'even';
  textAlign?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
};

export const InfoRowsSection: React.FC<InfoRowsSectionProps> = ({
  title,
  secondaryTitle: title2,
  rows,
  revertType = 'odd',
  textAlign = 'left',
  children,
}) => (
  <section className="section-container px-25px py-15 md:px-0 md:pt-2.5 md:pb-[35px] lg:px-6">
    <div className="flex flex-col items-center">
      {title && (
        <h2 className="font-semibold mt-[80px] text-center text-white text-h4 md:mb-7.5 md:text-h2 xl:text-display1">
          {title}
        </h2>
      )}
    </div>

    {children}

    <div className="flex flex-col items-center">
      {title2 && (
        <h2 className="font-semibold mt-4 text-center text-white text-h4 md:mb-7.5 md:text-h2 xl:text-display1">
          {title2}
        </h2>
      )}
    </div>

    <div className="flex flex-col">
      {rows.map(row => (
        <div
          key={row.id}
          className={cn(
            'flex flex-col justify-between py-10 border-b border-[#363636] md:flex-row md:py-[70px] md:px-19 lg:px-32',
            'last:border-0 last:pb-0',
            revertType === 'odd' && 'md:odd:flex-row-reverse',
            revertType === 'even' && 'md:even:flex-row-reverse',
          )}
        >
          <div className="flex items-center justify-center md:max-w-[55%]">
            <img
              className="w-1/2 max-w-[211px] mb-10 md:w-[29.2vw] md:max-w-[300px] md:mb-0 lg:w-[26.1vw] lg:max-w-[352px]"
              src={row.src}
              alt="Info row"
            />
          </div>
          <div className="flex items-center justify-center md:max-w-[55%]">
            <div className={cn('flex flex-col gap-6', `text-${textAlign}`)}>
              <h2 className="font-semibold text-h4 md:text-h3 xl:text-h1 whitespace-pre-line text-white">
                {row.title}
              </h2>
              <p className="text-lg/7 text-grey">{row.description}</p>
              {row?.link && row?.linkLabel && (
                <Link
                  to={row.link}
                  className={cn(
                    'inline-flex items-center justify-center mt-7.5 w-full min-w-[176px] min-h-12 p-3 rounded-[50px] text-grey bg-background-dark-grey text-base text-center',
                    'no-underline md:w-fit md:mt-12.5 xl:text-lg',
                  )}
                >
                  {row.linkLabel}
                </Link>
              )}
              {row?.showSocials && (
                <SocialLinks className="mt-12.5" linkClassName="text-white" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
