const EXPLORER_ROOT = '/explorer';
const DOCUMENTATION_ROOT = '/documentation';
const USER_EXTENSION = '/users';

export const ROUTES = {
  HOME: '/',
  WHITEPAPER: '/whitepaper',
  EXPLORER: {
    ROOT: EXPLORER_ROOT,
    ACCOUNT: `${EXPLORER_ROOT}/account`,
    TOKENS: `${EXPLORER_ROOT}/tokens`,
    BLOCKS: `${EXPLORER_ROOT}/blocks`,
    TRANSACTIONS: `${EXPLORER_ROOT}/transactions`,
    SIGN_IN: `${EXPLORER_ROOT}/sign-in`,
    SIGN_UP: `${EXPLORER_ROOT}/sign-up`,
    PASSWORD_RECOVERY: `${EXPLORER_ROOT}/password-recovery`,
  },
  DOCUMENTATION: {
    ROOT: DOCUMENTATION_ROOT,
    WHY_DECENTRALIZED_RWAS: `${DOCUMENTATION_ROOT}/why-decentralized-rwas`,
    THE_STABLECOIN_TRILEMMA: `${DOCUMENTATION_ROOT}/the-stablecoin-trilemma`,
    THE_SYMPHONY_APPROACH: `${DOCUMENTATION_ROOT}/the-symphony-approach`,
    SYMPHONY_IMPACT: `${DOCUMENTATION_ROOT}/symphony-impact`,
    SIZE_OF_OPPORTUNITY: `${DOCUMENTATION_ROOT}/size-of-opportunity`,
    TOKENOMICS: `${DOCUMENTATION_ROOT}/tokenomics`,
    ROADMAP: `${DOCUMENTATION_ROOT}/roadmap`,
    USERS: {
      ROOT: `${DOCUMENTATION_ROOT}${USER_EXTENSION}`,
      CREATE_WALLET: `${DOCUMENTATION_ROOT}${USER_EXTENSION}/create-wallet`,
      ADD_SYMPHONY_TO_WALLET: `${DOCUMENTATION_ROOT}${USER_EXTENSION}/add-symphony-to-wallet`,
    },
  },
};
