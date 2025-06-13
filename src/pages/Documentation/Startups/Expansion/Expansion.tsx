import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

const HEADINGS = {
  0: {
    id: 'expansion',
    label: 'Expansion',
  },
  1: {
    id: 'launching',
    label: 'Launching',
  },
  2: {
    id: 'scaling',
    label: 'Scaling',
  },
  3: {
    id: 'examples',
    label: 'Examples',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
  { id: '3', label: HEADINGS[3].label, href: `#${HEADINGS[3].id}` },
];

const AIRDROP_EXAMPLES = [
  {
    label: 'Elys',
    target: '_blank',
    href: 'https://x.com/rob_inwoods/status/1814332340568539385',
    description:
      'Their community roles created incentivized champions for their community.',
  },
  {
    label: 'Initia',
    target: '_blank',
    href: 'https://app.testnet.initia.xyz/xp',
    description: "Initia's testnet was made to be fun, keeping users engaged.",
  },
  {
    label: 'Berachain',
    target: '_blank',
    href: 'https://medium.com/@simplicity51/berachain-testnet-guide-03ef609a7269',
    description:
      'Started off great with daily tasks and claimable NFTs each week.',
  },
];

export const Expansion = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      After developing your blockchain product, the next step is to launch and
      scale. This guide covers various options for expanding your project,
      including ICOs, IDOs, IEOs, launchpad options, airdrops, NFT offers, and
      community roles.
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <p className="mt-5">
        <strong>Initial Coin Offering (ICO):</strong> A popular method for
        raising funds by selling tokens to early backers directly through your
        site. Requires thorough planning, legal considerations, and a solid
        marketing strategy.
      </p>
      <p className="mt-5">
        <strong>Initial DEX Offering (IDO):</strong> Conducted on decentralized
        exchanges, IDOs offer immediate liquidity and trading opportunities.
        They often require less stringent regulatory compliance compared to
        ICOs.
      </p>
      <p className="mt-5">
        <strong>Initial Exchange Offering (IEO):</strong> Managed by
        cryptocurrency exchanges, IEOs provide added credibility and security.
        The exchange conducts due diligence and facilitates the token sale.
      </p>
      <p className="mt-5">
        <strong>Launchpad Options:</strong> Platforms like{' '}
        <Link
          to="https://launchpad.binance.com/en"
          target="_blank"
          className="text-blue hover:text-blue-darker underline"
        >
          Binance Launchpad
        </Link>
        ,{' '}
        <Link
          to="https://polkastarter.com/"
          target="_blank"
          className="text-blue hover:text-blue-darker underline"
        >
          Polkastarter
        </Link>
        , and others provide a venue for launching tokens. These platforms offer
        support and access to a broad audience.
      </p>
      <p className="mt-5">
        <strong>Airdrops:</strong> Distributing free tokens to a large audience
        to generate interest and increase token holders. Airdrops can be
        targeted based on specific criteria, such as holding another token.
      </p>
      <p className="mt-5">
        <strong>NFT Offers:</strong> Creating and selling NFTs can help raise
        funds and engage the community. NFTs offer unique digital assets that
        can be used for various purposes within your ecosystem.
      </p>
      <p className="mt-5">
        <strong>Community Roles:</strong> Engaging the community through roles
        such as ambassadors, moderators, and contributors can help build a
        strong and active user base. Incentivize participation with rewards and
        recognition.
      </p>
    </div>
    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <p className="mt-5">
        <strong>Scaling Strategies:</strong>
      </p>
      <ul className="list-disc ml-5 mt-2">
        <li>
          Enhance and optimize your blockchain infrastructure for better
          performance and security.
        </li>
        <li>
          Expand your development team to accelerate progress and introduce new
          features.
        </li>
        <li>
          Conduct thorough testing, including security audits and performance
          benchmarks.
        </li>
        <li>
          Develop comprehensive documentation and user guides to support
          adoption.
        </li>
        <li>
          Implement a robust marketing strategy to attract and retain users.
        </li>
      </ul>
      <p className="mt-5">
        <strong>Funding for Scaling:</strong> Consider Series A funding to scale
        product development and expand the team. Seek strategic partners and
        investors who can provide not only funds but also expertise and
        networks.
      </p>
      <p className="mt-5">
        <strong>Tip:</strong> Establish a strong development and support team.
        Ensure your blockchain infrastructure is secure, scalable, and
        user-friendly. Focus on community engagement and continuous improvement.
      </p>
    </div>
    <div id={HEADINGS[3].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[3].label}
      </h2>
      <p className="mt-5">
        <strong>Examples:</strong> Successful airdrops, ICOs, IDOs, and other
        offerings can provide valuable insights and inspiration. Study these
        cases to understand best practices and potential pitfalls.
      </p>
      <p className="mt-5">Previous airdrop successes:</p>
      <ul className="list-disc ml-5 mt-2">
        {AIRDROP_EXAMPLES.map((item, index) => (
          <li key={index}>
            <Link
              to={item.href}
              target={item.target}
              className="text-blue hover:text-blue-darker underline"
            >
              {item.label}
            </Link>{' '}
            - {item.description}
          </li>
        ))}
      </ul>
      <p className="mt-5">
        <strong>Tip:</strong> Sites like{' '}
        <Link
          to="https://centrifuge.digital/symphony"
          target="_blank"
          className="text-blue hover:text-blue-darker underline"
        >
          Centrifuge
        </Link>{' '}
        can be used to keep track of an ongoing testnet so users can be rewarded
        even if you restart from genesis!
      </p>
    </div>
  </DocumentationLayout>
);
