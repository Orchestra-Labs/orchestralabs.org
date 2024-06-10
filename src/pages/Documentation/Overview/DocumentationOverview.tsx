import { Link } from 'react-router-dom';

import { PageNavigator, SectionNavigator } from '@/components';
import { NavigationItemProps } from '@/types';

const HEADINGS = {
  1: {
    id: 'development-modules',
    label: 'Development Modules',
  },
  2: {
    id: 'foundational-topics',
    label: 'Foundational Topics',
  },
  3: {
    id: 'symphony-stack',
    label: 'Symphony Stack',
  },
};

const NAVIGATION_ITEMS: NavigationItemProps[] = [
  {
    id: 1,
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
  {
    id: 2,
    label: HEADINGS[2].label,
    href: `#${HEADINGS[2].id}`,
  },
  {
    id: 3,
    label: HEADINGS[3].label,
    href: `#${HEADINGS[3].id}`,
  },
];

export const DocumentationOverview = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
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
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
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
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
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
        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
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
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
