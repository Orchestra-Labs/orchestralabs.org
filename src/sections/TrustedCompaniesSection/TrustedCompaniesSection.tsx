import { ClassValue } from 'clsx';

import { cn } from '@/helpers';

import evacodes from '@/assets/images/evacodes.png';
import bloxxa from '@/assets/images/bloxxa.png';
import google from '@/assets/images/google.png';
import gexabyte from '@/assets/images/gexabyte.png';
import medium from '@/assets/images/medium.png';
import suave from '@/assets/images/suave.png';
import swapacross from '@/assets/images/swapacross.png';
import waitlist from '@/assets/images/waitlist.png';
import convo_space from '@/assets/images/convo_space.png';
import keplr from '@/assets/images/keplr.png';

type Company = {
  id: number;
  name: string;
  src: string;
  logoClass?: ClassValue;
};

const COMPANIES: Company[] = [
  {
    id: 1,
    name: 'EvaCodes',
    src: evacodes,
  },
  {
    id: 2,
    name: 'Bloxxa',
    src: bloxxa,
    logoClass: 'max-h-8',
  },
  {
    id: 3,
    name: 'Google',
    src: google,
    logoClass: 'max-h-9',
  },
  {
    id: 4,
    name: 'Gexabyte',
    src: gexabyte,
    logoClass: 'max-h-10',
  },
  {
    id: 5,
    name: 'Medium',
    src: medium,
    logoClass: 'max-h-7',
  },
  {
    id: 6,
    name: 'Suave',
    src: suave,
    logoClass: 'max-h-8',
  },
  {
    id: 7,
    name: 'SwapAcross',
    src: swapacross,
    logoClass: 'max-h-9',
  },
  {
    id: 8,
    name: 'Waitlist',
    src: waitlist,
    logoClass: 'max-h-8',
  },
  {
    id: 9,
    name: 'Convo Space',
    src: convo_space,
    logoClass: 'max-h-10',
  },
  {
    id: 10,
    name: 'Keplr',
    src: keplr,
    logoClass: 'max-h-10',
  },
];

export const TrustedCompaniesSection = () => (
  <section className="section-container pt-5 md:pt-11 pb-15 md:pb-22.5 px-25px lg:px-6">
    <h2 className="text-body-sm uppercase text-blue text-center">
      Trusted by the following companies
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
