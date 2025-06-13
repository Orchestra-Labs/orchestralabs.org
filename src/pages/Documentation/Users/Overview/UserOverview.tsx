import { ListLinks, DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import { DOCUMENTATION_NAVIGATION } from '@/config/';

const HEADINGS = {
  0: {
    id: 'user-information',
    label: 'User Information',
  },
  1: {
    id: 'guides',
    label: 'Guides',
  },
  2: {
    id: 'ecosystem',
    label: 'Ecosystem',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
];

const USER_DOCUMENTATION_LINKS =
  DOCUMENTATION_NAVIGATION.USER_INFORMATION.subList || [];

// TODO: add links to ecosystem list here.  aria wallet, leap wallet, swap dapp, and tokenomics dashboard
const ECOSYSTEM: NavItem[] = [
  {
    id: '1',
    label: 'Keplr Wallet',
    target: '_blank',
    href: 'https://www.keplr.app/download',
    description: 'The Seamless Interchain Experience',
  },
];

export const UserOverview = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      This documentation is designed to help you connect with Symphony. It
      covers how to connect to the chain, events we're running, and how to
      qualify for those events.
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <ListLinks listLinks={USER_DOCUMENTATION_LINKS} />
    </div>
    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <ListLinks listLinks={ECOSYSTEM} />
    </div>
  </DocumentationLayout>
);
