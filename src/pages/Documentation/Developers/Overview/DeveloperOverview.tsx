import { DocumentationLayout, ListLinks } from '@/components';
import { DOCUMENTATION_NAVIGATION } from '@/config/';
import { NavItem } from '@/types';

const HEADINGS = {
  0: {
    id: 'developer-documentation',
    label: 'Developer Documentation',
  },
  1: {
    id: 'notable-points',
    label: 'Notable Points',
  },
  2: {
    id: 'documentation-and-guides',
    label: 'Documentation and Guides',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
];

const DOCUMENTATION_NOTES: String[] = [
  "Symphony's prefix is 'symphony', not 'osmo'",
  "Symphony's endpoint information can be found at https://github.com/Orchestra-Labs/chain-registry/blob/master/testnets/symphonytestnet/chain.json",
  "Liquidity pools from the Osmosis documentation cannot be used on Symphony.  Our focus is to support RWAs.  Osmosis's focus is to use liquidity pools for exchange management.",
];

const DOCS_AND_GUIDES = [
  {
    id: '0',
    label: 'Osmosis Documentation',
    target: '_blank',
    href: 'https://docs.osmosis.zone/',
    description: 'Code documentation from our parent chain',
  },
  ...(DOCUMENTATION_NAVIGATION.DEVELOPER_INFORMATION.subList || []),
];

export const DeveloperOverview = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      Developer documentation is planned to be built out after fundraising
      completes. In the meantime, please use the Osmosis and validator
      documentation links below, as Symphony was built from Osmosis, and is
      supported by validators like NodeHub.
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <ul className="mt-10">
        {DOCUMENTATION_NOTES.map(item => (
          <li key={String(item)} className="mb-4">
            <p>- {item}</p>
          </li>
        ))}
      </ul>
    </div>
    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <ListLinks listLinks={DOCS_AND_GUIDES} />
    </div>
  </DocumentationLayout>
);
