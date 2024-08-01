import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  1: {
    id: 'validators',
    label: 'Validators',
  },
  2: {
    id: 'installation-guides',
    label: 'Installation Guides',
  },
  3: {
    id: 'snapshots',
    label: 'Snapshots',
  },
  4: {
    id: 'genesis-files',
    label: 'Genesis Files',
  },
  5: {
    id: 'address-books',
    label: 'Address Books',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
  {
    id: '2',
    label: HEADINGS[2].label,
    href: `#${HEADINGS[2].id}`,
  },
  {
    id: '3',
    label: HEADINGS[3].label,
    href: `#${HEADINGS[3].id}`,
  },
  {
    id: '4',
    label: HEADINGS[4].label,
    href: `#${HEADINGS[4].id}`,
  },
  {
    id: '5',
    label: HEADINGS[5].label,
    href: `#${HEADINGS[5].id}`,
  },
];

const VALIDATORS: NavItem[] = [
  {
    id: '1',
    label: 'Kleomedes',
    target: '_blank',
    href: 'https://kleomed.es/',
    description:
      'A decentralized enterprise focused on building real-world businesses',
  },
  {
    id: '2',
    label: 'NodesHub',
    target: '_blank',
    href: 'https://nodeshub.online/',
    description: 'Your friendly crypto validator',
  },
  {
    id: '3',
    label: 'Polkachu',
    target: '_blank',
    href: 'https://www.polkachu.com/',
    description: 'Trusted blockchain validator of 109 blockchain networks',
  },
  {
    id: '4',
    label: 'NodeStake',
    target: '_blank',
    href: 'https://explorer.nodestake.org/symphony-testnet',
    description:
      'A professional validator, infrastructure provider and IBC relayer.',
  },
  {
    id: '5',
    label: 'Nodeist',
    target: '_blank',
    href: 'https://nodeist.net/',
    description: 'Trusted blockchain validator of 109 blockchain networks',
  },
  {
    id: '6',
    label: 'NodeX Emperor',
    target: '_blank',
    href: 'https://nodex.one/',
    description: 'Trusted blockchain validator of 109 blockchain networks',
  },
  {
    id: '6',
    label: 'Panamanian Flower Company',
    target: '_blank',
    href: 'https://pfc.zone/',
    description: 'An industry leader in the web3 space',
  },
  {
    id: '7',
    label: 'Fair Staking',
    target: '_blank',
    href: 'https://fairstaking.com/',
    description: 'Trusted blockchain validator',
  },
  {
    id: '8',
    label: 'Dasamuka',
    target: '_blank',
    href: 'https://dasamuka.arweave.net/#/',
    description: 'An independent node runner',
  },
  {
    id: '9',
    label: 'Dwentz',
    target: '_blank',
    href: 'https://www.dwentz.xyz/',
    description: 'Dedicated to running reliable and efficient blockchain nodes',
  },
  {
    id: '10',
    label: 'Indonode',
    target: '_blank',
    href: 'https://indonode.net/services/testnet/symphony',
    description: 'Your Trusted non-custodial PoS Validator',
  },
  {
    id: '11',
    label: 'Citizen Web3',
    target: '_blank',
    href: 'https://www.citizenweb3.com/staking',
    description:
      'A self-hosted, independent off the grid, baremetal validator.',
  },
  {
    id: '12',
    label: 'DashNode',
    target: '_blank',
    href: 'https://dashnode.org/',
    description: 'Ensuring the Reliability and Security of Your Digital Assets',
  },
  {
    id: '13',
    label: 'Nomad',
    target: '_blank',
    href: 'https://www.nomadvalidator.com/',
    description: 'Ensuring the Reliability and Security of Your Digital Assets',
  },
  {
    id: '14',
    label: 'KonsorTech',
    target: '_blank',
    href: 'https://konsortech.xyz/',
    description: 'Stake With Us ! Become Professional Stake Provider',
  },
  {
    id: '15',
    label: 'Sychonix',
    target: '_blank',
    href: 'https://sychonix.com/',
    description: 'Committed to Secure Networks',
  },
  {
    id: '16',
    label: 'SyaNodes',
    target: '_blank',
    href: 'https://docs.syanodes.my.id',
    description:
      'Committed to keeping abreast of industry advancements and informed, and passionate about using dependable and effective node operation to advance blockchain technology.',
  },
  {
    id: '17',
    label: 'Jhonswg',
    target: '_blank',
    href: 'https://jhonswg.com/',
    description: 'Stake and Earn with us',
  },
  {
    id: '18',
    label: 'Vinjan.Inc',
    target: '_blank',
    href: 'https://service.vinjan.xyz/',
    description: 'Validator Service & IBC Relayer',
  },
  {
    id: '19',
    label: 'CryptoNodeID',
    target: '_blank',
    href: 'https://cryptonode.id/',
    description: 'Crypto Validator Node Education Channel',
  },
  {
    id: '21',
    label: 'CroutonDigital',
    target: '_blank',
    href: 'https://crouton.digital',
    description: 'Your everyday crypto partner',
  },
];

