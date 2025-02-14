import { PageNavigator, SectionNavigator } from '@/components';
import { ROUTES } from '@/config/routes';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';
import { ImageModal } from '@/components/ImageModal';

import arbitrageRebalancing from '@/assets/images/schema.png';
import supplySideRebalancing from '@/assets/images/schema2.png';
import elasticReserves from '@/assets/images/schema3.png';
import devNetDropTest from '@/assets/images/dev-net-drop-test-data.png';

const HEADINGS = {
  1: {
    id: 'algorithmic-and-crypto-backed',
    label: 'Algorithmic and Crypto-Backed',
  },
  2: {
    id: 'the-dual-elasticity-system',
    label: 'The Dual-Elasticity System',
  },
  3: {
    id: 'other-safeguards',
    label: 'Other Safeguards',
  },
  4: {
    id: 'proof-it-works',
    label: 'Proof it Works',
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
  {
    id: '4',
    label: HEADINGS[4].label,
    href: `#${HEADINGS[4].id}`,
  },
];

export const TheSymphonyApproach = () => {
  return (
    <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row relative">
      <PageNavigator />
      <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
        <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
          <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
            Symphony's Approach
          </h1>
          <p className="mt-5">
            Much as illustrated in the documentation page on{' '}
            <Link
              to={ROUTES.DOCUMENTATION.ABOUT.THE_STABLECOIN_TRILEMMA}
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
              Symphony's price comes from information cleaning and middle-market
              pricing, but exchanges don't use this, leading to Symphony's first
              balancer: arbitrage. Symphony's algorithmic nature comes into play
              with this initial use of reverse-arbitrage rebalancing, acting as
              a peg in the river so that these exchanges can rebalance against
              us!
              <ImageModal
                imageSrc={arbitrageRebalancing}
                altText="Arbitrage rebalancing"
              />
            </p>
            <p className="mt-5">
              This algorithmic nature is further utilized with the first of
              Symphony's safeguards, the override of peg once arbitrage falls
              off by the allowable margin.
            </p>
            <ImageModal
              imageSrc={supplySideRebalancing}
              altText="Supply-side rebalancing"
            />
          </div>

          <div id={HEADINGS[2].id} className="mt-15">
            <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
              {HEADINGS[2].label}
            </h2>
            <p className="mt-5">
              Symphony's crypto-backed nature comes into play with the second of
              its safeguards, triggering after large drops in the value of MLD,
              and utilizing the 2:1 elastic reserves. These reserves are kept at
              2:1 at minimum. When the value of the coin rises, these reserves
              rise past that minimum quickly and easily, making the system more
              secure as circulating supply falls.
            </p>
            <ImageModal imageSrc={elasticReserves} altText="Elastic reserves" />
            <p className="mt-5">
              The third of Symphony's safeguards is its reserve fee, taken only
              when the reserve balance falls below a 2:1 backing against assets.
              This allows Symphony to safeguard its assets in the unlikely case
              the value of the collateral falls below 50%.
            </p>{' '}
          </div>

          <div id={HEADINGS[3].id} className="mt-15">
            <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
              {HEADINGS[3].label}
            </h2>
            <p className="mt-5">
              While either of the previous two safeguards would have prevented
              the UST hyper-inflation crash, further safeguards, such as the
              delayed transactions and partial transactions, as well as the
              multi-key reserves, do not yet have infographics, but are also an
              essential part of ensuring Symphony is able to maintain the
              reliability of its tokenized assets even down to a 99% loss in
              value.
            </p>
          </div>

          <div id={HEADINGS[4].id} className="mt-15">
            <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
              {HEADINGS[4].label}
            </h2>
            <p className="mt-5">
              At Orchestra Labs, unlike other stablecoins, we don't ask you to
              blindly trust our word and tell you it works, we want to show you
              it works. As such, below is the data on this run from our dev-net.
            </p>
            <ImageModal imageSrc={devNetDropTest} altText="Dev-net drop-test" />
          </div>
        </div>
        <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
      </div>
    </div>
  );
};
