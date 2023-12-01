import { atom } from 'recoil';
import {NavOptions} from '../utils/optionValues';

export const navigationState = atom({
  key: 'navigationState',
  default: {
    currentPage: NavOptions.HOME,
  },
});
