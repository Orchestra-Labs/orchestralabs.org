import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import { ROUTES } from '@/config/routes';

const HEADINGS = {
  1: {
    id: 'guides',
    label: 'Guides',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
];

const AMBASSADOR_DOCUMENTATION_LINKS: NavItem[] = [
  {
    id: '1',
    label: 'Basic Details',
    description: 'Basic details about the ambassador program',
    href: ROUTES.DOCUMENTATION.AMBASSADORS.BASIC_DETAILS,
  },
  {
    id: '2',
    label: 'Example Tasks',
    description: 'Example tasks for what can be done to progress',
    href: ROUTES.DOCUMENTATION.AMBASSADORS.EXAMPLE_TASKS,
  },
  {
    id: '3',
    label: 'Level Benefits',
    description: 'Benefits of reaching each level',
    href: ROUTES.DOCUMENTATION.AMBASSADORS.LEVEL_BENEFITS,
  },
  {
    id: '4',
    label: 'Level Progression',
    description: 'Requirements and responsibilities for each level',
    href: ROUTES.DOCUMENTATION.AMBASSADORS.LEVEL_PROGRESSION,
  },
  {
    id: '5',
    label: 'Additional Roles',
    description: 'Additional roles outside the ambassador program',
    href: ROUTES.DOCUMENTATION.AMBASSADORS.ADDITIONAL_ROLES,
  },
];

export const AmbassadorOverview = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          The Ambassador Program
        </h1>
        <p className="mt-10">
          This documentation is designed to help you navigate the Ambassador
          program. It covers how to qualify, ranking up, and benefits of each
          level.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <ListLinks listLinks={AMBASSADOR_DOCUMENTATION_LINKS} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
