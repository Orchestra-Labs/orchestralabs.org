import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  0: { id: 'symphony-impact', label: "Symphony's Impact" },
  1: { id: 'improving-global-trade', label: 'Improving Global Trade' },
  2: { id: 'democratizing-yield', label: 'Democratizing Yield' },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
];

export const SymphonyImpact = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      From the creation of Bitcoin with the financial crisis of 2008, through
      Circle's delisting from the Silicon Valley Bank crash, to the
      weaponization of the US dollar and subsequent dropping of that currency as
      the petro-dollar reserve, centralized systems have proven themselves
      unreliable.
    </p>
    <p className="mt-5">
      Failures of centralized bodies to plan properly and ensure a reliable
      system have caused trade to move away from the G7 and onto a more
      decentralized system. Governments within BRICS should and are avoiding
      giving any one foreign currency power over their trade systems. They are
      moving towards trading in their own currencies, and Symphony supports
      this.
    </p>

    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <p className="mt-5">
        Symphony's tokenization system will improve global trade by ensuring
        secure, transparent, and efficient transactions without relying on
        legacy banking infrastructure, which can fail due to policy changes or
        economic instability.
      </p>
      <p className="mt-5">
        In the event of hyperinflation, Symphony allows assets to be quickly
        converted to a more stable currency, preserving the value of goods and
        protecting trade.
      </p>
      <p className="mt-5">
        Decentralization ensures that all parties receive their value despite
        unilateral decisions by centralized entities, reducing the risk from
        government policy failures that can disrupt banks and underlying assets.
      </p>
    </div>

    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <p className="mt-5">
        Symphony allows tokenized assets to be staked, providing yields
        equivalent to native coins. This enables users in permitted
        jurisdictions to earn yields on stablecoins similar to government bonds.
      </p>
      <p className="mt-5">
        Symphony's approach combines the stability of stablecoins with the yield
        generation and security of government bonds. Additionally, blockchain
        technology democratizes access, expanding the government bond market,
        increasing revenue for traditional governments, and allowing the masses
        to access yields.
      </p>
    </div>
  </DocumentationLayout>
);
