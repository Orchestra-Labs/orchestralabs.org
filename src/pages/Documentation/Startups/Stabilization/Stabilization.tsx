import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

import keplrDownload from '@/assets/images/keplr-download.png';
import addPassword from '@/assets/images/add-password.png';
import initialWalletSearch from '@/assets/images/initial-wallet-search.png';
import createNewWallet from '@/assets/images/create-new-wallet.png';
import createWalletOptions from '@/assets/images/create-wallet-options.png';
import playStoreInstallation from '@/assets/images/play-store-installation.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/config/routes';

const HEADINGS = {
  1: {
    id: 'conceptualization',
    label: 'Conceptualization',
  },
  2: {
    id: 'validation',
    label: 'Validation',
  },
};

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
];

export const Stabilization = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Forming Your Idea
        </h1>
        <p className="mt-10">
          The first step with any startup is forming the idea. A walkthrough for
          this is below.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            While the links to all connected wallets and chain searches can be
            found below, due to Symphony being considered a non-native chain to
            Keplr, the Keplr Wallet link is also included here:
          </p>
          <p>
            {'- '}
            <Link
              to="https://www.keplr.app/download"
              target="_blank"
              className="text-blue hover:text-blue-darker underline mr-1"
            >
              Keplr Wallet
            </Link>
          </p>
          <p className="mt-5">
            If you are setting up Keplr for the first time: In the initial
            pop-up window, choose the install button corresponding to your
            browser or nobile system.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={keplrDownload}
            alt="Keplr download"
          />
          <p className="mt-5">Install the wallet.</p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={playStoreInstallation}
            alt="Play store installation"
          />
          <p className="mt-5">
            Open the application and select to create a wallet.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={createNewWallet}
            alt="Create new wallet"
          />
          <p className="mt-5">
            Keplr has options to create a wallet via a recovery phrase or via a
            social ID registration. Using a recovery phrase is recommended for
            security. Newer users may opt for connecting via social ID.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={createWalletOptions}
            alt="Create wallet options"
          />
          <p className="mt-5">
            Keplr wallets require a name for wallet management, and a password
            to keep the wallet secure. Enter these values and proceed to the
            next step.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={addPassword}
            alt="Add password"
          />
          <p className="mt-5">
            Initially, Symphony will not show in the search, as it is a
            non-native chain to Keplr. To add Symphony to this wallet, follow
            the documentation on how included here:
          </p>
          <p>
            {'- '}
            <Link
              to={ROUTES.DOCUMENTATION.USERS.ADD_SYMPHONY_TO_WALLET}
              className="text-blue hover:text-blue-darker underline mr-1"
            >
              Add Symphony To A Wallet
            </Link>
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={initialWalletSearch}
            alt="Info row"
          />
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
