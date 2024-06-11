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
        label: 'Topic 2',
        href: `${ROUTES.DOCUMENTATION.ROOT}/#main-1-2`,
      },
    ],
  },
  {
    id: 3,
    label: 'Main topic 2',
    href: `${ROUTES.DOCUMENTATION.ROOT}/#main-2`,
    subList: [
      {
        id: 1,
        label: 'Topic 1',
        href: `${ROUTES.DOCUMENTATION.ROOT}/#main-2-1`,
      },
      {
        id: 2,
        label: 'Topic 2',
        href: `${ROUTES.DOCUMENTATION.ROOT}/#main-2-2`,
      },
    ],
  },
  {
    id: 4,
    label: 'Main topic 3',
    href: `${ROUTES.DOCUMENTATION.ROOT}/#main-3`,
    subList: [
      {
        id: 1,
        label: 'Topic 1',
        href: `${ROUTES.DOCUMENTATION.ROOT}/#main-3-1`,
      },
      {
        id: 2,
        label: 'Topic 2',
        href: `${ROUTES.DOCUMENTATION.ROOT}/#main-3-2`,
      },
    ],
  },
];
