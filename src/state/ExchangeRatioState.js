import { atom } from 'recoil';

export const exchangeRatioState = atom({
    key: 'exchangeRatioState',
    default: 100, // Default exchange ratio
});