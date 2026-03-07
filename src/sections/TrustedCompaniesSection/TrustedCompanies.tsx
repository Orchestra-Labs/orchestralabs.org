import { ClassValue } from 'clsx';

import evacodes from '@/assets/images/external/evacodes.png';
import bloxxa from '@/assets/images/external/bloxxa.png';
import google from '@/assets/images/external/google.png';
import gexabyte from '@/assets/images/external/gexabyte.png';
import medium from '@/assets/images/external/medium.png';
import suave from '@/assets/images/external/suave.png';
import swapAcross from '@/assets/images/external/swapacross.png';
import convoSpace from '@/assets/images/external/convo-space.png';
import keplr from '@/assets/images/external/keplr.png';
import pingPub from '@/assets/images/external/ping-pub.svg';
import kleomedes from '@/assets/images/external/kleomedes.png';
import interchainInfo from '@/assets/images/external/interchaininfo.png';
import buidl from '@/assets/images/external/buidl.png';
import bueno from '@/assets/images/external/bueno.png';
import coinCodex from '@/assets/images/external/coincodex.png';
import leapWallet from '@/assets/images/external/leap-wallet.png';
import icoHolder from '@/assets/images/external/icoholder.jpg';
import digitalJournal from '@/assets/images/external/digital-journal.jpg';
import tradingView from '@/assets/images/external/trading-view.png';
import monday from '@/assets/images/external/monday.png';
import marketWatch from '@/assets/images/external/marketwatch.jpg';
import businessInsider from '@/assets/images/external/business-insider.png';
import coingecko from '@/assets/images/external/coingecko.svg';
import coinpaprika from '@/assets/images/external/coinpaprika.svg';
import walletconnect from '@/assets/images/external/walletconnect.svg';
import lido from '@/assets/images/external/lido.svg';
import osmosis from '@/assets/images/external/osmosis.svg';
import skip from '@/assets/images/external/skip.svg';
import iwealthx from '@/assets/images/external/iwealthx.png';

type Company = {
  id: number;
  name: string;
  src: string;
  href?: string;
  logoClass?: ClassValue;
};

export const COMPANIES: Company[] = [
  {
    id: 1,
    name: 'EvaCodes',
    src: evacodes,
    href: 'https://evacodes.com',
  },
  {
    id: 2,
    name: 'Bloxxa',
    src: bloxxa,
    href: 'https://bloxxa.com',
    logoClass: 'max-h-8',
  },
  {
    id: 3,
    name: 'Google',
    src: google,
    href: 'https://cloud.google.com',
    logoClass: 'max-h-9',
  },
  {
    id: 4,
    name: 'Gexabyte',
    src: gexabyte,
    href: 'https://gexabyte.com',
    logoClass: 'max-h-10',
  },
  {
    id: 5,
    name: 'Medium',
    src: medium,
    href: 'https://medium.com',
    logoClass: 'max-h-7',
  },
  {
    id: 6,
    name: 'Suave',
    src: suave,
    logoClass: 'max-h-8',
  },
  {
    id: 7,
    name: 'SwapAcross',
    src: swapAcross,
    logoClass: 'max-h-9',
  },
  {
    id: 8,
    name: 'Convo Space',
    src: convoSpace,
    href: 'https://theconvo.space',
    logoClass: 'max-h-10',
  },
  {
    id: 9,
    name: 'Keplr',
    src: keplr,
    href: 'https://www.keplr.app',
    logoClass: 'max-h-10',
  },
  {
    id: 10,
    name: 'Kleomedes',
    src: kleomedes,
    href: 'https://kleomedes.network',
    logoClass: 'max-h-10',
  },
  {
    id: 11,
    name: 'GemPad',
    src: pingPub,
    logoClass: 'max-h-10',
  },
  {
    id: 12,
    name: 'Interchain Info',
    src: interchainInfo,
    href: 'https://interchaininfo.zone',
    logoClass: 'max-h-10',
  },
  {
    id: 13,
    name: 'Buidl',
    src: buidl,
    logoClass: 'max-h-9',
  },
  {
    id: 14,
    name: 'Bueno',
    src: bueno,
    logoClass: 'max-h-10',
  },
  {
    id: 15,
    name: 'Coin Codex',
    src: coinCodex,
    href: 'https://coincodex.com',
    logoClass: 'max-h-9',
  },
  {
    id: 16,
    name: 'LeapWallet',
    src: leapWallet,
    href: 'https://www.leapwallet.io',
    logoClass: 'max-h-10',
  },
  {
    id: 17,
    name: 'ICOHolder',
    src: icoHolder,
    href: 'https://icoholder.com',
    logoClass: 'max-h-10',
  },
  {
    id: 18,
    name: 'Digital Journal',
    src: digitalJournal,
    href: 'https://www.digitaljournal.com',
    logoClass: 'max-h-10',
  },
  {
    id: 19,
    name: 'TradingView',
    src: tradingView,
    href: 'https://www.tradingview.com',
    logoClass: 'max-h-10',
  },
  {
    id: 20,
    name: 'Monday',
    src: monday,
    logoClass: 'max-h-10',
  },
  {
    id: 21,
    name: 'MarketWatch',
    src: marketWatch,
    href: 'https://www.marketwatch.com',
    logoClass: 'max-h-10',
  },
  {
    id: 22,
    name: 'Business Insider',
    src: businessInsider,
    href: 'https://www.businessinsider.com',
    logoClass: 'max-h-10',
  },
  {
    id: 23,
    name: 'CoinGecko',
    src: coingecko,
    href: 'https://www.coingecko.com',
  },
  {
    id: 24,
    name: 'CoinPaprika',
    src: coinpaprika,
    href: 'https://coinpaprika.com',
  },
  {
    id: 25,
    name: 'WalletConnect',
    src: walletconnect,
    href: 'https://walletconnect.com',
  },
  {
    id: 26,
    name: 'Lido',
    src: lido,
    href: 'https://lido.fi',
  },
  {
    id: 27,
    name: 'Osmosis',
    src: osmosis,
    href: 'https://osmosis.zone',
  },
  {
    id: 28,
    name: 'Skip Protocol',
    src: skip,
    href: 'https://skip.build',
  },
  {
    id: 29,
    name: 'iWealthX',
    src: iwealthx,
    href: 'https://www.iwealthx.com',
    logoClass: 'max-h-10',
  },
];