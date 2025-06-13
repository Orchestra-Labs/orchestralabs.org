import { DocumentationLayout, ListLinks } from '@/components';
import { DOCUMENTATION_NAVIGATION } from '@/config/';
import { NavItem } from '@/types';

const HEADINGS = {
  0: {
    id: 'startup-overview',
    label: 'Startup Overview',
  },
  1: {
    id: 'startup-guides-by-stage',
    label: 'Startup Guides by Stage',
  },
  2: {
    id: 'how-symphony-can-help',
    label: 'How Symphony can Help',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
];

const SYMPHONY_INFO_LINKS =
  DOCUMENTATION_NAVIGATION.STARTUP_INFORMATION.subList || [];

export const StartupOverview = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      Symphony, being devoted to improving the financial space both within and
      without crypto, provides this documentation to help you get your startup
      off the ground. It covers what you are likely to need to get funding, how
      to get development started, and how to make sure you are on the right
      path. All of this information is based off the path we tread to get
      Symphony started, and is provided at no cost to you.
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <ListLinks listLinks={SYMPHONY_INFO_LINKS} />
    </div>
    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <p className="mt-4">
        Currently, all we can offer is information. Process, advisors, and
        fundraising sources can all be found in the guides linked to the left.
        In the future, however, Symphony will have grant programs for those
        building apps on Symphony. Be sure to check us out for that soon after
        launch!
      </p>
    </div>
  </DocumentationLayout>
);
