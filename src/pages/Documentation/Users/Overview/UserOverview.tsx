import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import { DOCUMENTATION_NAVIGATION } from '@/config/';

const HEADINGS = {
  1: {
    id: 'guides',
    label: 'Guides',
  },
  2: {
    id: 'ecosystem',
    label: 'Ecosystem',
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

const USER_DOCUMENTATION_LINKS =
  DOCUMENTATION_NAVIGATION.USER_INFORMATION.subList || [];

const ECOSYSTEM: NavItem[] = [
  {
    id: '1',
    label: 'Keplr Wallet',
    target: '_blank',
    href: 'https://www.keplr.app/download',
    description: 'The Seamless Interchain Experience',
  },
];

export const UserOverview = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          User Documentation
        </h1>
        <p className="mt-10">
          This documentation is designed to help you connect with Symphony. It
          covers how to connect to the chain, events we're running, and how to
          qualify for those events.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <ListLinks listLinks={USER_DOCUMENTATION_LINKS} />
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <ListLinks listLinks={ECOSYSTEM} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
