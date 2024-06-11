import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  1: {
    id: 'general-setup',
    label: 'General Wallet Setup',
  },
  2: {
    id: 'connected-wallets',
    label: 'Connected Wallets',
  },
  3: {
    id: 'wallet-chain-searches',
    label: 'Chain Search',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 1,
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
  {
    id: 2,
    label: HEADINGS[2].label,
    href: `#${HEADINGS[2].id}`,
  },
  {
    id: 3,
    label: HEADINGS[3].label,
    href: `#${HEADINGS[3].id}`,
  },
];

const CONNECTED_WALLETS: NavItem[] = [
  {
    id: 1,
    label: 'Keplr Wallet',
    description: 'The Seamless Interchain Experience',
    href: 'https://www.keplr.app/download',
  },
];

const CHAIN_SEARCHES: NavItem[] = [
  {
    id: 1,
    label: 'Keplr Chain Search',
    description: 'Add Non-Native Chains to Keplr',
    href: 'https://chains.keplr.app/',
  },
];

export const CreateWallet = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Create Wallet
        </h1>
        <p className="mt-10">
          The first step with any chain is to set up a wallet. A walkthrough for
          this is below.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-10">
            All wallets will operate in a similar manner whether as a web
            extension or mobile application. Use the links to the connected
            wallets below to install a wallet to your preferred system.
            Afterwards, assuming the in-app search will not find Symphony, use
            the chain searches below to find our chain and add it to the in-app
            system.
            <br />
            <br />
            - Mainnet: Search "Symphony", and be sure "symphony-1" is the chain
            added.
            <br />- Testnet: Search "Symphony Testnet", and be sure
            "symphony-testnet-1" is the chain added.
          </p>
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <ListLinks listLinks={CONNECTED_WALLETS} />
        </div>
        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <ListLinks listLinks={CHAIN_SEARCHES} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
