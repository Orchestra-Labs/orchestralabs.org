import { Link } from 'react-router-dom';

import { PageNavigator, SectionNavigator } from '@/components';
import { NavigationItemProps } from '@/types';

const HEADINGS = {
  abstract: {
    id: 'abstract',
    label: 'Abstract',
  },
  1: {
    id: 'introduction',
    label: '1. Introduction',
  },
  2: {
    id: 'stablecoin-policy-and-safeguards',
    label: '2. Stablecoin Policy and Safeguards',
  },
  2.1: {
    id: 'measuring-the-value-of-external-resources',
    label: '2.1 Measuring the Value of External Resources',
  },
  2.2: {
    id: 'balancing-and-rebalancing',
    label: '2.2 Balancing and Rebalancing',
  },
  2.3: { id: 'safeguards', label: '2.3 Safeguards' },
  3: { id: 'monetary-policy', label: '3. Monetary Policy' },
  4: { id: 'sharding', label: '4. Sharding' },
  4.1: { id: 'sharding-method', label: '4.1 Sharding Method' },
  4.2: { id: 'adaptive-sharding', label: '4.2 Adaptive Sharding' },
  4.3: { id: 'security', label: '4.3 Security' },
  4.4: { id: 'onboarding', label: '4.4 Onboarding' },
  5: { id: 'virtual-machine-layer', label: '5. Virtual Machine Layer' },
  6: { id: 'mining', label: '6. Mining' },
  7: { id: 'governance', label: '7. Governance' },
  8: { id: 'rollout', label: '8. Rollout' },
  9: { id: 'future-work', label: '9. Future Work' },
};

const NAVIGATION_ITEMS: NavigationItemProps[] = [
  { id: 1, label: HEADINGS.abstract.label, href: `#${HEADINGS.abstract.id}` },
  {
    id: 2,
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
  {
    id: 3,
    label: HEADINGS[2].label,
    href: `#${HEADINGS[2].id}`,
    subList: [
      {
        id: 1,
        label: HEADINGS[2.1].label,
        href: `#${HEADINGS[2.1].id}`,
      },
      { id: 2, label: HEADINGS[2.2].label, href: `#${HEADINGS[2.2].id}` },
      { id: 3, label: HEADINGS[2.3].label, href: `#${HEADINGS[2.3].id}` },
    ],
  },
  {
    id: 4,
    label: HEADINGS[3].label,
    href: `#${HEADINGS[3].id}`,
  },
  {
    id: 5,
    label: HEADINGS[4].label,
    href: `#${HEADINGS[4].id}`,
    subList: [
      { id: 1, label: HEADINGS[4.1].label, href: `#${HEADINGS[4.1].id}` },
      { id: 2, label: HEADINGS[4.2].label, href: `#${HEADINGS[4.2].id}` },
      { id: 3, label: HEADINGS[4.3].label, href: `#${HEADINGS[4.3].id}` },
      { id: 4, label: HEADINGS[4.4].label, href: `#${HEADINGS[4.4].id}` },
    ],
  },
  { id: 6, label: HEADINGS[5].label, href: `#${HEADINGS[5].id}` },
  { id: 7, label: HEADINGS[6].label, href: `#${HEADINGS[6].id}` },
  { id: 8, label: HEADINGS[7].label, href: `#${HEADINGS[7].id}` },
  { id: 9, label: HEADINGS[8].label, href: `#${HEADINGS[8].id}` },
  { id: 10, label: HEADINGS[9].label, href: `#${HEADINGS[9].id}` },
];

export const GettingStarted = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="w-full">
      <div className="page-container my-0 pl-25px md:pl-12 xl:pl-17 pt-12.5 md:pt-17.5 xl:pt-25 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Documentation
        </h1>
        <p className="mt-10">
          This documentation is designed to help you build with Symphony. It
          covers Symphony as a concept, explains the Symphony tech stack, and
          documents advanced topics for more complex applications and use cases.
          This is an open-source community effort, so feel free to suggest new
          topics, add new content, and provide examples wherever you think it
          might be helpful. All documentation can be edited via GitHub.
        </p>
        <div className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            Development modules
          </h2>
          <p className="mt-10">
            This documentation is designed to help you build with Symphony. It
            covers Symphony as a concept, explains the Symphony tech stack, and
            documents advanced topics for more complex applications and use
            cases. This is an open-source community effort, so feel free to
            suggest new topics, add new content, and provide examples wherever
            you think it might be helpful. All documentation can be edited via
            GitHub.
          </p>
        </div>
        <div className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            Foundational topics
          </h2>
          <ul className="mt-10">
            {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map(item => (
              <div key={item} className="flex mb-4 last:mb-0">
                <p>
                  <Link
                    to="#"
                    className="text-blue hover:text-blue-darker underline mr-1"
                  >
                    Into the Symphony
                  </Link>
                  - A quick overview of Symphony
                </p>
              </div>
            ))}
          </ul>
        </div>
        <div className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            Symphony stack
          </h2>
          <ul className="mt-10">
            {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map(item => (
              <div key={item} className="flex mb-4 last:mb-0">
                <p>
                  <Link
                    to="#"
                    className="text-blue hover:text-blue-darker underline mr-1"
                  >
                    Into the Symphony
                  </Link>
                  - A quick overview of Symphony
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
  </div>
);
