import { ImageModal, DocumentationLayout } from '@/components';

import tokenomics from '@/assets/images/symphony-tokenomics.png';

const HEADINGS = {
  0: {
    id: 'tokenomics',
    label: 'Tokenomics',
  },
};

const NAVIGATION_ITEMS = [
  {
    id: '0',
    label: HEADINGS[0].label,
    href: `#${HEADINGS[0].id}`,
  },
];

export const Tokenomics = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      Symphony's tokenomics are planned out to grant a greater share to the
      userbase while allowing portions to be kept back for fundraising or
      ecosystem incentives as needed. While this variant is only showing
      tokenomics at the chain level, check it out below!
    </p>
    <ImageModal imageSrc={tokenomics} altText="Symphony Tokenomics" />
  </DocumentationLayout>
);
