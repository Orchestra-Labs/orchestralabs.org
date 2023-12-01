import { atom } from 'recoil';

export const exchangeRatioState = atom({
    key: 'exchangeRatioState',
    default: 100,
});

export const reserveRatioState = atom({
    key: 'reserveRatioState',
    default: 100,
});