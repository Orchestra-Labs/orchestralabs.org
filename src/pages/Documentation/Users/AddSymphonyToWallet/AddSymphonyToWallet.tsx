import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

import nonNativeChainSearch from '../../../../assets/images/non-native-chain-search.png';
import chainSearch from '../../../../assets/images/chain-search.png';
import manageChainVisibility from '../../../../assets/images/manage-chain-visibility.png';
import symphonyInWallet from '../../../../assets/images/symphony-in-wallet.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/config/routes';

const HEADINGS = {
  1: {
    id: 'general-setup',
    label: 'General Wallet Setup',
  },
  2: {
    id: 'wallet-chain-searches',
    label: 'Chain Searches',
  },
};

const CHAIN_SEARCHES: NavItem[] = [
  {
    id: 'keplr-chain-search',
    label: 'Keplr Chain Search',
    target: '_blank',
    href: 'https://chains.keplr.app/',
    description: 'Add Non-Native Chains to Keplr',
  },
];

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
    subList: [
      {
        id: 'keplr-chain-search',
        label: CHAIN_SEARCHES[0].label,
        href: `#keplr-chain-search`,
      },
    ],
  },
];

export const AddSymphonyToWallet = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Add Symphony To Wallet
        </h1>
        <p className="mt-10">
          Symphony is not native to all wallets. To add Symphony to a wallet
          where it is not the native chain, follow the instructions below. All
          wallets will operate in a similar manner whether as a web extension or
          mobile application. Given Symphony was first connected to Keplr, the
          screenshots in the instructions will match their systems. Links to the
          various chain searches can be found below the walkthrough in the
          "Chain Searches" section.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            While the links to all chain searches can be found below, due to
            Symphony being considered a non-native chain to Keplr, the Keplr
            Chain Search link is also included here:
            <p>
              {'- '}
              <Link
                to="https://chains.keplr.app/"
                target="_blank"
                className="text-blue hover:text-blue-darker underline mr-1"
              >
                Keplr Chain Search
              </Link>
            </p>
          </p>
          <p className="mt-5">
            If you've not created a Keplr wallet, use the create wallet
            documentation included here:
            <p>
              {'- '}
              <Link
                to={ROUTES.DOCUMENTATION.USERS.CREATE_WALLET}
                className="text-blue hover:text-blue-darker underline mr-1"
              >
                Create A Wallet
              </Link>
            </p>
          </p>
          <p className="mt-5">
            After logging in to your Keplr wallet, use the Keplr chain search
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
          <ListLinks listLinks={CHAIN_SEARCHES} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
