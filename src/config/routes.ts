const path = (base: string, ...parts: string[]) => [base, ...parts].join('/');

const DOCUMENTATION = '/documentation';
const ABOUT = path(DOCUMENTATION, 'about');
const AMBASSADORS = path(DOCUMENTATION, 'ambassadors');
const USERS = path(DOCUMENTATION, 'users');
const DEVELOPERS = path(DOCUMENTATION, 'developers');
const STARTUPS = path(DOCUMENTATION, 'startups');
const EXPLORER = '/explorer';

export const ROUTES = {
  HOME: '/',
  WHITEPAPER: '/whitepaper',
  PRIVACY_POLICY: '/privacy-policy',
  EXPLORER: {
    ROOT: EXPLORER,
    ACCOUNT: path(EXPLORER, 'account'),
    TOKENS: path(EXPLORER, 'tokens'),
    BLOCKS: path(EXPLORER, 'blocks'),
    TRANSACTIONS: path(EXPLORER, 'transactions'),
    SIGN_IN: path(EXPLORER, 'sign-in'),
    SIGN_UP: path(EXPLORER, 'sign-up'),
    PASSWORD_RECOVERY: path(EXPLORER, 'password-recovery'),
  },
  DOCUMENTATION: {
    ROOT: DOCUMENTATION,
    ABOUT: {
      ROOT: ABOUT,
      WHY_DECENTRALIZED_RWAS: path(ABOUT, 'why-decentralized-rwas'),
      THE_STABLECOIN_TRILEMMA: path(ABOUT, 'the-stablecoin-trilemma'),
      THE_SYMPHONY_APPROACH: path(ABOUT, 'approach'),
      SYMPHONY_IMPACT: path(ABOUT, 'impact'),
      SIZE_OF_OPPORTUNITY: path(ABOUT, 'size-of-opportunity'),
      TOKENOMICS: path(ABOUT, 'tokenomics'),
      ROADMAP: path(ABOUT, 'roadmap'),
    },
    AMBASSADORS: {
      ROOT: AMBASSADORS,
      BASIC_DETAILS: path(AMBASSADORS, 'basic-details'),
      EXAMPLE_TASKS: path(AMBASSADORS, 'example-tasks'),
      LEVEL_BENEFITS: path(AMBASSADORS, 'level-benefits'),
      LEVEL_PROGRESSION: path(AMBASSADORS, 'level-progression'),
      ADDITIONAL_ROLES: path(AMBASSADORS, 'additional-roles'),
      TWEET_GUIDE: path(AMBASSADORS, 'tweet-guide'),
      MEME_GUIDE: path(AMBASSADORS, 'meme-guide'),
      COMMUNITY_PAGES: path(AMBASSADORS, 'community-pages'),
    },
    USERS: {
      ROOT: USERS,
      CREATE_WALLET: path(USERS, 'create-wallet'),
      ADD_SYMPHONY_TO_WALLET: path(USERS, 'add-symphony-to-wallet'),
      USING_IBC: path(USERS, 'using-ibc'),
      INCENTIVIZED_TESTNET: path(USERS, 'incentivized-testnet'),
      QUALIFYING_USERS: path(USERS, 'qualifying-users'),
      SOUNDWAVE_NFT: path(USERS, 'soundwave-nft'),
    },
    DEVELOPERS: {
      ROOT: DEVELOPERS,
      EXPLORERS: path(DEVELOPERS, 'explorers'),
      VALIDATORS: path(DEVELOPERS, 'validators'),
      FOUNDATION_DELEGATION: path(DEVELOPERS, 'foundation-delegation'),
      CICD_GUIDE: path(DEVELOPERS, 'cicd-guide'),
      CONTRIBUTING: path(DEVELOPERS, 'contributing'),
      API_GUIDE: path(DEVELOPERS, 'api-guide'),
      WALLETCONNECT: path(DEVELOPERS, 'walletconnect'),
    },
    STARTUPS: {
      ROOT: STARTUPS,
      INCEPTION: path(STARTUPS, 'inception'),
      DEVELOPMENT: path(STARTUPS, 'development'),
      EXPANSION: path(STARTUPS, 'expansion'),
      STABILIZATION: path(STARTUPS, 'stabilization'),
      ADVISORS: path(STARTUPS, 'advisors'),
      FUNDRAISING: path(STARTUPS, 'fundraising'),
      CASE_STUDIES: path(STARTUPS, 'case-studies'),
    },
  },
};
