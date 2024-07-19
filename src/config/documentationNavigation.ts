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
    label: 'The Stablecoin Trilemma',
    href: ROUTES.DOCUMENTATION.THE_STABLECOIN_TRILEMMA,
  },
  {
    id: '3',
    label: 'Why Decentralized RWAS',
    href: ROUTES.DOCUMENTATION.WHY_DECENTRALIZED_RWAS,
  },
  {
    id: '4',
    label: "Symphony's Approach",
    href: ROUTES.DOCUMENTATION.THE_SYMPHONY_APPROACH,
  },
  {
    id: '5',
    label: "Symphony's Impact",
    href: ROUTES.DOCUMENTATION.SYMPHONY_IMPACT,
  },
  {
    id: '6',
    label: 'Size of the Opportunity',
    href: ROUTES.DOCUMENTATION.SIZE_OF_OPPORTUNITY,
  },
  {
    id: '7',
    label: 'Tokenomics',
    href: ROUTES.DOCUMENTATION.TOKENOMICS,
  },
  {
    id: '8',
    label: 'Roadmap',
    href: ROUTES.DOCUMENTATION.ROADMAP,
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
        label: 'Add Symphony to A Wallet',
        href: `${ROUTES.DOCUMENTATION.USERS.ADD_SYMPHONY_TO_WALLET}`,
      },
    ],
  },
  {
    id: '10',
    label: 'Developer Information',
    href: `${ROUTES.DOCUMENTATION.DEVELOPERS.ROOT}`,
    subList: [],
  },
];
