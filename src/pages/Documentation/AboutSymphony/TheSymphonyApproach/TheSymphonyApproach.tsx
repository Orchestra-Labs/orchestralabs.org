import { DocumentationLayout } from '@/components';
import { ROUTES } from '@/config/';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';
import { ImageModal } from '@/components/ImageModal';

import supplySideRebalancing from '@/assets/images/schema2.png';
import elasticReserves from '@/assets/images/schema3.png';
import testNetDropTest from '@/assets/images/dev-net-drop-test-data.png';

const HEADINGS = {
  0: { id: 'symphony-approach', label: "Symphony's Approach" },
  1: { id: 'the-rock-in-the-river', label: 'The Rock in the River' },
  2: { id: 'the-dual-elasticity-system', label: 'The Dual-Elasticity System' },
  3: { id: 'other-safeguards', label: 'Other Safeguards' },
  4: { id: 'proof-it-works', label: 'Proof it Works' },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
  { id: '3', label: HEADINGS[3].label, href: `#${HEADINGS[3].id}` },
  { id: '4', label: HEADINGS[4].label, href: `#${HEADINGS[4].id}` },
];

export const TheSymphonyApproach = () => {
  return (
    <DocumentationLayout
      navigationItems={NAVIGATION_ITEMS}
      heading={HEADINGS[0]}
    >
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
        approaches with multiple safeguards. Its dual-elasticity system is both
        algorithmic and crypto-backed, while focusing on supply-side solutions
        rather than price-side patches.
      </p>

      <div id={HEADINGS[1].id} className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          {HEADINGS[1].label}
        </h2>
        <p className="mt-5">
          Symphony's price comes from information cleaning and middle-market
          pricing. This avoiding of price discovery prevents falling off peg.
          This information cleaning approach is Symphony's first balancer,
          removing the depeg possibility and allowing us to focus on the supply
          of collateral alone.
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
          Symphony's crypto-backed nature comes into play with the second of its
          safeguards, triggering after large drops in the value of MLD, and
          utilizing the 2:1 elastic reserves. These reserves are kept at 2:1 at
          minimum. When the value of the coin rises, these reserves rise past
          that minimum quickly and easily, making the system more secure as
          circulating supply falls.
        </p>
        <ImageModal imageSrc={elasticReserves} altText="Elastic reserves" />
        <p className="mt-5">
          The third of Symphony's safeguards is its reserve fee, taken only when
          the reserve balance falls below a 2:1 backing against assets. This
          allows Symphony to avoid force-selling users while still safeguarding
          those users in the unlikely case the value of the collateral falls
          below 50%.
        </p>
      </div>

      <div id={HEADINGS[3].id} className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          {HEADINGS[3].label}
        </h2>
        <p className="mt-5">
          While either of the previous two safeguards would have prevented the
          UST hyper-inflation crash, further safeguards, such as the maximum cap
          on coins, as well as the multi-key reserves, do not yet have
          infographics, but are also an essential part of ensuring Symphony is
          able to maintain the reliability of its tokenized assets even down to
          a 99% loss in value.
        </p>
      </div>

      <div id={HEADINGS[4].id} className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          {HEADINGS[4].label}
        </h2>
        <p className="mt-5">
          At Orchestra Labs, unlike other stablecoins, we don't ask you to
          blindly trust our word and tell you it works, we want to show you it
          works. As such, below is the data on this run from our test-net.
        </p>
        <ImageModal imageSrc={testNetDropTest} altText="Test-net drop-test" />
      </div>
    </DocumentationLayout>
  );
};
