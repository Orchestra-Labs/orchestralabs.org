import { Link } from 'react-router-dom';

import { cn } from '@/helpers';

import waves2 from '@/assets/images/waves-test.svg';
import { SOCIAL_LINKS } from '@/constants';

export const HeroSection = () => (
  <div className="min-h-screen relative">
    <div className="absolute bg-hero-blur-circle blur-[180px] w-[372px] h-[372px] rounded-full top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 transition-size duration-500" />
    <div className="flex justify-center items-center min-h-[inherit] relative z-[1] px-25px md:px-6">
      <div className="flex flex-col max-w-[882px] text-center items-center gap-4 mt-[-50%] md:-mt-40 xl:-mt-[120px]">
        <h1 className="font-semibold text-white text-h4 md:text-h2/[56px] xl:text-display2">
          <span className="tracking-wide-30">SYMPHONY</span>
          <p className="text-blue text-h5">The Stablecoin Chain</p>
        </h1>
        <p className="text-grey text-body-md md:text-body-lg xl:text-body-xl mt-5">
          {/* Releasing soon via IDO */}
          Earn yield on anything!
        </p>
        <Link
          to={SOCIAL_LINKS[1].href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex no-underline items-center justify-center mt-7 w-fit px-11 py-4 rounded-full bg-background-dark-grey',
            'text-grey font-semibold text-base/6 text-center',
            'hover:bg-background-dark-grey-hover',
          )}
        >
          Join our Testnet!
        </Link>
      </div>
    </div>
    <img
      className="absolute bottom-0 w-full h-[291px]"
      src={waves2}
      alt="Waves"
    />
  </div>
);
