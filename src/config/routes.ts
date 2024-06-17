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
    USERS: {
      ROOT: `${DOCUMENTATION_ROOT}${USER_EXTENSION}`,
      CREATE_WALLET: `${DOCUMENTATION_ROOT}${USER_EXTENSION}/create-wallet`,
      ADD_SYMPHONY_TO_WALLET: `${DOCUMENTATION_ROOT}${USER_EXTENSION}/add-symphony-to-wallet`,
    },
  },
};
