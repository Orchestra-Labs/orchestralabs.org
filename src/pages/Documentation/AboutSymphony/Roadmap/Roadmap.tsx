import { ImageModal, DocumentationLayout } from '@/components';

import roadmap from '@/assets/images/symphony-roadmap.png';

const HEADINGS = {
  0: {
    id: 'roadmap',
    label: 'Roadmap',
  },
};

const NAVIGATION_ITEMS = [
  {
    id: '0',
    label: HEADINGS[0].label,
    href: `#${HEADINGS[0].id}`,
  },
];

export const Roadmap = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      Symphony's roadmap is planned out through the next few years, with new
      projects spanning from the completion of the stablecoin exchange, all the
      way to payments and banking integrations. Check it out in the image below!
    </p>
    <ImageModal imageSrc={roadmap} altText="Symphony Roadmap" />
  </DocumentationLayout>
);
