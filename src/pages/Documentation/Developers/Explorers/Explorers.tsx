import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  1: {
    id: 'explorers',
    label: 'Explorers',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
];

const EXPLORERS: NavItem[] = [
  {
    id: '1',
    label: 'Ping.pub',
    target: '_blank',
    href: 'https://testnet.ping.pub/symphony',
    description: 'The ping.pub explorer',
  },
  {
    id: '2',
    label: 'NodesHub',
    target: '_blank',
    href: 'https://testnet.explorer.nodeshub.online/symphony',
    description: 'An explorer from one of our supporting validators',
  },
  {
    id: '3',
    label: 'NodeStake',
    target: '_blank',
    href: 'https://explorer.nodestake.org/symphony-testnet',
    description: 'An explorer from one of our supporting validators',
  },
  {
    id: '4',
    label: 'Nodeist',
    target: '_blank',
    href: 'https://test.explorer.ist/Symphony',
    description: 'An explorer from one of our supporting validators',
  },
  {
    id: '5',
    label: 'NodeX Emperor',
    target: '_blank',
    href: 'https://explorer.nodex.one/symphony/staking/symphonyvaloper13ts3j8q27kcykenfzty7lre6gvgh8w62deuvme',
    description: 'An explorer from one of our supporting validators',
  },
  {
    id: '6',
    label: 'Indonode',
    target: '_blank',
    href: 'https://explorer.indonode.net/symphony-testnet',
    description: 'An explorer from one of our supporting validators',
  },
  {
    id: '7',
    label: 'KonsorTech',
    target: '_blank',
    href: 'https://testnet-explorer.konsortech.xyz/symphony',
    description: 'An explorer from one of our supporting validators',
  },
  {
    id: '8',
    label: 'Sychonix',
    target: '_blank',
    href: 'https://explorer.sychonix.com/symphony-testnet',
    description: 'An explorer from one of our supporting validators',
  },
  {
    id: '9',
    label: 'SyaNodes',
    target: '_blank',
    href: 'https://explorer.syanodes.my.id/symphony-testnet',
    description: 'An explorer from one of our supporting validators',
  },
  {
    id: '10',
    label: 'Jhonswg',
    target: '_blank',
    href: 'https://explorer.jhonswg.com/symphony',
    description: 'An explorer from one of our supporting validators',
  },
  {
    id: '11',
    label: 'CryptoNodeID',
    target: '_blank',
    href: 'https://testnet.cryptonode.id/symphony',
    description: 'An explorer from one of our supporting validators',
  },
  {
    id: '12',
    label: 'NodeSync',
    target: '_blank',
    href: 'https://explorer.nodesync.top/Symphony',
    description: 'NodeSync.Top is Trusted PoS Validator - Node Provider',
  },
];

export const Explorers = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Explorers
        </h1>
        <p className="mt-10">A list of explorers is included below:</p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <ListLinks listLinks={EXPLORERS} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
