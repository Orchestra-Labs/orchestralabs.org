import { ClassValue } from 'clsx';

import { cn } from '@/helpers';

import evacodes from '@/assets/images/evacodes.png';
import bloxxa from '@/assets/images/bloxxa.png';
import google from '@/assets/images/google.png';
import gexabyte from '@/assets/images/gexabyte.png';
import medium from '@/assets/images/medium.png';
import suave from '@/assets/images/suave.png';
import swapAcross from '@/assets/images/swapacross.png';
import waitlist from '@/assets/images/waitlist.png';
import convoSpace from '@/assets/images/convo-space.png';
import keplr from '@/assets/images/keplr.png';
import pingPub from '@/assets/images/ping-pub.svg';
import kleomedes from '@/assets/images/kleomedes.png';
import gempad from '@/assets/images/gempad.png';
import nodesHub from '@/assets/images/nodeshub.png';
import interchainInfo from '@/assets/images/interchaininfo.png';
import buidl from '@/assets/images/buidl.png';
import nodeist from '@/assets/images/nodeist.png';
import nodeXEmperor from '@/assets/images/nodexemperor.png';
import polkachu from '@/assets/images/polkachu.png';
import bueno from '@/assets/images/bueno.png';
import pfc from '@/assets/images/pfc.png';
import fairStaking from '@/assets/images/fair-staking.png';
import dasamuka from '@/assets/images/dasamuka.png';
import dwentz from '@/assets/images/dwentz.png';
import indonode from '@/assets/images/indonode.png';
import citizenWeb3 from '@/assets/images/citizen-web3.jpg';
import dashNode from '@/assets/images/dashnode.png';
import nomad from '@/assets/images/nomad.png';
import konsortech from '@/assets/images/konsortech.png';
import sychonix from '@/assets/images/sychonix.png';

type Company = {
  id: number;
  name: string;
  src: string;
  logoClass?: ClassValue;
};

const COMPANIES: Company[] = [
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
  {
    id: 3,
    name: 'Google',
    src: google,
    logoClass: 'max-h-9',
  },
  {
    id: 4,
    name: 'Gexabyte',
    src: gexabyte,
    logoClass: 'max-h-10',
  },
  {
    id: 5,
    name: 'Medium',
    src: medium,
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
    name: 'Waitlist',
    src: waitlist,
    logoClass: 'max-h-8',
  },
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
    name: 'Nodeist',
    src: nodeist,
    logoClass: 'max-h-9',
  },
  {
    id: 18,
    name: 'NodeX Emperor',
    src: nodeXEmperor,
    logoClass: 'max-h-10',
  },
  {
    id: 19,
    name: 'Polkachu',
    src: polkachu,
    logoClass: 'max-h-10',
  },
  {
    id: 20,
    name: 'Bueno',
    src: bueno,
    logoClass: 'max-h-10',
  },
  {
    id: 21,
    name: 'PFC',
    src: pfc,
    logoClass: 'max-h-10',
  },
  {
    id: 22,
    name: 'Fair Staking',
    src: fairStaking,
    logoClass: 'max-h-9',
  },
  {
    id: 23,
    name: 'Dasamuka',
    src: dasamuka,
    logoClass: 'max-h-10',
  },
  {
    id: 24,
    name: 'Dwentz',
    src: dwentz,
    logoClass: 'max-h-9',
  },
  {
    id: 25,
    name: 'Indonode',
    src: indonode,
    logoClass: 'max-h-10',
  },
  {
    id: 26,
    name: 'Citizen Web3',
    src: citizenWeb3,
    logoClass: 'max-h-10',
  },
  {
    id: 27,
    name: 'DashNode',
    src: dashNode,
    logoClass: 'max-h-10',
  },
  {
    id: 28,
    name: 'Nomad',
    src: nomad,
    logoClass: 'max-h-10',
  },
  {
    id: 29,
    name: 'KonsorTech',
    src: konsortech,
    logoClass: 'max-h-10',
  },
  {
    id: 30,
    name: 'Sychonix',
    src: sychonix,
    logoClass: 'max-h-10',
  },
  {
    id: 31,
    name: 'Vinjan.Inc',
    src: Vinjan.Inc,
    logoClass: 'max-h-10',  
  },
];

export const TrustedCompaniesSection = () => (
  <section className="section-container pt-5 md:pt-11 pb-15 md:pb-22.5 px-25px lg:px-6">
    <h2 className="text-body-sm uppercase text-blue text-center">
      Trusted by the following companies
    </h2>
    <div className="mt-8 md:mt-12.5 xl:mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4.5 xl:gap-6">
      {COMPANIES.map(company => (
        <div
          key={company.id}
          className="bg-background-dark-grey p-5 h-20 flex items-center justify-center"
        >
          <img
            className={cn(
              'w-auto max-h-7 h-full',
              company?.logoClass as ClassValue,
            )}
            src={company.src}
            alt={company.name}
          />
        </div>
      ))}
    </div>
  </section>
);
