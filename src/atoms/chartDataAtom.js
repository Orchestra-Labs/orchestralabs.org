import { atom } from 'recoil';

export const chartDataState = atom({
  key: 'chartDataState',
  default: {
    labels: [],
    exchangeData: [],
    reserveData: [],
  },
});
