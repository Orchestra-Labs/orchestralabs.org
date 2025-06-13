import { ListLinks, DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import { DOCUMENTATION_NAVIGATION } from '@/config/';

const HEADINGS = {
  0: {
    id: 'ambassador',
    label: 'The Ambassador Program',
  },
  1: {
    id: 'guides',
    label: 'Guides',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '0',
    label: HEADINGS[0].label,
    href: `#${HEADINGS[0].id}`,
  },
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
];

const AMBASSADOR_DOCUMENTATION_LINKS =
  DOCUMENTATION_NAVIGATION.AMBASSADOR_PROGRAM.subList || [];

export const AmbassadorOverview = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      This documentation is designed to help you navigate the Ambassador
      program. It covers how to qualify, ranking up, and benefits of each level.
      If it seems a bit overwhelming, keep in mind the entire program can be
      summarized as: talk to people about us, invite people to join us, and talk
      to others in our community.
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <ListLinks listLinks={AMBASSADOR_DOCUMENTATION_LINKS} />
    </div>
  </DocumentationLayout>
);
