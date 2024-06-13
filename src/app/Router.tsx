import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { ROUTES } from '@/config/routes';
import {
  AccountDetails,
  AddSymphonyToWallet,
  AllBlocks,
  AllTokens,
  AllTransactions,
  BlockDetails,
  CreateWallet,
  DocumentationOverview,
  ExplorerMain,
  Home,
  PasswordRecovery,
  SignIn,
  SignUp,
  TransactionDetails,
  UserOverview,
  Whitepaper,
} from '@/pages';

const MainLayout = lazy(() => import('../layouts/MainLayout/MainLayout'));
const ExplorerLayout = lazy(
  () => import('../layouts/ExplorerLayout/ExplorerLayout'),
);

export const AppRouter: React.FC = (): React.ReactElement | null =>
  useRoutes([
    {
      path: ROUTES.HOME,
      element: <MainLayout />,
      children: [
        {
          path: ROUTES.HOME,
          element: <Home />,
        },
        {
          path: ROUTES.WHITEPAPER,
          element: <Whitepaper />,
        },
        {
          path: ROUTES.DOCUMENTATION.ROOT,
          element: <DocumentationOverview />,
        },
        {
          path: ROUTES.DOCUMENTATION.USERS.ROOT,
          element: <UserOverview />,
        },
        {
          path: ROUTES.DOCUMENTATION.USERS.CREATE_WALLET,
          element: <CreateWallet />,
        },
        {
          path: ROUTES.DOCUMENTATION.USERS.ADD_SYMPHONY_TO_WALLET,
          element: <AddSymphonyToWallet />,
        },
      ],
    },
    {
      path: ROUTES.EXPLORER.ROOT,
      element: <ExplorerLayout />,
      children: [
        {
          path: ROUTES.EXPLORER.ROOT,
          element: <ExplorerMain />,
        },
        {
          path: `${ROUTES.EXPLORER.ACCOUNT}/:id`,
          element: <AccountDetails />,
        },
        {
          path: ROUTES.EXPLORER.TOKENS,
          element: <AllTokens />,
        },
        {
          path: ROUTES.EXPLORER.BLOCKS,
          element: <AllBlocks />,
        },
        {
          path: ROUTES.EXPLORER.TRANSACTIONS,
          element: <AllTransactions />,
        },
        {
          path: `${ROUTES.EXPLORER.TRANSACTIONS}/:id`,
          element: <TransactionDetails />,
        },
        {
          path: `${ROUTES.EXPLORER.BLOCKS}/:id`,
          element: <BlockDetails />,
        },
        {
          path: ROUTES.EXPLORER.SIGN_IN,
          element: <SignIn />,
        },
        {
          path: ROUTES.EXPLORER.SIGN_UP,
          element: <SignUp />,
        },
        {
          path: ROUTES.EXPLORER.PASSWORD_RECOVERY,
          element: <PasswordRecovery />,
        },
      ],
    },
    // Add Error component
    { path: '404', element: '' },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
