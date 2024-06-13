import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

import nonNativeChainSearch from '../../../../assets/images/non-native-chain-search.png';
import chainSearch from '../../../../assets/images/chain-search.png';
import manageChainVisibility from '../../../../assets/images/manage-chain-visibility.png';
import symphonyInWallet from '../../../../assets/images/symphony-in-wallet.png';
import { Link } from 'react-router-dom';

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
    target: '_blank',
    href: 'https://www.keplr.app/download',
    description: 'The Seamless Interchain Experience',
  },
];

const CHAIN_SEARCHES: NavItem[] = [
  {
    id: 1,
    label: 'Keplr Chain Search',
    target: '_blank',
    href: 'https://chains.keplr.app/',
    description: 'Add Non-Native Chains to Keplr',
  },
];

export const CreateWallet = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Create A Wallet
        </h1>
        <p className="mt-10">
          The first step with any chain is to set up a wallet. A walkthrough for
          this is below. All wallets will operate in a similar manner whether as
          a web extension or mobile application. Given Symphony was first
          connected to Keplr, the screenshots in the instructions will match
          their systems. Links to the various connected wallets can be found
          below the walkthrough in the "Connected Wallets" section.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            {
              'While the links to all connected wallets and chain searches can be \
            found below, due to Symphony being considered a non-native chain to Keplr, the '
            }
            <Link
              to="https://www.keplr.app/download"
              target="_blank"
              className="text-blue hover:text-blue-darker underline mr-1"
            >
              Keplr Wallet
            </Link>
            {'and '}
            <Link
              to="https://chains.keplr.app/"
              target="_blank"
              className="text-blue hover:text-blue-darker underline mr-1"
            >
              Keplr Chain Search
            </Link>
            are also included here.
          </p>
          <p className="mt-5">
            If you've not created a Keplr wallet, use the Keplr wallet link to
            do so and return for the next step.
          </p>
          <p className="mt-5">
            After logging into your Keplr wallet, use the Keplr chain search
            link to add the chain to the app. In-app, this can be found through
            the hamburger icon leading to the "Add More Chains" button.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={manageChainVisibility}
            alt="Info row"
          />
          <p className="mt-5">When searching, keep in mind these notes:</p>
          <p>- Most users will use the basic search "Symphony"</p>
          <p>
            - For devs, to access the testnet, search for "Symphony Testnet". If
            checking for chain ID, be sure "symphony-testnet-1" is the chain
            added.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={nonNativeChainSearch}
            alt="Info row"
          />
          <p className="mt-6">
            After adding the chain to Keplr, return to the home page and again
            use the hamburger icon, this time selecting "Manage Chain
            Visibility".
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={manageChainVisibility}
            alt="Info row"
          />
          <p className="mt-6">
            Search for the Symphony chain, mark it as selected, and press the
            save button. You will now find it visible in the wallet.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={chainSearch}
            alt="Info row"
          />
          <p className="mt-6">
            You will now find the Symphony chain visible in your wallet.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={symphonyInWallet}
            alt="Info row"
          />
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
