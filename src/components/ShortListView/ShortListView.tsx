import { ClassValue } from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/helpers';

type ShortListViewProps = {
  title?: string;
  className?: string;
  linkText?: string;
  link?: string;
  children: React.ReactNode;
};

export const ShortListView: React.FC<ShortListViewProps> = ({
  title,
  linkText,
  link,
  className,
  children,
}) => (
  <section
    className={cn(
      'flex flex-col w-1/2 border border-neutral-2 p-5 rounded-lg bg-background-dark-grey',
      className as ClassValue,
    )}
  >
    <div className="border-b border-neutral-2 pb-5 w-full">
      {title && <h2 className="text-h5 text-white font-bold">{title}</h2>}
    </div>
    <div className="flex flex-col overflow-x-auto">{children}</div>
    {linkText && link && (
      <div className="flex justify-center pt-5">
        <Link to={link} className="uppercase text-neutral-1 hover:text-white">
          {linkText}
        </Link>
      </div>
    )}
  </section>
);
