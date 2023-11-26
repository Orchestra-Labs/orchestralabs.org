import { atom } from 'recoil';

export const navigationState = atom({
  key: 'navigationState',
  default: {
    currentPage: 'home',
  },
});
