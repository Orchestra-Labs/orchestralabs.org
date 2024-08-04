import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { ROUTES } from '@/config/routes';
import {
  AccountDetails,
  AddSymphonyToWallet,
  Advisors,
  AllBlocks,
  AllTokens,
  AllTransactions,
  BlockDetails,
  CaseStudies,
  CreateWallet,
  DeveloperOverview,
  Development,
  DocumentationOverview,
  Expansion,
  ExplorerMain,
  Explorers,
  Fundraising,
  GenesisDelegation,
  Home,
  IncentivizedTestnet,
  Inception,
  PasswordRecovery,
  QualifyingUsers,
  Roadmap,
  SignIn,
  SignUp,
  SizeOfOpportunity,
  Stabilization,
  StartupOverview,
  SymphonyImpact,
  TheStablecoinTrilemma,
  TheSymphonyApproach,
  Tokenomics,
  TransactionDetails,
  UserOverview,
  Validators,
  Whitepaper,
  WhyDecentralizedRWAs,
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
          path: ROUTES.DOCUMENTATION.WHY_DECENTRALIZED_RWAS,
          element: <WhyDecentralizedRWAs />,
        },
        {
          path: ROUTES.DOCUMENTATION.THE_STABLECOIN_TRILEMMA,
          element: <TheStablecoinTrilemma />,
        },
        {
          path: ROUTES.DOCUMENTATION.THE_SYMPHONY_APPROACH,
          element: <TheSymphonyApproach />,
        },
        {
          path: ROUTES.DOCUMENTATION.SYMPHONY_IMPACT,
          element: <SymphonyImpact />,
        },
        {
          path: ROUTES.DOCUMENTATION.SIZE_OF_OPPORTUNITY,
          element: <SizeOfOpportunity />,
        },
        {
          path: ROUTES.DOCUMENTATION.TOKENOMICS,
          element: <Tokenomics />,
        },
        {
          path: ROUTES.DOCUMENTATION.ROADMAP,
          element: <Roadmap />,
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
        {
          path: ROUTES.DOCUMENTATION.USERS.INCENTIVIZED_TESTNET,
          element: <IncentivizedTestnet />,
        },
        {
          path: ROUTES.DOCUMENTATION.USERS.QUALIFYING_USERS,
          element: <QualifyingUsers />,
        },
        {
          path: ROUTES.DOCUMENTATION.DEVELOPERS.ROOT,
          element: <DeveloperOverview />,
        },
        {
          path: ROUTES.DOCUMENTATION.DEVELOPERS.EXPLORERS,
          element: <Explorers />,
        },
        {
          path: ROUTES.DOCUMENTATION.DEVELOPERS.VALIDATORS,
          element: <Validators />,
        },
        {
          path: ROUTES.DOCUMENTATION.DEVELOPERS.GENESIS_DELEGATION,
          element: <GenesisDelegation />,
        },
        {
          path: ROUTES.DOCUMENTATION.STARTUPS.ROOT,
          element: <StartupOverview />,
        },
        {
          path: ROUTES.DOCUMENTATION.STARTUPS.INCEPTION,
          element: <Inception />,
        },
        {
          path: ROUTES.DOCUMENTATION.STARTUPS.DEVELOPMENT,
          element: <Development />,
        },
        {
          path: ROUTES.DOCUMENTATION.STARTUPS.EXPANSION,
          element: <Expansion />,
        },
        {
          path: ROUTES.DOCUMENTATION.STARTUPS.STABILIZATION,
          element: <Stabilization />,
        },
        {
          path: ROUTES.DOCUMENTATION.STARTUPS.ADVISORS,
          element: <Advisors />,
        },
        {
          path: ROUTES.DOCUMENTATION.STARTUPS.FUNDRAISING,
          element: <Fundraising />,
        },
        {
          path: ROUTES.DOCUMENTATION.STARTUPS.CASE_STUDIES,
          element: <CaseStudies />,
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
