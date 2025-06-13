import { NavItem } from '@/types';
import { ROUTES } from './routes';

export const DOCUMENTATION_NAVIGATION: Record<string, NavItem> = {
  OVERVIEW: {
    id: '1',
    label: 'Overview',
    href: ROUTES.DOCUMENTATION.ROOT,
  },
  ABOUT_SYMPHONY: {
    id: '2',
    label: 'About Symphony',
    href: `${ROUTES.DOCUMENTATION.ABOUT.ROOT}`,
    subList: [
      {
        id: '1',
        label: 'The Stablecoin Trilemma',
        description: 'The challenges of stablecoin design',
        href: ROUTES.DOCUMENTATION.ABOUT.THE_STABLECOIN_TRILEMMA,
      },
      {
        id: '2',
        label: 'Why Decentralized RWAS',
        description: 'Why Symphony was made',
        href: ROUTES.DOCUMENTATION.ABOUT.WHY_DECENTRALIZED_RWAS,
      },
      {
        id: '3',
        label: "Symphony's Approach",
        description: 'How Symphony solves the stablecoin trilemma',
        href: ROUTES.DOCUMENTATION.ABOUT.THE_SYMPHONY_APPROACH,
      },
      {
        id: '4',
        label: "Symphony's Impact",
        description: "How Symphony's introduction affects the market",
        href: ROUTES.DOCUMENTATION.ABOUT.SYMPHONY_IMPACT,
      },
      {
        id: '5',
        label: 'Size of the Opportunity',
        description: "Market sizes of Symphony's areas of impact",
        href: ROUTES.DOCUMENTATION.ABOUT.SIZE_OF_OPPORTUNITY,
      },
      {
        id: '6',
        label: 'Tokenomics',
        description: 'Initial distribution of Melody coins on Symphony',
        href: ROUTES.DOCUMENTATION.ABOUT.TOKENOMICS,
      },
      {
        id: '7',
        label: 'Roadmap',
        description: 'Current and upcoming projects for Symphony developers',
        href: ROUTES.DOCUMENTATION.ABOUT.ROADMAP,
      },
    ],
  },
  USER_INFORMATION: {
    id: '3',
    label: 'User Information',
    href: `${ROUTES.DOCUMENTATION.USERS.ROOT}`,
    subList: [
      {
        // TODO: route to page and update create wallet page
        id: '1',
        label: 'Create A Wallet',
        description: 'Create a wallet to interact with Symphony',
        href: `https://chromewebstore.google.com/detail/aria-wallet/cgghllcclkhfpkjhgomhehlebgphifbm`,
      },
      // TODO: update this page too
      {
        id: '2',
        label: 'Add Symphony To A Wallet',
        description: 'Add Symphony to non-native wallets',
        href: `${ROUTES.DOCUMENTATION.USERS.ADD_SYMPHONY_TO_WALLET}`,
      },
      {
        id: '3',
        label: 'Using IBC',
        description: 'Test Symphony before the launch',
        href: ROUTES.DOCUMENTATION.USERS.USING_IBC,
      },
      {
        id: '4',
        label: 'The Incentivized Testnet',
        description: 'Test Symphony before the launch',
        href: `${ROUTES.DOCUMENTATION.USERS.INCENTIVIZED_TESTNET}`,
      },
      {
        id: '5',
        label: 'Qualifying For Airdrops',
        description: "How to qualify for Symphony's first two airdrops",
        href: `${ROUTES.DOCUMENTATION.USERS.QUALIFYING_USERS}`,
      },
      {
        id: '6',
        label: "Symphony's Soundwave",
        description: 'How to get and benefits of our Soundwave NFT',
        href: `${ROUTES.DOCUMENTATION.USERS.SOUNDWAVE_NFT}`,
      },
    ],
  },
  AMBASSADOR_PROGRAM: {
    id: '4',
    label: 'Ambassador Program',
    href: ROUTES.DOCUMENTATION.AMBASSADORS.ROOT,
    subList: [
      {
        id: '1',
        label: 'Basic Details',
        description: 'Basic details about the ambassador program',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.BASIC_DETAILS}`,
      },
      {
        id: '2',
        label: 'Example Tasks',
        description: 'Example tasks for what can be done to progress',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.EXAMPLE_TASKS}`,
      },
      {
        id: '3',
        label: 'Level Benefits',
        description: 'Benefits of reaching each level',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.LEVEL_BENEFITS}`,
      },
      {
        id: '4',
        label: 'Level Progression',
        description: 'Requirements and responsibilities for each level',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.LEVEL_PROGRESSION}`,
      },
      {
        id: '5',
        label: 'Additional Roles',
        description: 'Additional roles outside the ambassador program',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.ADDITIONAL_ROLES}`,
      },
      {
        id: '6',
        label: 'Post Guide',
        description:
          'How to improve your posts on X for the ambassador program',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.TWEET_GUIDE}`,
      },
      {
        id: '7',
        label: 'Meme Guide',
        description: 'How to improve your memes for the ambassador program',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.MEME_GUIDE}`,
      },
      {
        id: '8',
        label: 'Community Pages',
        description: 'For those in our community that speak the same language',
        href: `${ROUTES.DOCUMENTATION.AMBASSADORS.COMMUNITY_PAGES}`,
      },
    ],
  },
  DEVELOPER_INFORMATION: {
    id: '5',
    label: 'Developer Information',
    href: `${ROUTES.DOCUMENTATION.DEVELOPERS.ROOT}`,
    subList: [
      {
        id: '1',
        label: 'Explorers',
        description: 'View activity in a chain explorer',
        href: `${ROUTES.DOCUMENTATION.DEVELOPERS.EXPLORERS}`,
      },
      {
        id: '2',
        label: 'Validators',
        description: 'How to start a validator',
        href: `${ROUTES.DOCUMENTATION.DEVELOPERS.VALIDATORS}`,
      },
      {
        id: '3',
        label: 'Foundation Delegation',
        description: 'Foundation Delegation program information',
        href: `${ROUTES.DOCUMENTATION.DEVELOPERS.FOUNDATION_DELEGATION}`,
      },
      {
        id: '4',
        label: 'Contributing',
        description: 'How to contribute as a developer',
        href: `${ROUTES.DOCUMENTATION.DEVELOPERS.CONTRIBUTING}`,
      },
      {
        id: '5',
        label: 'API Guide',
        description: 'API Guide for Symphony Blockchain',
        href: `${ROUTES.DOCUMENTATION.DEVELOPERS.API_GUIDE}`,
      },
      {
        id: '6',
        label: 'CICD Guide',
        description: 'Getting CICD up and running',
        href: `${ROUTES.DOCUMENTATION.DEVELOPERS.CICD_GUIDE}`,
      },
      {
        id: '7',
        label: 'WalletConnect',
        description: 'WalletConnect function diagram',
        href: `${ROUTES.DOCUMENTATION.DEVELOPERS.WALLETCONNECT}`,
      },
    ],
  },
  STARTUP_INFORMATION: {
    id: '6',
    label: 'Startup Information',
    href: `${ROUTES.DOCUMENTATION.STARTUPS.ROOT}`,
    subList: [
      {
        id: '1',
        label: 'Inception',
        description: 'Forming and validating your idea',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.INCEPTION}`,
      },
      {
        id: '2',
        label: 'Development',
        description: 'Building and testing the product',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.DEVELOPMENT}`,
      },
      {
        id: '3',
        label: 'Expansion',
        description: 'Launching and growing your business',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.EXPANSION}`,
      },
      {
        id: '4',
        label: 'Stabilization',
        description: 'What to do as an established business after growth',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.STABILIZATION}`,
      },
      {
        id: '5',
        label: 'Advisors',
        description: 'Those with knowledge to guide you on your path',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.ADVISORS}`,
      },
      {
        id: '6',
        label: 'Fundraising',
        description: 'Sources of investment to accelerate your business',
        href: `${ROUTES.DOCUMENTATION.STARTUPS.FUNDRAISING}`,
      },
    ],
  },
};
