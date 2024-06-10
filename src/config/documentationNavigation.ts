import { DocumentationNavigationProps } from '@/types';
import { ROUTES } from './routes';

export const DOCUMENTATION_NAVIGATION: DocumentationNavigationProps[] = [
  {
    id: 1,
    label: 'Overview',
    link: ROUTES.DOCUMENTATION.ROOT,
  },
  {
    id: 2,
    label: 'Users',
    link: `${ROUTES.DOCUMENTATION.USERS.ROOT}`,
    subLinks: [
      {
        id: 1,
        label: 'Getting Started',
        link: `${ROUTES.DOCUMENTATION.USERS.GETTING_STARTED}`,
      },
      {
        id: 2,
        label: 'Topic 2',
        link: `${ROUTES.DOCUMENTATION.ROOT}/#main-1-2`,
      },
    ],
  },
  {
    id: 3,
    label: 'Main topic 2',
    link: `${ROUTES.DOCUMENTATION.ROOT}/#main-2`,
    subLinks: [
      {
        id: 1,
        label: 'Topic 1',
        link: `${ROUTES.DOCUMENTATION.ROOT}/#main-2-1`,
      },
      {
        id: 2,
        label: 'Topic 2',
        link: `${ROUTES.DOCUMENTATION.ROOT}/#main-2-2`,
      },
    ],
  },
  {
    id: 4,
    label: 'Main topic 3',
    link: `${ROUTES.DOCUMENTATION.ROOT}/#main-3`,
    subLinks: [
      {
        id: 1,
        label: 'Topic 1',
        link: `${ROUTES.DOCUMENTATION.ROOT}/#main-3-1`,
      },
      {
        id: 2,
        label: 'Topic 2',
        link: `${ROUTES.DOCUMENTATION.ROOT}/#main-3-2`,
      },
    ],
  },
];
