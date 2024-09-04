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
    label: 'Create A Wallet',
    description: 'Create a wallet to interact with Symphony',
    href: ROUTES.DOCUMENTATION.USERS.CREATE_WALLET,
  },
  {
    id: '2',
    label: 'Add Symphony To Wallet',
    description: 'Add Symphony to non-native wallets',
    href: ROUTES.DOCUMENTATION.USERS.ADD_SYMPHONY_TO_WALLET,
  },
  {
    id: '3',
    label: 'The Incentivized Testnet',
    description: 'Test Symphony before the launch',
    href: ROUTES.DOCUMENTATION.USERS.ADD_SYMPHONY_TO_WALLET,
  },
  {
    id: '4',
    label: 'Qualifying For Airdrops',
    description:
      "How to qualify for airdrops with Symphony's incentivized testnet",
    href: ROUTES.DOCUMENTATION.USERS.QUALIFYING_USERS,
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
