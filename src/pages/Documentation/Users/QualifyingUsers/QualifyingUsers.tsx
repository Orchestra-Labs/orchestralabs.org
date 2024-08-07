import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

import { Link } from 'react-router-dom';

const HEADINGS = {
  1: {
    id: 'staking',
    label: 'Staking',
  },
  2: {
    id: 'presales',
    label: 'Presales',
  },
  3: {
    id: 'nfts',
    label: 'NFTs',
  },
  3.1: {
    id: 'symphony-soundwave',
    label: 'Symphony Soundwave',
  },
  3.2: {
    id: 'geckies',
    label: 'Geckies',
  },
  3.3: {
    id: 'archies',
    label: 'Archies',
  },
  3.4: {
    id: 'snails',
    label: 'Snails',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
  {
    id: '3',
    label: HEADINGS[3].label,
    href: `#${HEADINGS[3].id}`,
    subList: [
      {
        id: HEADINGS[3.1].id,
        label: HEADINGS[3.1].label,
        href: `#${HEADINGS[3.1].id}`,
      },
      {
        id: HEADINGS[3.2].id,
        label: HEADINGS[3.2].label,
        href: `#${HEADINGS[3.2].id}`,
      },
      {
        id: HEADINGS[3.3].id,
        label: HEADINGS[3.3].label,
        href: `#${HEADINGS[3.3].id}`,
      },
      {
        id: HEADINGS[3.4].id,
        label: HEADINGS[3.4].label,
        href: `#${HEADINGS[3.4].id}`,
      },
    ],
  },
];

const QUALIFYING_TOKENS = ['OSMO', 'ATOM', 'ARCH', 'KUJI'];

const QUALIFYING_NFTS: NavItem[] = [
  { id: HEADINGS[3.1].id, label: HEADINGS[3.1].label, target: '', href: `#` },
  {
    id: HEADINGS[3.2].id,
    label: HEADINGS[3.2].label,
    target: '_blank',
    href: `https://t.co/5VNZEw1uZv`,
  },
  {
    id: HEADINGS[3.3].id,
    label: HEADINGS[3.3].label,
    target: '_blank',
    href: `https://t.co/RBHlAsPps6`,
  },
  {
    id: HEADINGS[3.4].id,
    label: HEADINGS[3.4].label,
    target: '_blank',
    href: `https://snails.network/home`,
  },
];

export const QualifyingUsers = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Qualifying For Airdrops
        </h1>
        <p className="mt-5">
          Orchestra Labs has allocated 10% of the genesis supply of Melody
          (MLD), as airdrops for the incentivized testnet. To qualify for these
          airdropped testnet rewards, meet one of the criteria below when the
          snapshot is taken:
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            Stakers of {'>100'} USD of select Cosmos ecosystem tokens:
          </p>
          <ul className="mt-5">
            {QUALIFYING_TOKENS.map(item => (
              <div className="flex mb-4 last:mb-0">
                <p className="ml-5">- {item}</p>
              </div>
            ))}
          </ul>
        </div>

        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-5">
            Participants in the Symphony pre-sale rounds. Look out for
            announcements of these on our social media sites!
          </p>
        </div>

        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <p className="mt-5">- Holders of select Cosmos ecosystem NFTs:</p>
          <ul className="mt-5">
            {QUALIFYING_NFTS.map(item => (
              <div id={item.id} className="flex mb-4 last:mb-0">
                <p className="ml-5">
                  -{' '}
                  <Link
                    to={item.href}
                    target={item.target}
                    className="text-blue hover:text-blue-darker underline mr-1"
                  >
                    {item.label}
                  </Link>
                </p>{' '}
              </div>
            ))}
          </ul>
          <p className="mt-5">
            <strong>Note:</strong> Active participation in targeted activities
            can also earn Symphony NFTs. For the most current information on
            testnet tasks, visit the Symphony Blockchain Leaderboard on Zealy.
          </p>
        </div>
      </div>
    </div>
    <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
  </div>
);
