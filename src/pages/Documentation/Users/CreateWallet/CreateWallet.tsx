import { ListLinks, DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import { ImageModal } from '@/components/ImageModal';

import keplrDownload from '@/assets/images/keplr-download.png';
import addPassword from '@/assets/images/add-password.png';
import initialWalletSearch from '@/assets/images/initial-wallet-search.png';
import createNewWallet from '@/assets/images/create-new-wallet.png';
import createWalletOptions from '@/assets/images/create-wallet-options.png';
import playStoreInstallation from '@/assets/images/play-store-installation.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/config/';

const HEADINGS = {
  0: {
    id: 'create-a-wallet',
    label: 'Create A Wallet',
  },
  1: {
    id: 'general-setup',
    label: 'General Wallet Setup',
  },
  2: {
    id: 'connected-wallets',
    label: 'Connected Wallets',
  },
};

// TODO: update this list and remove keplr guide
const CONNECTED_WALLETS: NavItem[] = [
  {
    id: 'keplr-wallet',
    label: 'Keplr Wallet',
    target: '_blank',
    href: 'https://www.keplr.app/download',
    description: 'Your interchain gateway',
  },
  {
    id: 'leap-wallet',
    label: 'Leap Wallet',
    target: '_blank',
    href: 'https://www.leapwallet.io/#download',
    description: "The interchain experience you've been waiting for",
  },
];

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
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
        id: CONNECTED_WALLETS[0].id,
        label: CONNECTED_WALLETS[0].label,
        href: `#${CONNECTED_WALLETS[0].id}`,
      },
      {
        id: CONNECTED_WALLETS[1].id,
        label: CONNECTED_WALLETS[1].label,
        href: `#${CONNECTED_WALLETS[1].id}`,
      },
    ],
  },
];

export const CreateWallet = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      The first step with any chain is to set up a wallet. A walkthrough for
      this is below. All wallets will operate in a similar manner whether as a
      web extension or mobile application. Given Symphony was first connected to
      Keplr, the screenshots in the instructions will match their systems. Links
      to the various connected wallets can be found below the walkthrough in the
      "Connected Wallets" section.
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <p className="mt-5">
        While the links to all connected wallets and chain searches can be found
        below, due to Symphony's more difficult non-native installation on
        Keplr, the Keplr Wallet link and instructions are also included here:
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
        If you are setting up Keplr for the first time: In the initial pop-up
        window, choose the install button corresponding to your browser or
        mobile system.
      </p>
      <ImageModal imageSrc={keplrDownload} altText="Keplr download" />
      <p className="mt-5">Install the wallet.</p>
      <ImageModal
        imageSrc={playStoreInstallation}
        altText="Play store installation"
      />
      <p className="mt-5">
        Open the application and select to create a wallet.
      </p>
      <ImageModal imageSrc={createNewWallet} altText="Create new wallet" />
      <p className="mt-5">
        Keplr has options to create a wallet via a recovery phrase or via a
        social ID registration. Using a recovery phrase is recommended for
        security. Newer users may opt for connecting via social ID.
      </p>
      <ImageModal
        imageSrc={createWalletOptions}
        altText="Create wallet options"
      />
      <p className="mt-5">
        Keplr wallets require a name for wallet management, and a password to
        keep the wallet secure. Enter these values and proceed to the next step.
      </p>
      <ImageModal imageSrc={addPassword} altText="Add password" />
      <p className="mt-5">
        Initially, Symphony will not show in the search, as it is a non-native
        chain to Keplr. To add Symphony to this wallet, follow the documentation
        on how included here:
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
      <ImageModal imageSrc={initialWalletSearch} altText="Info row" />
    </div>
    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <ListLinks listLinks={CONNECTED_WALLETS} />
    </div>
  </DocumentationLayout>
);
