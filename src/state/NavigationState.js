import { atom } from 'recoil';
import NavOptions from '../utils/enums';

export const navigationState = atom({
  key: 'navigationState',
  default: {
    currentPage: NavOptions.HOME,
  },
});
