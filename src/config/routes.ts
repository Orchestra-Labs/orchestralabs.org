const EXPLORER_ROOT = '/explorer';

export const ROUTES = {
  HOME: '/',
  EXPLORER: {
    ROOT: EXPLORER_ROOT,
    ACCOUNT_DETAILS: `${EXPLORER_ROOT}/account/:id`,
    TOKENS: `${EXPLORER_ROOT}/tokens`,
    BLOCKS: `${EXPLORER_ROOT}/blocks`,
    TRANSACTIONS: `${EXPLORER_ROOT}/transactions`,
    TRANSACTION_DETAILS: `${EXPLORER_ROOT}/transactions/:id`,
    BLOCK_DETAILS: `${EXPLORER_ROOT}/blocks/:id`,
    SIGN_IN: `${EXPLORER_ROOT}/sign-in`,
    SIGN_UP: `${EXPLORER_ROOT}/sign-up`,
    PASSWORD_RECOVERY: `${EXPLORER_ROOT}/password-recovery`,
  },
};
