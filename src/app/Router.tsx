import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { ROUTES } from '@/config/';
import {
  AboutSymphonyOverview,
  AccountDetails,
  AdditionaRoles,
  AddSymphonyToWallet,
  AdvancedIBC,
  Advisors,
  AllBlocks,
  AllTokens,
  AllTransactions,
  AmbassadorOverview,
  API_Guide,
  BasicDetails,
  BlockDetails,
  CICD_Guide,
  CommunityPages,
  Contributing,
  CreateWallet,
  DeveloperOverview,
  Development,
  DocumentationOverview,
  ExampleTasks,
  Expansion,
  ExplorerMain,
  Explorers,
  FoundationDelegation,
  Fundraising,
  Home,
  IncentivizedTestnet,
  Inception,
  LevelBenefits,
  LevelProgression,
  MemeGuide,
  PasswordRecovery,
  PrivacyPolicy,
  QualifyingUsers,
  Roadmap,
  SignIn,
  SignUp,
  SizeOfOpportunity,
  SoundwaveNFT,
  Stabilization,
  StartupOverview,
  SymphonyImpact,
  TheStablecoinTrilemma,
  TheSymphonyApproach,
  Tokenomics,
  TransactionDetails,
  TweetGuide,
  UserOverview,
  Validators,
  WalletConnect,
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
          path: ROUTES.PRIVACY_POLICY,
          element: <PrivacyPolicy />,
        },
        {
          path: ROUTES.DOCUMENTATION.ROOT,
          element: <DocumentationOverview />,
        },
        // About Pages
        {
          path: ROUTES.DOCUMENTATION.ABOUT.ROOT,
          element: <AboutSymphonyOverview />,
        },
        {
          path: ROUTES.DOCUMENTATION.ABOUT.WHY_DECENTRALIZED_RWAS,
          element: <WhyDecentralizedRWAs />,
        },
        {
          path: ROUTES.DOCUMENTATION.ABOUT.THE_STABLECOIN_TRILEMMA,
          element: <TheStablecoinTrilemma />,
        },
        {
          path: ROUTES.DOCUMENTATION.ABOUT.THE_SYMPHONY_APPROACH,
          element: <TheSymphonyApproach />,
        },
        {
          path: ROUTES.DOCUMENTATION.ABOUT.SYMPHONY_IMPACT,
          element: <SymphonyImpact />,
        },
        {
          path: ROUTES.DOCUMENTATION.ABOUT.SIZE_OF_OPPORTUNITY,
          element: <SizeOfOpportunity />,
        },
        {
          path: ROUTES.DOCUMENTATION.ABOUT.TOKENOMICS,
          element: <Tokenomics />,
        },
        {
          path: ROUTES.DOCUMENTATION.ABOUT.ROADMAP,
          element: <Roadmap />,
        },
        // User Pages
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
          path: ROUTES.DOCUMENTATION.USERS.USING_IBC,
          element: <AdvancedIBC />,
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
          path: ROUTES.DOCUMENTATION.USERS.SOUNDWAVE_NFT,
          element: <SoundwaveNFT />,
        },
        // Ambassador Pages
        {
          path: ROUTES.DOCUMENTATION.AMBASSADORS.ROOT,
          element: <AmbassadorOverview />,
        },
        {
          path: ROUTES.DOCUMENTATION.AMBASSADORS.BASIC_DETAILS,
          element: <BasicDetails />,
        },
        {
          path: ROUTES.DOCUMENTATION.AMBASSADORS.EXAMPLE_TASKS,
          element: <ExampleTasks />,
        },
        {
          path: ROUTES.DOCUMENTATION.AMBASSADORS.LEVEL_BENEFITS,
          element: <LevelBenefits />,
        },
        {
          path: ROUTES.DOCUMENTATION.AMBASSADORS.LEVEL_PROGRESSION,
          element: <LevelProgression />,
        },
        {
          path: ROUTES.DOCUMENTATION.AMBASSADORS.ADDITIONAL_ROLES,
          element: <AdditionaRoles />,
        },
        {
          path: ROUTES.DOCUMENTATION.AMBASSADORS.TWEET_GUIDE,
          element: <TweetGuide />,
        },
        {
          path: ROUTES.DOCUMENTATION.AMBASSADORS.MEME_GUIDE,
          element: <MemeGuide />,
        },
        {
          path: ROUTES.DOCUMENTATION.AMBASSADORS.COMMUNITY_PAGES,
          element: <CommunityPages />,
        },
        // Developer Pages
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
          path: ROUTES.DOCUMENTATION.DEVELOPERS.FOUNDATION_DELEGATION,
          element: <FoundationDelegation />,
        },
        {
          path: ROUTES.DOCUMENTATION.DEVELOPERS.CONTRIBUTING,
          element: <Contributing />,
        },
        {
          path: ROUTES.DOCUMENTATION.DEVELOPERS.API_GUIDE,
          element: <API_Guide />,
        },
        {
          path: ROUTES.DOCUMENTATION.DEVELOPERS.CICD_GUIDE,
          element: <CICD_Guide />,
        },
        {
          path: ROUTES.DOCUMENTATION.DEVELOPERS.WALLETCONNECT,
          element: <WalletConnect />,
        },
        // Startup Pages
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
