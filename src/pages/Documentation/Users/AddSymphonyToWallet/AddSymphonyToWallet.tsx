import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

import nonNativeChainSearch from '@/assets/images/non-native-chain-search.png';
import chainSearch from '@/assets/images/chain-search.png';
import manageChainVisibility from '@/assets/images/manage-chain-visibility.png';
import symphonyInWallet from '@/assets/images/symphony-in-wallet.png';

import connectWallet from '@/assets/images/connect-wallet.png';
import selectWalletToConnect from '@/assets/images/select-wallet-to-connect.png';
import approveConnection from '@/assets/images/approve-connection.png';
import selectAddChain from '@/assets/images/select-and-add-chain.png';

import { Link } from 'react-router-dom';
import { ROUTES } from '@/config/routes';

const HEADINGS = {
  1: {
    id: 'adding-non-native-chains',
    label: 'Adding Non-native Chains',
  },
  2: {
    id: 'enable-chain-visibility',
    label: 'Enable Chain Visibility',
  },
  3: {
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
  },
  {
    id: '3',
    label: HEADINGS[3].label,
    href: `#${HEADINGS[3].id}`,
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
            If the chain you're searching for is not native to the wallet, you
            will first need to add it to the wallet. This is easily done by
            connecting your wallet to a service and pressing a button to add the
            chain. Should you find difficulty or prefer a more manual method,
            links to chain searches can be found below, each having instructions
            from their native sources.
          </p>
          <p className="mt-5">
            Alternatively, if you've not created a wallet, use the create wallet
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
            After logging in to your wallet, navigate to a trusted source and
            connect your wallet. A wallet connection page for Symphony can be
            found through{' '}
            <Link
              to="https://testnet.ping.pub/symphony"
              className="text-blue hover:text-blue-darker underline"
            >
              Ping.pub
            </Link>
            .
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={connectWallet}
            alt="Chain visibility"
          />
          <p className="mt-5">
            Select the wallet to connect to the service. Most of our testnet
            documentation examples use Keplr.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={selectWalletToConnect}
            alt="Non-native chain search"
          />
          <p className="mt-6">Pick a chain and select to add it.</p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={selectAddChain}
            alt="Chain visibility"
          />
          <p className="mt-6">
            Approve the connection and the chain will now be searchable to
            enable visibility in your wallet.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={approveConnection}
            alt="Chain search"
          />
          <p className="mt-6">
            You will now find the Symphony chain visible in your wallet.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={symphonyInWallet}
            alt="Symphony in wallet"
          />
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-5">
            If the chain you're searching for is native to the wallet or has
            been added before, all you need to do is enable visibiility.
          </p>
          <p className="mt-5">
            After logging in to your Keplr wallet, use the Keplr chain search
            link to add the chain to the app. In-app, this can be found through
            the hamburger icon leading to the "Add More Chains" button.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={manageChainVisibility}
            alt="Chain visibility"
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
            alt="Non-native chain search"
          />
          <p className="mt-6">
            After adding the chain to Keplr, return to the home page and again
            use the hamburger icon, this time selecting "Manage Chain
            Visibility".
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={manageChainVisibility}
            alt="Chain visibility"
          />
          <p className="mt-6">
            Search for the Symphony chain, mark it as selected, and press the
            save button. You will now find it visible in the wallet.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={chainSearch}
            alt="Chain search"
          />
          <p className="mt-6">
            You will now find the Symphony chain visible in your wallet.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={symphonyInWallet}
            alt="Symphony in wallet"
          />
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
