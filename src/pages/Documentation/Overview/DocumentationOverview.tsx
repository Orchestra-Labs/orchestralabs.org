import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { ROUTES } from '@/config/routes';
import { NavItem } from '@/types';

const HEADINGS = {
  1: {
    id: 'about-symphony',
    label: 'About Symphony',
  },
  2: {
    id: 'user_documentation',
    label: 'User Information',
  },
  3: {
    id: 'development-modules',
    label: 'Development Modules',
  },
  4: {
    id: 'symphony-stack',
    label: 'Symphony Stack',
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
];

const SYMPHONY_INFO_LINKS: NavItem[] = [
  {
    id: '1',
    label: 'The Stablecoin Trilemma',
    description: 'The challenges of stablecoin design',
    href: ROUTES.DOCUMENTATION.THE_STABLECOIN_TRILEMMA,
  },
  {
    id: '2',
    label: 'Why Decentralized RWAs',
    description: 'Why Symphony was made',
    href: ROUTES.DOCUMENTATION.WHY_DECENTRALIZED_RWAS,
  },
  {
    id: '3',
    label: "Symphony's Approach",
    description: 'How Symphony solves the stablecoin trilemma',
    href: ROUTES.DOCUMENTATION.THE_SYMPHONY_APPROACH,
  },
  {
    id: '4',
    label: "Symphony's Impact",
    description: "How Symphony's introduction affects the market",
    href: ROUTES.DOCUMENTATION.THE_SYMPHONY_APPROACH,
  },
  {
    id: '5',
    label: 'Size of the Opportunity',
    description: "Market sizes of Symphony's areas of impact",
    href: ROUTES.DOCUMENTATION.THE_SYMPHONY_APPROACH,
  },
];

const USER_DOCUMENTATION_LINKS: NavItem[] = [
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
];

const PLACEHOLDER_LINKS: NavItem[] = [];

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
          infrastructure. It can peg to any assets, allowing global access to
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
          <ListLinks listLinks={SYMPHONY_INFO_LINKS} />
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
        </div>
        <div id={HEADINGS[4].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[4].label}
          </h2>
          <ListLinks listLinks={PLACEHOLDER_LINKS} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
