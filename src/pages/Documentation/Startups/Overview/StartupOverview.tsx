import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { ROUTES } from '@/config/routes';
import { NavItem } from '@/types';

const HEADINGS = {
  1: {
    id: 'about',
    label: 'About',
  },
  2: {
    id: 'startup-stage-guides',
    label: 'Startup Stage Guides',
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
];

const SYMPHONY_INFO_LINKS: NavItem[] = [
  {
    id: '1',
    label: 'The Idea Stage',
    description: 'Deciding what business to make',
    href: ROUTES.DOCUMENTATION.STARTUPS.INCEPTION,
  },
];

export const StartupOverview = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Startup Documentation
        </h1>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-10">
            Symphony, being devoted to improving the financial space both within
            and without crypto, provides this documentation to help you get your
            startup off the ground. It covers what you are likely to need to get
            funding, how to get development started, and how to make sure you
            are on the right path. All of this information is based off the path
            we tread to get Symphony started, and is provided at no cost to you.
          </p>
          <p className="mt-4">
            This is an open-source community effort, so feel free to suggest new
            topics, add new content, and provide examples wherever you think it
            might be helpful. All documentation can be edited via GitHub.
          </p>
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <ListLinks listLinks={SYMPHONY_INFO_LINKS} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
