import { ImageModal, DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

import walletConnectDiagram from '@/assets/images/wallet-connect.png';

const HEADINGS = {
  0: {
    id: 'walletconnect',
    label: 'WalletConnect',
  },
  1: {
    id: 'function-diagram',
    label: 'Function Diagram',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
];

export const WalletConnect = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      The diagram below shows how WalletConnect works with our systems.
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>

      <ImageModal
        imageSrc={walletConnectDiagram}
        altText="How Wallet Connect works with our systems"
      />

      <p className="mt-5">
        You can find out more information about WalletConnect at the{' '}
        <Link
          to="https://walletconnect.network/"
          target="_blank"
          className="text-blue hover:text-blue-darker underline"
        >
          WalletConnect
        </Link>{' '}
        website.
      </p>
    </div>
  </DocumentationLayout>
);
