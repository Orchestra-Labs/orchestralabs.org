import { PageNavigator, SectionNavigator } from '@/components';
import { ROUTES } from '@/config/routes';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

import arbitrageRebalancing from '@/assets/images/schema.png';
import supplySideRebalancing from '@/assets/images/schema2.png';
import elasticReserves from '@/assets/images/schema3.png';

const HEADINGS = {
  1: {
    id: 'separating-from-banks',
    label: 'Algorithmic and Crypto-Backed',
  },
  2: {
    id: 'providing-yield',
    label: 'The Dual-Elasticity System',
  },
  3: {
    id: 'a-reliable-trade-medium',
    label: 'Supply-side, not Price-side',
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

export const TheSymphonyApproach = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Symphony's Approach
        </h1>
        <p className="mt-5">
          Much as illustrated in the documentation page on{' '}
          <Link
            to={ROUTES.DOCUMENTATION.THE_STABLECOIN_TRILEMMA}
            className="text-blue hover:text-blue-darker underline"
          >
            the stablecoin trilemma
          </Link>
          {', '}
          stablecoins of all types have had their issues. Symphony, however,
          addresses these issues by combining the best aspects of various
          approaches with multiple safeguards. Its dual-elasticity system is
          both algorithmic and crypto-backed, while focusing on supply-side
          solutions rather than price-side patches.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            Symphony's algorithmic nature comes into play with its initial use
            of arbitrage rebalancing.
            <img
              className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
              src={arbitrageRebalancing}
              alt="Arbitrage rebalancing"
            />
          </p>
          <p className="mt-5">
            This algorithmic nature is further utilized with the first of
            Symphony's safe-guards, the override of peg once arbitrage falls off
            by the allowable margin.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={supplySideRebalancing}
            alt="Supply-side rebalancing"
          />
          <p className="mt-5">
            Symphony's crypto-backed nature comes into play with the second of
            its safeguards, triggering outside another allowable margin, and
            utilizing the 2:1 elastic reserves. These reserves are kept at 2:1
            at minimum. When the value of the coin rises, these reserves rise
            past that minimum quickly and easily, making the system more secure
            as circulating supply falls.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={elasticReserves}
            alt="Supply-side rebalancing"
          />
          <p className="mt-5">
            The third of Symphony's safeguards is its reserve fee, taken only
            when the reserve balance falls below a 2:1 backing against assets.
            This allows Symphony to safeguard its assets in the unlikely case
            the arbutrage peg falls below 50%.
          </p>
          <p className="mt-5">
            While either of the previous two safeguards would have prevented the
            UST hyper-inflation crash, further safeguards, such as the delayed
            transactions and partial transactions, as well as the multi-key
            reserves, do not yet have infographics, but are also an essential
            part of ensuring Symphony is able to maintain the reliability of its
            tokenized assets even down to a 99% loss in value.
          </p>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