const INSTALLATION_GUIDES: NavItem[] = [
  {
    id: '1',
    label: 'NodesHub',
    target: '_blank',
    href: 'https://services.nodeshub.online/testnet-networks/symphony/',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '2',
    label: 'Polkachu',
    target: '_blank',
    href: 'https://polkachu.com/testnets/symphony/',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '3',
    label: 'NodeStake',
    target: '_blank',
    href: 'https://nodestake.org/symphony',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '4',
    label: 'Nodeist',
    target: '_blank',
    href: 'https://nodeist.net/Symphony/',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '5',
    label: 'NodeX Emperor',
    target: '_blank',
    href: 'https://docs.nodex.one/networks/testnet/symphony',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '6',
    label: 'Indonode',
    target: '_blank',
    href: 'https://indonode.net/services/testnet/symphony/installation#setup',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '7',
    label: 'KonsorTech',
    target: '_blank',
    href: 'https://konsortech.xyz/testnet/symphony',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '8',
    label: 'Sychonix',
    target: '_blank',
    href: 'https://service.sychonix.com/testnet/symphony/installation',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '9',
    label: 'SyaNodes',
    target: '_blank',
    href: 'https://docs.syanodes.my.id/symphony/node-installation',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '10',
    label: 'CryptoNodeID',
    target: '_blank',
    href: 'https://docs.cryptonode.id/en/testnet/symphony',
    description: 'Easy setup to start a validator',
  },
  {
    id: '11',
    label: 'DashNode',
    target: '_blank',
    href: 'https://services.dashnode.org/network/cosmos/symphony/installation',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '13',
    label: 'CroutonDigital',
    target: '_blank',
    href: 'https://crouton.digital/services/testnets/symphony',
    description: 'Documentation on how to start a validator',
  },
];

const SNAPSHOTS: NavItem[] = [
  {
    id: '1',
    label: 'NodesHub',
    target: '_blank',
    href: 'https://files.nodeshub.online/testnet/symphony/snapshot/symphony_snap.tar.lz4',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '2',
    label: 'Polkachu',
    target: '_blank',
    href: 'https://polkachu.com/testnets/symphony/snapshots',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '3',
    label: 'NodeStake',
    target: '_blank',
    href: 'https://ss-t.symphony.nodestake.org/2024-07-27_symphony_100519.tar.lz4',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '4',
    label: 'Nodeist',
    target: '_blank',
    href: 'https://t-ss.nodeist.net/symphony/snapshot_latest.tar.lz4',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '5',
    label: 'Nodex.one',
    target: '_blank',
    href: 'https://snap.nodex.one/symphony-testnet/symphony-latest.tar.lz4',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '6',
    label: 'KonsorTech',
    target: '_blank',
    href: 'https://snap2.konsortech.xyz/symphony',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '7',
    label: 'Sychonix',
    target: '_blank',
    href: 'https://service.sychonix.com/testnet/symphony/snapshot',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '8',
    label: 'SyaNodes',
    target: '_blank',
    href: 'https://ss.syanodes.my.id/symphony/ss-symphony.tar.lz4',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '9',
    label: 'CryptoNodeID',
    target: '_blank',
    href: 'https://docs.cryptonode.id/en/testnet/symphony/endpoints-and-sync',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '10',
    label: 'DashNode',
    target: '_blank',
    href: 'https://snapshot.dashnode.org/symphony-testnet/',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '12',
    label: 'CroutonDigital',
    target: '_blank',
    href: 'https://storage.crouton.digital/testnet/symphony/snapshots/symphony_latest.tar.lz4',
    description: 'Snapshots to speed up validator synchronization',
  },
];

