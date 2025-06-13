import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import { ImageModal } from '@/components/ImageModal';

import marketSize from '@/assets/images/market-size.png';

const HEADINGS = {
  0: {
    id: 'size-of-opportunity',
    label: 'Size of the Opportunity',
  },
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
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
];

export const SizeOfOpportunity = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      Providing reliable tokenized real-world assets is not only the largest
      challenge in the space, but the largest opportunity.
    </p>
    <ImageModal imageSrc={marketSize} altText="Market Sizes" />
    <p className="mt-5">
      The stablecoin market is, at present, $180 billion, and stablecoins make
      up 59% of crypto-currency transaction volume. While this does make up a
      portion of the larger remittances market, two much larger target markets
      exist that will also be served by Symphony's introduction: global trade
      and global bonds.
    </p>

    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <p className="mt-5">
        Global trade, valued at $32 trillion annually, can benefit immensely
        from Symphony's technology. Traditional trade relies heavily on
        centralized institutions, introducing inefficiencies, delays, and biased
        actions such as weaponization of a currency.
      </p>
      <p className="mt-5">
        Symphony enables businesses to send and receive different tokenized
        assets directly, such as sending the Ruble and the recipient receiving
        the Yuan. This directly reduces costs and removal of middle-men and
        biased parties enhances both security and reliability.
      </p>
    </div>

    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <p className="mt-5">
        The global bond market is one of the largest and most critical financial
        markets, valued at over $100 trillion. Symphony's ability to both
        tokenize real-world assets (RWAs) and provide yield on those assets can
        significantly enhance liquidity and accessibility in the bond market. By
        reducing reliance on traditional banking, the Symphony chain allows for
        the seamless exchange of tokenized bonds, improving capital efficiency
        and reducing settlement times. This innovation can lower costs, increase
        transparency, and open up the bond market to a broader range of
        participants, driving growth and stability in the financial system.
      </p>
    </div>
  </DocumentationLayout>
);
