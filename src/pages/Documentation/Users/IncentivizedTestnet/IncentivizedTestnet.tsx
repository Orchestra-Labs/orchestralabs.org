import { DocumentationLayout } from '@/components';
import { ROUTES } from '@/config/';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

const HEADINGS = {
  0: {
    id: 'incentivized-testnet',
    label: 'The Incentivized Testnet',
  },
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
    id: 'qualifying-users',
    label: 'Qualifying for Airdrops',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
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

export const IncentivizedTestnet = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      While the phase 1 airdrop (incentivized testnet) has concluded, you can
      still see the details of it below:
    </p>
    <p className="mt-10">
      Symphony's incentivized testnet offers a unique opportunity to test out
      and experience our top-tier stablecoin balancing system prior to its
      mainnet launch. This guide will walk you through the process of setting up
      a wallet, adding the Symphony testnet, participating in tasks, and earning
      rewards.
    </p>

    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <p className="mt-5">
        To participate, you need a wallet compatible with the Symphony testnet.
        Follow Orchestra Labs’ documentation to{' '}
        <Link
          to={ROUTES.DOCUMENTATION.USERS.CREATE_WALLET}
          className="text-blue hover:text-blue-darker underline"
        >
          create a wallet
        </Link>
        . Those with wallets on other chains with qualifying NFTs or balances
        should use the keyphrase for that wallet to create their Symphony
        wallet.
      </p>
    </div>

    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <p className="mt-5">
        Next, add the Symphony testnet to your wallet. Detailed instructions can
        be found here:
      </p>
      <p>
        {'- '}
        <Link
          to={ROUTES.DOCUMENTATION.USERS.ADD_SYMPHONY_TO_WALLET}
          className="text-blue hover:text-blue-darker underline"
        >
          Add Symphony Testnet
        </Link>
      </p>
    </div>

    <div id={HEADINGS[3].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[3].label}
      </h2>
      <p className="mt-5">
        Zealy is the platform through which users record their Symphony testnet
        tasks. By completing tasks on Zealy, users earn XP, which translates to
        rewards from the incentivized testnet, allowing us to track rewards,
        even if the testnet needs to apply changes to Genesis. The tasks are
        designed to be fast, engaging, and fun, promoting genuine interaction
        rather than grinding. Get in, try it out, and move on with your day or
        join our community! You can find a link to the Zealy sprint for our
        testnet{' '}
        <Link
          to="https://zealy.io/cw/symphonyblockchain/leaderboard/e6760946-d01c-4d7f-9664-568f7af8e631"
          className="text-blue hover:text-blue-darker underline"
        >
          here
        </Link>
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
          <li key={item} className="mb-4">
            <p>- {item}</p>
          </li>
        ))}
      </ul>
    </div>

    <div id={HEADINGS[5].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[5].label}
      </h2>
      <p className="mt-5">
        Orchestra Labs has allocated 10% of the genesis supply of Melody (MLD),
        as airdrops for the incentivized testnet. To qualify for these
        airdropped testnet rewards, meet one of the criteria listed{' '}
        <Link
          to={ROUTES.DOCUMENTATION.USERS.QUALIFYING_USERS}
          className="text-blue hover:text-blue-darker underline"
        >
          here
        </Link>
        .
      </p>
      <p className="mt-5">
        To get the community builder allocation, increasing your airdrop
        rewards, rise through the ambassador program detailed{' '}
        <Link
          to={ROUTES.DOCUMENTATION.AMBASSADORS.ROOT}
          className="text-blue hover:text-blue-darker underline"
        >
          here
        </Link>
        .
      </p>
    </div>
  </DocumentationLayout>
);
