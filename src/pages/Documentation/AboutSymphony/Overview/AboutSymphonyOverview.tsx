import { ListLinks, DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import { DOCUMENTATION_NAVIGATION } from '@/config/';

const HEADINGS = {
  0: { id: 'about', label: 'About' },
  1: { id: 'core-information', label: 'Core Information' },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
];

const ABOUT_SYMPHONY_LINKS =
  DOCUMENTATION_NAVIGATION.ABOUT_SYMPHONY.subList || [];

export const AboutSymphonyOverview = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      This documentation is designed to help you connect with Symphony. It
      covers Symphony as a concept, explains the Symphony tech stack, and
      documents the ecosystem.
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <ListLinks listLinks={ABOUT_SYMPHONY_LINKS} />
    </div>
  </DocumentationLayout>
);
