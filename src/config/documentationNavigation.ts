import { NavItem } from '@/types';
import { ROUTES } from './routes';

export const DOCUMENTATION_NAVIGATION: NavItem[] = [
  {
    id: 1,
    label: 'Overview',
    href: ROUTES.DOCUMENTATION.ROOT,
  },
  {
    id: 2,
    label: 'Users',
    href: `${ROUTES.DOCUMENTATION.USERS.ROOT}`,
    subList: [
      {
        id: 1,
        label: 'Create A Wallet',
        href: `${ROUTES.DOCUMENTATION.USERS.CREATE_WALLET}`,
      },
      {
        id: 2,
        label: 'Add Symphony to A Wallet',
        href: `${ROUTES.DOCUMENTATION.USERS.ADD_SYMPHONY_TO_WALLET}`,
      },
    ],
  },
];
