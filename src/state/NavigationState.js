import { atom } from 'recoil';
import {NavOptions} from '../utils/OptionValues';

export const navigationState = atom({
  key: 'navigationState',
  default: {
    currentPage: NavOptions.HOME,
  },
});
