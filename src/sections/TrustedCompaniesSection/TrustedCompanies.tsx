import { ClassValue } from 'clsx';

import evacodes from '@/assets/images/external/evacodes.png';
import bloxxa from '@/assets/images/external/bloxxa.png';
// import google from '@/assets/images/external/google.png';
import gexabyte from '@/assets/images/external/gexabyte.png';
// import medium from '@/assets/images/external/medium.png';
import suave from '@/assets/images/external/suave.png';
import swapAcross from '@/assets/images/external/swapacross.png';
// import waitlist from '@/assets/images/external/waitlist.png';
import convoSpace from '@/assets/images/external/convo-space.png';
import keplr from '@/assets/images/external/keplr.png';
import pingPub from '@/assets/images/external/ping-pub.svg';
import kleomedes from '@/assets/images/external/kleomedes.png';
import gempad from '@/assets/images/external/gempad.png';
import nodesHub from '@/assets/images/external/nodeshub.png';
import interchainInfo from '@/assets/images/external/interchaininfo.png';
import buidl from '@/assets/images/external/buidl.png';
import polkachu from '@/assets/images/external/polkachu.png';
import bueno from '@/assets/images/external/bueno.png';
import pfc from '@/assets/images/external/pfc.png';
import fairStaking from '@/assets/images/external/fair-staking.png';
import dasamuka from '@/assets/images/external/dasamuka.png';
import dwentz from '@/assets/images/external/dwentz.png';
import indonode from '@/assets/images/external/indonode.png';
import citizenWeb3 from '@/assets/images/external/citizen-web3.jpg';
import dashNode from '@/assets/images/external/dashnode.png';
import nomad from '@/assets/images/external/nomad.png';
import syanodes from '@/assets/images/external/syanodes.png';
import jhonswg from '@/assets/images/external/jhonswg.png';
import cryptonodeid from '@/assets/images/external/cryptonodeid.png';
import nodestake from '@/assets/images/external/nodestake.png';
import iAmAtomic from '@/assets/images/external/i-am-atomic.png';
import xxcode from '@/assets/images/external/xxcode.png';
import revonode from '@/assets/images/external/revonode.png';
import ravenode from '@/assets/images/external/ravenode.jpg';
import vinjanInc from '@/assets/images/external/vinjan-inc.png';
import busurnode from '@/assets/images/external/busurnode.png';
import croutondigital from '@/assets/images/external/croutondigital.png';
import dnsarz from '@/assets/images/external/dnsarz.png';
import coinCodex from '@/assets/images/external/coincodex.png';
import gowtherNdoe from '@/assets/images/external/gowthernode.png';
import leapWallet from '@/assets/images/external/leap-wallet.png';
import cogwheelLogo from '@/assets/images/external/cogwheel.png';
import icoHolder from '@/assets/images/external/icoholder.jpg';
import citadelOne from '@/assets/images/external/citadel_one.png';
import digitalJournal from '@/assets/images/external/digital-journal.jpg';
import tradingView from '@/assets/images/external/trading-view.png';
// import monday from '@/assets/images/external/monday.png';
import marketWatch from '@/assets/images/external/marketwatch.jpg';
import businessInsider from '@/assets/images/external/business-insider.png';
import shazoe from '@/assets/images/external/shazoe.jpg';

type Company = {
  id: number;
  name: string;
  src: string;
  logoClass?: ClassValue;
};

