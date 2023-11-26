// state.js
import { atom } from 'recoil';

export const transactionTypeState = atom({
  key: 'transactionTypeState',
  default: 'transfer',
});

export const senderAssetState = atom({
  key: 'senderAssetState',
  default: '{"name": "Melody", "symbol": "MLD", "type": "On_Chain"}',
});

export const recipientAssetState = atom({
  key: 'recipientAssetState',
  default: '{"name": "Melody", "symbol": "MLD", "type": "On_Chain"}',
});
