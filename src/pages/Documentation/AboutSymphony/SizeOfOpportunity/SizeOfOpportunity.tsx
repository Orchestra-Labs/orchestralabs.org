import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

import marketSize from '@/assets/images/market-size.png';

const HEADINGS = {
  1: {
    id: 'global-bond-market',
    label: 'Global Bond Market',
  },
  2: {
    id: 'global-trade-market',
    label: 'Global Trade Market',
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
];

export const SizeOfOpportunity = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Size of the Opportunity
        </h1>
        <p className="mt-10">
          Providing reliable tokenized real-world assets is not only the largest
          challenge in the space, but the largest opportunity.
        </p>
        <img
          className="w-3/4 max-w-[550px] mb-12.5 md:w-[45vw] md:max-w-[450px] md:mb-0 lg:w-[50vw] lg:max-w-[650px] section-container mt-4"
          src={marketSize}
          alt="Market Sizes"
        />
        <p className="mt-5">
          The stablecoin market is, at present, $180 billion, and stablecoins
          make up 59% of crypto-currency transaction volume. While this does
          make up a portion of the larger remittances market, two much larger
          target markets exist that will also be served by Symphony's
          introduction: global trade and global bonds.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            Global trade, valued at $32 trillion annually, can benefit immensely
            from Symphony's technology. Traditional trade relies heavily on
            centralized institutions, introducing inefficiencies, delays, and
            biased actions such as weaponization of a currency.
          </p>
          <p className="mt-5">
            Symphony enables businesses to send and receive different tokenized
            assets directly, such as sending the Ruble and the recipient
            receiving the Yuan. This directly reduces costs and removal of
            middle-men and biased parties enhances both security and
            reliability.
          </p>
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-5">
            The global bond market is one of the largest and most critical
            financial markets, valued at over $100 trillion. Symphony's ability
            to both tokenize real-world assets (RWAs) and provide yield on those
            assets can significantly enhance liquidity and accessibility in the
            bond market. By reducing reliance on traditional banking, the
            Symphony chain allows for the seamless exchange of tokenized bonds,
            improving capital efficiency and reducing settlement times. This
            innovation can lower costs, increase transparency, and open up the
            bond market to a broader range of participants, driving growth and
            stability in the financial system.
          </p>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