const GENESIS_FILES: NavItem[] = [
  {
    id: '1',
    label: 'NodesHub',
    target: '_blank',
    href: 'https://files.nodeshub.online/testnet/symphony/',
    description: 'The JSON and address book needed to start a node',
  },
  {
    id: '2',
    label: 'Polkachu',
    target: '_blank',
    href: 'https://polkachu.com/testnets/symphony/genesis',
    description: 'The JSON needed to start a node',
  },
  {
    id: '3',
    label: 'NodeStake',
    target: '_blank',
    href: 'https://ss-t.symphony.nodestake.org/genesis.json',
    description: 'The JSON needed to start a node',
  },
  {
    id: '4',
    label: 'KonsorTech',
    target: '_blank',
    href: 'https://snap2.konsortech.xyz/symphony/genesis.json',
    description: 'The JSON needed to start a node',
  },
  {
    id: '4',
    label: 'KonsorTech',
    target: '_blank',
    href: 'https://snap2.konsortech.xyz/symphony/genesis.json',
    description: 'The JSON needed to start a node',
  },
  {
    id: '5',
    label: 'Sychonix',
    target: '_blank',
    href: 'https://service.sychonix.com/testnet/symphony/genesis',
    description: 'The JSON needed to start a node',
  },
  {
    id: '6',
    label: 'SyaNodes',
    target: '_blank',
    href: 'https://testnet-files.syanodes.my.id/symphony-genesis.json',
    description: 'The JSON needed to start a node',
  },
  {
    id: '7',
    label: 'CryptoNodeID',
    target: '_blank',
    href: 'https://snapshot.cryptonode.id/symphony-testnet/genesis.json',
    description: 'The JSON needed to start a node',
  },
  {
    id: '8',
    label: 'DashNode',
    target: '_blank',
    href: 'https://snapshot.dashnode.org/symphony-testnet/genesis.json',
    description: 'The JSON needed to start a node',
  },
  {
    id: '10',
    label: 'CroutonDigital',
    target: '_blank',
    href: 'https://storage.crouton.digital/testnet/symphony/files/genesis.json',
    description: 'The JSON needed to start a node',
  },
];

const ADDRESS_BOOKS: NavItem[] = [
  {
    id: '1',
    label: 'NodesHub',
    target: '_blank',
    href: 'https://files.nodeshub.online/testnet/symphony/',
    description: 'The JSON and address book needed to start a node',
  },
  {
    id: '2',
    label: 'Polkachu',
    target: '_blank',
    href: 'https://polkachu.com/testnets/symphony/addrbooks',
    description: 'The address book needed to start a node',
  },
  {
    id: '3',
    label: 'NodeStake',
    target: '_blank',
    href: 'https://ss-t.symphony.nodestake.org/addrbook.json',
    description: 'The address book needed to start a node',
  },
  {
    id: '4',
    label: 'KonsorTech',
    target: '_blank',
    href: 'https://snap2.konsortech.xyz/symphony/addrbook.json',
    description: 'The address book needed to start a node',
  },
  {
    id: '5',
    label: 'Sychonix',
    target: '_blank',
    href: 'https://service.sychonix.com/testnet/symphony/addrbook',
    description: 'The address book needed to start a node',
  },
  {
    id: '6',
    label: 'SyaNodes',
    target: '_blank',
    href: 'https://testnet-files.syanodes.my.id/symphony-addrbook.json',
    description: 'The address book needed to start a node',
  },
  {
    id: '7',
    label: 'CryptoNodeID',
    target: '_blank',
    href: 'https://snapshot.cryptonode.id/symphony-testnet/addrbook.json',
    description: 'Collection of quality addresses',
  },
  {
    id: '8',
    label: 'DashNode',
    target: '_blank',
    href: 'https://snapshot.dashnode.org/symphony-testnet/addrbook.json',
    description: 'The address book needed to start a node',
  },
  {
    id: '10',
    label: 'CroutonDigital',
    target: '_blank',
    href: 'https://storage.crouton.digital/testnet/symphony/files/addrbook.json',
    description: 'The address book needed to start a node',
  },
];

export const Validators = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Validators
        </h1>
        <p className="mt-10">
          A list of validators and relevant information required for starting up
          a new validator are below:
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <ListLinks listLinks={VALIDATORS} />
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <ListLinks listLinks={INSTALLATION_GUIDES} />
        </div>
        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <ListLinks listLinks={SNAPSHOTS} />
        </div>
        <div id={HEADINGS[4].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[4].label}
          </h2>
          <ListLinks listLinks={GENESIS_FILES} />
        </div>
        <div id={HEADINGS[5].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[5].label}
          </h2>
          <ListLinks listLinks={ADDRESS_BOOKS} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