export const COMPANIES: Company[] = [
  {
    id: 1,
    name: 'EvaCodes',
    src: evacodes,
  },
  {
    id: 2,
    name: 'Bloxxa',
    src: bloxxa,
    logoClass: 'max-h-8',
  },
  // {
  //   id: 3,
  //   name: 'Google',
  //   src: google,
  //   logoClass: 'max-h-9',
  // },
  {
    id: 4,
    name: 'Gexabyte',
    src: gexabyte,
    logoClass: 'max-h-10',
  },
  // {
  //   id: 5,
  //   name: 'Medium',
  //   src: medium,
  //   logoClass: 'max-h-7',
  // },
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
  // {
  //   id: 8,
  //   name: 'Waitlist',
  //   src: waitlist,
  //   logoClass: 'max-h-8',
  // },
  {
    id: 9,
    name: 'Convo Space',
    src: convoSpace,
    logoClass: 'max-h-10',
  },
  {
    id: 10,
    name: 'Keplr',
    src: keplr,
    logoClass: 'max-h-10',
  },
  {
    id: 11,
    name: 'Kleomedes',
    src: kleomedes,
    logoClass: 'max-h-10',
  },
  {
    id: 12,
    name: 'GemPad',
    src: pingPub,
    logoClass: 'max-h-10',
  },
  {
    id: 13,
    name: 'NodesHub',
    src: gempad,
    logoClass: 'max-h-10',
  },
  {
    id: 14,
    name: 'Nodes Hub',
    src: nodesHub,
    logoClass: 'max-h-10',
  },
  {
    id: 15,
    name: 'Interchain Info',
    src: interchainInfo,
    logoClass: 'max-h-10',
  },
  {
    id: 16,
    name: 'Buidl',
    src: buidl,
    logoClass: 'max-h-9',
  },
  {
    id: 17,
    name: 'Polkachu',
    src: polkachu,
    logoClass: 'max-h-10',
  },
  {
    id: 18,
    name: 'Bueno',
    src: bueno,
    logoClass: 'max-h-10',
  },
  {
    id: 19,
    name: 'PFC',
    src: pfc,
    logoClass: 'max-h-10',
  },
  {
    id: 20,
    name: 'Fair Staking',
    src: fairStaking,
    logoClass: 'max-h-9',
  },
  {
    id: 21,
    name: 'Dasamuka',
    src: dasamuka,
    logoClass: 'max-h-10',
  },
  {
    id: 22,
    name: 'Dwentz',
    src: dwentz,
    logoClass: 'max-h-9',
  },
  {
    id: 23,
    name: 'Indonode',
    src: indonode,
    logoClass: 'max-h-10',
  },
  {
    id: 24,
    name: 'Citizen Web3',
    src: citizenWeb3,
    logoClass: 'max-h-10',
  },
  {
    id: 25,
    name: 'DashNode',
    src: dashNode,
    logoClass: 'max-h-10',
  },
  {
    id: 26,
    name: 'Nomad',
    src: nomad,
    logoClass: 'max-h-10',
  },
  {
    id: 27,
    name: 'SyaNodes',
    src: syanodes,
    logoClass: 'max-h-10',
  },
  {
    id: 28,
    name: 'Jhonswg',
    src: jhonswg,
    logoClass: 'max-h-10',
  },
  {
    id: 29,
    name: 'CryptonodeID',
    src: cryptonodeid,
    logoClass: 'max-h-10',
  },
  {
    id: 30,
    name: 'NodeStake',
    src: nodestake,
    logoClass: 'max-h-10',
  },
  {
    id: 31,
    name: 'IAmAtomic',
    src: iAmAtomic,
    logoClass: 'max-h-10',
  },
  {
    id: 32,
    name: 'xxcode',
    src: xxcode,
    logoClass: 'max-h-10',
  },
  {
    id: 33,
    name: 'revonode',
    src: revonode,
    logoClass: 'max-h-10',
  },
  {
    id: 34,
    name: 'Ravenode',
    src: ravenode,
    logoClass: 'max-h-10',
  },
  {
    id: 35,
    name: 'Vinjan.Inc',
    src: vinjanInc,
    logoClass: 'max-h-10',
  },
  {
    id: 36,
    name: 'Busurnode',
    src: busurnode,
    logoClass: 'max-h-10',
  },
  {
    id: 37,
    name: 'CroutonDigital',
    src: croutondigital,
    logoClass: 'max-h-10',
  },
  {
    id: 38,
    name: 'Dnsarz',
    src: dnsarz,
    logoClass: 'max-h-10',
  },
  {
    id: 39,
    name: 'Coin Codex',
    src: coinCodex,
    logoClass: 'max-h-9',
  },
  {
    id: 40,
    name: 'GowtherNode',
    src: gowtherNdoe,
    logoClass: 'max-h-9',
  },
  {
    id: 41,
    name: 'LeapWallet',
    src: leapWallet,
    logoClass: 'max-h-10',
  },
  {
    id: 42,
    name: 'Cogwheel ⚙️',
    src: cogwheelLogo,
    logoClass: 'max-h-8',
  },
  {
    id: 43,
    name: 'ICOHolder',
    src: icoHolder,
    logoClass: 'max-h-10',
  },
  {
    id: 44,
    name: 'Citadel.one',
    src: citadelOne,
    logoClass: 'max-h-10',
  },
  {
    id: 45,
    name: 'Digital Journal',
    src: digitalJournal,
    logoClass: 'max-h-10',
  },
  {
    id: 46,
    name: 'tradingView',
    src: tradingView,
    logoClass: 'max-h-10',
  },
  // {
  //   id: 47,
  //   name: 'Monday',
  //   src: monday,
  //   logoClass: 'max-h-10',
  // },
  {
    id: 48,
    name: 'MarketWatch',
    src: marketWatch,
    logoClass: 'max-h-10',
  },
  {
    id: 49,
    name: 'Business Insider',
    src: businessInsider,
    logoClass: 'max-h-10',
  },
  {
    id: 50,
    name: 'Shazoe',
    src: shazoe,
    logoClass: 'max-h-10',
  },
    {
    id: 51,
    name: 'Unity Nodes',
    src: unitynodes,
    logoClass: 'max-h-10',
  },
];
