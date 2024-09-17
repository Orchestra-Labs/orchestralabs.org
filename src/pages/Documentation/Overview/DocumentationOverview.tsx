import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { DOCUMENTATION_NAVIGATION } from '@/config/documentationNavigation';
import { NavItem } from '@/types';

const HEADINGS = {
  1: {
    id: 'about-symphony',
    label: 'About Symphony',
  },
  2: {
    id: 'user-documentation',
    label: 'User Information',
  },
  3: {
    id: 'ambassador-program',
    label: 'Ambassador Program',
  },
  4: {
    id: 'developer-documentation',
    label: 'Developer Information',
  },
  5: {
    id: 'startup-documentation',
    label: 'Startup Information',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
  {
    id: '2',
    label: HEADINGS[2].label,
    href: `#${HEADINGS[2].id}`,
  },
  {
    id: '3',
    label: HEADINGS[3].label,
    href: `#${HEADINGS[3].id}`,
  },
  {
    id: '4',
    label: HEADINGS[4].label,
    href: `#${HEADINGS[4].id}`,
  },
  {
    id: '5',
    label: HEADINGS[5].label,
    href: `#${HEADINGS[5].id}`,
  },
];

const ABOUT_SYMPHONY_LINKS =
  DOCUMENTATION_NAVIGATION.ABOUT_SYMPHONY.subList || [];
const USER_DOCUMENTATION_LINKS =
  DOCUMENTATION_NAVIGATION.USER_INFORMATION.subList || [];
const AMBASSADOR_PROGRAM_LINKS =
  DOCUMENTATION_NAVIGATION.AMBASSADOR_PROGRAM.subList || [];
const DEVELOPER_DOCUMENTATION_LINKS =
  DOCUMENTATION_NAVIGATION.DEVELOPER_INFORMATION.subList || [];
const STARTUP_DOCUMENTATION_LINKS =
  DOCUMENTATION_NAVIGATION.STARTUP_INFORMATION.subList || [];

export const DocumentationOverview = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Symphony Overview
        </h1>
        <p className="mt-10">
          Symphony is a chain built on Cosmos that provides a crypto-native
          solution for real-world assets not reliant on traditional banking
          infrastructure. It can peg to any asset, allowing global access to
          trade across mediums such as real-estate and gold, as well as easily
          accessed infrastructure to build market systems such as ForEx.
        </p>
        <p className="mt-5">
          The documentation herein is designed to help you build with Symphony.
          It covers Symphony as a concept, explains the Symphony tech stack, and
          documents advanced topics for more complex applications and use cases.
          This is an open-source community effort, so feel free to suggest new
          topics, add new content, and provide examples wherever you think it
          might be helpful. All documentation can be edited via GitHub.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <ListLinks listLinks={ABOUT_SYMPHONY_LINKS} />
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <ListLinks listLinks={USER_DOCUMENTATION_LINKS} />
        </div>
        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <ListLinks listLinks={AMBASSADOR_PROGRAM_LINKS} />
        </div>
        <div id={HEADINGS[4].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[4].label}
          </h2>
          <ListLinks listLinks={DEVELOPER_DOCUMENTATION_LINKS} />
        </div>
        <div id={HEADINGS[5].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[5].label}
          </h2>
          <ListLinks listLinks={STARTUP_DOCUMENTATION_LINKS} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
