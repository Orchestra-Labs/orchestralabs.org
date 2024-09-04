import { NavItem } from '@/types';
import { ROUTES } from './routes';

export const DOCUMENTATION_NAVIGATION: NavItem[] = [
  {
    id: '1',
    label: 'Overview',
    href: ROUTES.DOCUMENTATION.ROOT,
  },
  {
    id: '2',
    label: 'About Symphony',
    href: `${ROUTES.DOCUMENTATION.ABOUT.ROOT}`,
    subList: [
      {
        id: '1',
        label: 'The Stablecoin Trilemma',
        href: ROUTES.DOCUMENTATION.ABOUT.THE_STABLECOIN_TRILEMMA,
      },
      {
        id: '2',
        label: 'Why Decentralized RWAS',
        href: ROUTES.DOCUMENTATION.ABOUT.WHY_DECENTRALIZED_RWAS,
      },
      {
        id: '3',
        label: "Symphony's Approach",
        href: ROUTES.DOCUMENTATION.ABOUT.THE_SYMPHONY_APPROACH,
      },
      {
        id: '4',
        label: "Symphony's Impact",
        href: ROUTES.DOCUMENTATION.ABOUT.SYMPHONY_IMPACT,
      },
      {
        id: '5',
        label: 'Size of the Opportunity',
        href: ROUTES.DOCUMENTATION.ABOUT.SIZE_OF_OPPORTUNITY,
      },
      {
        id: '6',
        label: 'Tokenomics',
        href: ROUTES.DOCUMENTATION.ABOUT.TOKENOMICS,
      },
      {
        id: '7',
        label: 'Roadmap',
        href: ROUTES.DOCUMENTATION.ABOUT.ROADMAP,
      },
    ],
  },
  {
    id: '9',
    label: 'User Information',
    href: `${ROUTES.DOCUMENTATION.USERS.ROOT}`,
    subList: [
      {
        id: '1',
        label: 'Create A Wallet',
        href: `${ROUTES.DOCUMENTATION.USERS.CREATE_WALLET}`,
      },
      {
        id: '2',
        label: 'Add Symphony To A Wallet',
        href: `${ROUTES.DOCUMENTATION.USERS.ADD_SYMPHONY_TO_WALLET}`,
      },
      {
        id: '3',
        label: 'Using IBC',
        href: ROUTES.DOCUMENTATION.USERS.USING_IBC,
      },
      {
        id: '4',
        label: 'The Incentivized Testnet',
        href: `${ROUTES.DOCUMENTATION.USERS.INCENTIVIZED_TESTNET}`,
      },
      {
        id: '5',
        label: 'Qualifying For Airdrops',
        href: `${ROUTES.DOCUMENTATION.USERS.QUALIFYING_USERS}`,
      },
      {
        id: '6',
        label: "Symphony's Soundwave",
        href: `${ROUTES.DOCUMENTATION.USERS.SOUNDWAVE_NFT}`,
      },
    ],
  },
  {
    id: '10',
    label: 'Ambassador Program',
    href: ROUTES.DOCUMENTATION.AMBASSADORS.ROOT,
    subList: [
      {
        id: '1',
        label: 'Basic Details',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.BASIC_DETAILS}`,
      },
      {
        id: '2',
        label: 'Example Tasks',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.EXAMPLE_TASKS}`,
      },
      {
        id: '3',
        label: 'Level Benefits',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.LEVEL_BENEFITS}`,
      },
      {
        id: '4',
        label: 'Level Progression',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.LEVEL_PROGRESSION}`,
      },
      {
        id: '5',
        label: 'Additional Roles',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.ADDITIONAL_ROLES}`,
      },
    ],
  },
  {
    id: '11',
    label: 'Developer Information',
    href: `${ROUTES.DOCUMENTATION.DEVELOPERS.ROOT}`,
    subList: [
      {
        id: '1',
        label: 'Explorers',
        href: `${ROUTES.DOCUMENTATION.DEVELOPERS.EXPLORERS}`,
      },
      {
        id: '2',
        label: 'Validators',
        href: `${ROUTES.DOCUMENTATION.DEVELOPERS.VALIDATORS}`,
      },
      {
        id: '3',
        label: 'Genesis Delegation',
        href: `${ROUTES.DOCUMENTATION.DEVELOPERS.GENESIS_DELEGATION}`,
      },
    ],
  },
  {
    id: '12',
    label: 'Startup Information',
    href: `${ROUTES.DOCUMENTATION.STARTUPS.ROOT}`,
    subList: [
      {
        id: '1',
        label: 'Inception',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.INCEPTION}`,
      },
      {
        id: '2',
        label: 'Development',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.DEVELOPMENT}`,
      },
      {
        id: '3',
        label: 'Expansion',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.EXPANSION}`,
      },
      {
        id: '4',
        label: 'Stabilization',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.STABILIZATION}`,
      },
      {
        id: '5',
        label: 'Advisors',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.ADVISORS}`,
      },
      {
        id: '6',
        label: 'Fundraising',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.FUNDRAISING}`,
      },
    ],
  },
];
