import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  1: {
    id: 'separating-from-banks',
    label: 'Separating From Banks',
  },
  2: {
    id: 'providing-yield',
    label: 'Providing Yield',
  },
  3: {
    id: 'a-reliable-trade-medium',
    label: 'A Reliable Trade Medium',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
  {
    id: '2',
    label: HEADINGS[2].label,
    href: `#${HEADINGS[2].id}`,
  },
  {
    id: '3',
    label: HEADINGS[3].label,
    href: `#${HEADINGS[3].id}`,
  },
];

export const WhyDecentralizedRWAs = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Why Decentralized RWAs
        </h1>
        <p className="mt-10">
          Crypto needs to connect to the real world, whether through a base
          money asset, real estate, or financial markets. Recent sanctions have
          shown the world lacks a globally accessible and censorship-resistant
          means of holding capital.
        </p>
        <p className="mt-5">
          Symphony addresses this need within crypto. DeFi attempts to create a
          parallel financial system, yet stablecoins and other real-world assets
          (RWAs), the most used part of this system, remain reliant on
          traditional banking infrastructure. Symphony aims to provide an
          alternative for a truly independent financial system.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            A functional and independent financial system at scale requires a
            stable asset not reliant on legacy banking infrastructure. Without
            an independent and stable reserve asset, both centralized and
            decentralized order books are inherently fragile.
          </p>
          <p className="mt-5">
            Centralized exchanges urgently need a reliable and transparent asset
            for their order books. DeFi is at risk due to reliance on RWAs like
            USDC, which can fail due to their underlying banking infrastructure,
            as seen with USDC and Silicon Valley Bank. Reducing dependence on
            the traditional banking system for stablecoin infrastructure is the
            most critical issue facing crypto today.
          </p>
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-5">
            While US citizens have access to a $30 trillion treasury market,
            many individuals in the rest of the world, including the crypto
            market, cannot generate yield on a dollar-denominated means of
            preserving capital.
          </p>
          <p className="mt-5">
            User demand for existing stablecoins is already enormous at $150
            billion+ despite a "return-free" risk profile. A substantially
            equivalent product that provides permissionless value accrual is the
            largest market opportunity that crypto can provide globally,
            surpassing volatile stores of value, fiat, or current RWA-backed
            stablecoins.
          </p>
        </div>
        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <p className="mt-5">
            The US has shown that US dollar reserves can be weaponized with
            sanctions, driving countries towards BRICS, a new trading bloc. To
            ensure a balanced power dynamic, this bloc must use a permissionless
            service like blockchain for fair and stable trade. Symphony enables
            this, allowing tokenized RWA trade to start in one currency and end
            in another, ensuring seamless transactions.
          </p>
          <p className="mt-5">
            The end of the petro-dollar will cause US dollars to flow back into
            the US, leading to economic turmoil and bank failures. Centralized
            stablecoins will crash, but Symphony, as a decentralized option,
            will remain secure. Crypto needs a secure alternative, free from
            centralized control. Crypto needs Symphony.
          </p>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
