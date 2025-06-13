import { DocumentationLayout, ListLinks } from '@/components';
import { NavItem } from '@/types';
import { EXPLORERS } from './ExplorerList';

const HEADINGS = {
  0: {
    id: 'explorers',
    label: 'Explorers',
  },
  1: {
    id: 'explorers',
    label: 'Explorers',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
];

export const Explorers = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      A list of explorers is included below. Keep in mind we are now on version
      0.3 on our testnet. Any explorer chosen must reflect this version number.:
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <ListLinks listLinks={EXPLORERS} />
    </div>
  </DocumentationLayout>
);
