import { PageNavigator, SectionNavigator } from '@/components';
import { ROUTES } from '@/config/routes';
import { NavItem } from '@/types';

import { Link } from 'react-router-dom';

const HEADINGS = {
  1: {
    id: 'create-wallet',
    label: 'Create a Wallet',
  },
  2: {
    id: 'add-symphony-to-wallet',
    label: 'Add Symphony To A Wallet',
  },
  3: {
    id: 'zealy-overview',
    label: 'Zealy Overview',
  },
  4: {
    id: 'example-tasks',
    label: 'Example Tasks',
  },
  5: {
    id: 'airdrop-policy',
    label: 'Qualifying for Airdrops',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
  { id: '3', label: HEADINGS[3].label, href: `#${HEADINGS[3].id}` },
  { id: '4', label: HEADINGS[4].label, href: `#${HEADINGS[4].id}` },
  { id: '5', label: HEADINGS[5].label, href: `#${HEADINGS[5].id}` },
];

const TASK_LIST = [
  'Claim MLD from faucet',
  'Stake MLD',
  'Send MLD to another Symphony address',
  'Send transactions to different Symphony',
  'Delegate to 3 different validators.',
  'Attempt to overspend your wallet balance.',
  'Participate in a governance vote.',
  'Collect staking rewards.',
  'Trade MLD for HUSD.',
  'The user with the lowest MLD balance at the end of the week wins.',
];

const QUALIFYING_TOKENS = ['OSMO', 'ATOM', 'ARCH', 'KUJI'];

const QUALIFYING_NFTS: NavItem[] = [
  { id: '1', label: 'Symphony Soundwave', target: '', href: `#` },
  {
    id: '2',
    label: 'Geckies',
    target: '_blank',
    href: `https://t.co/5VNZEw1uZv`,
  },
  {
    id: '3',
    label: 'Archies',
    target: '_blank',
    href: `https://t.co/RBHlAsPps6`,
  },
];

export const IncentivizedTestnet = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          The Incentivized Testnet
        </h1>
        <p className="mt-10">
          Symphony's incentivized testnet offers a unique opportunity to test
          out and experience our top-tier stablecoin balancing system prior to
          its mainnet launch. This guide will walk you through the process of
          setting up a wallet, adding the Symphony testnet, participating in
          tasks, and earning rewards.
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            To participate, you need a wallet compatible with the Symphony
            testnet. Follow Orchestra Labs’ documentation to{' '}
            <Link
              to={ROUTES.DOCUMENTATION.USERS.CREATE_WALLET}
              className="text-blue hover:text-blue-darker underline"
            >
              create a wallet
            </Link>
            . Those with wallets on other chains with qualifying NFTs or
            balances should use the keyphrase for that wallet to create their
            Symphony wallet.
          </p>
        </div>

        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-5">
            Next, add the Symphony testnet to your wallet. Detailed instructions
            can be found here:
            <p>
              {'- '}
              <Link
                to={ROUTES.DOCUMENTATION.USERS.ADD_SYMPHONY_TO_WALLET}
                className="text-blue hover:text-blue-darker underline"
              >
                Add Symphony Testnet
              </Link>
            </p>
          </p>
        </div>

        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <p className="mt-5">
            Zealy is the platform through which users record their Symphony
            testnet tasks. By completing tasks on Zealy, users earn XP, which
            translates to rewards from the incentivized testnet, allowing us to
            track rewards, even if the testnet needs to apply changes to
            Genesis. The tasks are designed to be fast, engaging, and fun,
            promoting genuine interaction rather than grinding.
          </p>
        </div>

        <div id={HEADINGS[4].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[4].label}
          </h2>
          <p className="mt-5">
            Here are some examples of tasks you can complete to earn XP:
          </p>
          <ul className="mt-5">
            {TASK_LIST.map(item => (
              <div className="flex mb-4 last:mb-0">
                <p>- {item}</p>
              </div>
            ))}
          </ul>
        </div>

        <div id={HEADINGS[5].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[5].label}
          </h2>
          <p className="mt-5">
            Orchestra Labs has allocated 10% of the genesis supply of Melody
            (MLD), as airdrops for the incentivized testnet. To qualify for
            these airdropped testnet rewards, meet one of the criteria below
            when the snapshot is taken:
          </p>
          <p className="mt-5">
            - Stakers of {'>100'} USD of select Cosmos ecosystem tokens:
          </p>
          <ul className="mt-5">
            {QUALIFYING_TOKENS.map(item => (
              <div className="flex mb-4 last:mb-0">
                <p className="ml-5">- {item}</p>
              </div>
            ))}
          </ul>
          <p className="mt-5">
            - Participants in the Symphony pre-sale rounds.
          </p>
          <p className="mt-5">- Holders of Symphony Soundwave NFTs.</p>
          <p className="mt-5">- Holders of select Cosmos ecosystem NFTs:</p>
          <ul className="mt-5">
            {QUALIFYING_NFTS.map(item => (
              <div className="flex mb-4 last:mb-0">
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

        <div className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            Next Steps
          </h2>
          <p className="mt-5">
            Follow Orchestra Labs on X or join the Discord and Telegram for
            updates.
          </p>
          <p className="mt-5">
            Look out for opportunities to earn Symphony Soundwave NFTs.
          </p>
          <p className="mt-5">
            Share the testnet news for a chance to win Symphony Soundwave NFTs.
          </p>
          <p className="mt-5">
            Join us in this exciting journey to experience the future of
            stablecoins and RWAs with Symphony!
          </p>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
