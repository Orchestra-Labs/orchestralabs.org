import { ClassValue } from 'clsx';

import { cn } from '@/helpers';

import docker from '../../assets/images/docker.png';
import google from '../../assets/images/google.png';
import medium from '../../assets/images/medium.png';
import netflix from '../../assets/images/netflix.png';
import vercel from '../../assets/images/vercel.png';
import youtube from '../../assets/images/youtube.png';

type Company = {
  id: number;
  name: string;
  src: string;
  logoClass?: ClassValue;
};

const COMPANIES: Company[] = [
  {
    id: 1,
    name: 'Netflix',
    src: netflix,
  },
  {
    id: 2,
    name: 'Google',
    src: google,
    logoClass: 'max-h-8',
  },
  {
    id: 3,
    name: 'Vercel',
    src: vercel,
    logoClass: 'max-h-6',
  },
  {
    id: 4,
    name: 'Medium',
    src: medium,
    logoClass: 'max-h-6',
  },
  {
    id: 5,
    name: 'Youtube',
    src: youtube,
  },
  {
    id: 6,
    name: 'Docker',
    src: docker,
  },
];

export const TrustedCompaniesSection = () => (
  <section className="section-container pt-5 md:pt-11 pb-15 md:pb-22.5 px-25px lg:px-6">
    <h2 className="text-body-sm uppercase text-blue text-center">
      Trusted by all of the sizes companies
    </h2>
    <div className="mt-8 md:mt-12.5 xl:mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4.5 xl:gap-6">
      {COMPANIES.map(company => (
        <div
          key={company.id}
          className="bg-background-dark-grey p-5 h-20 flex items-center justify-center"
        >
          <img
            className={cn(
              'w-auto max-h-7 h-full',
              company?.logoClass as ClassValue,
            )}
            src={company.src}
            alt={company.name}
          />
        </div>
      ))}
    </div>
  </section>
);
