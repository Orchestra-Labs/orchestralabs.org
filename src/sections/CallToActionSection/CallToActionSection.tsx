import { Link } from 'react-router-dom';

import { cn } from '@/helpers';

export const CallToActionSection = () => (
  <section className="section-container py-15 px-25px md:py-17.5 md:px-6 xl:py-22.5">
    <div className="md:px-19 xl:px-[125px]">
      <div className="text-center font-semibold text-white text-h4 md:text-h2 xl:text-display1">
        <h1 className="font-semibold text-white text-h4 md:text-h2/[56px] xl:text-display2">
          Ready to get started?
        </h1>
        <p className="text-grey text-body-md md:text-body-lg xl:text-body-xl">
          Buy in first through our pre-sale, and get Melody at its lowest price!
        </p>
        <Link
          to="https://gempad.app/presale/0x2DE9296f70B82cA40BD6a1590D368586f78aC185?network=Ethereum"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex no-underline items-center justify-center mt-7 w-fit px-11 py-4 rounded-full bg-background-dark-grey',
            'text-grey font-semibold text-base/6 text-center',
            'hover:bg-background-dark-grey-hover',
          )}
        >
          Go to pre-sale
        </Link>
      </div>
    </div>
  </section>
);
