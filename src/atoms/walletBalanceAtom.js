import { atom } from 'recoil';

export const demoWalletState = atom({
  key: 'demoWalletState',
  default: {},
});

export const exchangeBalancesState = atom({
  key: 'exchangeBalancesState',
  default: {},
});

export const reserveBalancesState = atom({
  key: 'reserveBalancesState',
  default: {},
});

export const collateralRequirementState = atom({
  key: 'collateralRequirementState',
  default: 0,
});
