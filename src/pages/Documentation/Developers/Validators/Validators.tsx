import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { ROUTES } from '@/config/routes';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

const HEADINGS = {
  1: {
    id: 'installation-guides',
    label: 'Installation Guides',
  },
  2: {
    id: 'snapshots',
    label: 'Snapshots',
  },
  3: {
    id: 'genesis-files',
    label: 'Genesis Files',
  },
  4: {
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
    id: '12',
    label: 'NodeSync',
    target: '_blank',
    href: 'https://services.nodesync.top/cosmos-testnet/symphony',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '13',
    label: 'Ravenode',
    target: '_blank',
    href: 'https://docs.ravenode.xyz/testnet/symphony',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '14',
    label: 'Vinjan.Inc',
    target: '_blank',
    href: 'https://service.vinjan.xyz/testnet/symphony',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '15',
    label: 'CroutonDigital',
    target: '_blank',
    href: 'https://crouton.digital/services/testnets/symphony',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '16',
    label: 'Node39.TOP',
    target: '_blank',
    href: 'https://services.node39.top/index.html/cosmos/symphony/installation',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '17',
    label: 'Dnsarz',
    target: '_blank',
    href: 'https://dnsarz.xyz/services/testnet/symphony/installation/',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '18',
    label: 'CommunityNode',
    target: '_blank',
    href: 'https://comunity-node.gitbook.io/validator-tools',
    description: 'Documentation on how to start a validator',
  },
  {
    id: '19',
    label: 'Winnode',
    target: '_blank',
    href: 'https://docs.winnode.site/tesnet/symphony/install',
    description: 'Guide Instalation a validator',
  },
  {
    id: '20',
    label: 'DANGGIA',
    target: '_blank',
    href: 'https://danggia.gitbook.io/guide/guide/symphony',
    description: 'Guide Instalation a validator',
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
    id: '11',
    label: 'NodeSync',
    target: '_blank',
    href: 'https://files.nodesync.top/Symphony/',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '12',
    label: 'Ravenode',
    target: '_blank',
    href: 'https://snapshot.ravenode.xyz/symphony/symphony-latest.tar.lz4',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '13',
    label: 'Vinjan.Inc',
    target: '_blank',
    href: 'https://service.vinjan.xyz/testnet/symphony/snapshot',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '14',
    label: 'CroutonDigital',
    target: '_blank',
    href: 'https://storage.crouton.digital/testnet/symphony/snapshots/symphony_latest.tar.lz4',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '15',
    label: 'Node39.TOP',
    target: '_blank',
    href: 'https://services.node39.top/index.html/cosmos/symphony/sync',
    description: 'Snapshots to speed up validator synchronization',
  },
  {
    id: '16',
    label: 'Winnode',
    target: '_blank',
    href: 'https://data.winnode.xyz/file/uploads/symphony_snapshot_latest.tar.lz4',
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
    id: '9',
    label: 'NodeSync',
    target: '_blank',
    href: 'https://files.nodesync.top/Symphony/symphony-genesis.json',
    description: 'The JSON needed to start a node',
  },
  {
    id: '10',
    label: 'Ravenode',
    target: '_blank',
    href: 'https://snapshot.ravenode.xyz/symphony/genesis.json',
    description: 'The JSON needed to start a node',
  },
  {
    id: '11',
    label: 'Vinjan.Inc',
    target: '_blank',
    href: 'https://service.vinjan.xyz/testnet/symphony/genesis',
    description: 'The JSON needed to start a node',
  },
  {
    id: '12',
    label: 'CroutonDigital',
    target: '_blank',
    href: 'https://storage.crouton.digital/testnet/symphony/files/genesis.json',
    description: 'The JSON needed to start a node',
  },
  {
    id: '13',
    label: 'Node39.TOP',
    target: '_blank',
    href: 'https://node39.top/testnet/symphony/genesis.json',
    description: 'The JSON needed to start a node',
  },
  {
    id: '14',
    label: 'Winnode',
    target: '_blank',
    href: 'https://data.winnode.xyz/file/uploads/symphony_genesis.json',
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
    id: '9',
    label: 'NodeSync',
    target: '_blank',
    href: 'https://files.nodesync.top/Symphony/symphony-addrbook.json',
    description: 'The address book needed to start a node',
  },
  {
    id: '10',
    label: 'Ravenode',
    target: '_blank',
    href: 'https://snapshot.ravenode.xyz/symphony/addrbook.json',
    description: 'The address book needed to start a node',
  },
  {
    id: '11',
    label: 'Vinjan.Inc',
    target: '_blank',
    href: 'https://service.vinjan.xyz/testnet/symphony/addrbook',
    description: 'The address book needed to start a node',
  },
  {
    id: '12',
    label: 'CroutonDigital',
    target: '_blank',
    href: 'https://storage.crouton.digital/testnet/symphony/files/addrbook.json',
    description: 'The address book needed to start a node',
  },
  {
    id: '13',
    label: 'Node39.TOP',
    target: '_blank',
    href: 'https://node39.top/testnet/symphony/addrbook.json',
    description: 'The address book needed to start a node',
  },
  {
    id: '14',
    label: 'Winnode',
    target: '_blank',
    href: 'https://data.winnode.xyz/file/uploads/symphony_addrbook.json',
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
          For interested validators, you can find information on our genesis
          delegation criteria{' '}
          <Link
            to={ROUTES.DOCUMENTATION.DEVELOPERS.GENESIS_DELEGATION}
            className="text-blue hover:text-blue-darker underline"
          >
            here
          </Link>
          . If you are starting out or recovering, a list of installation guides
          and other relevant information required for starting up a new
          validator are below.
        </p>
        <p className="mt-5">
          For those interested in validators, a full list of our active and
          inactive validators can be found at the{' '}
          <Link
            to="https://testnet.cosmos.directory/symphonytestnet/validators"
            target="_blank"
            className="text-blue hover:text-blue-darker underline"
          >
            Cosmos Directory
          </Link>
          . This list includes information such as commission rate, rank,
          whether or not the validator has a security contract, and a link to
          their site!
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <ListLinks listLinks={INSTALLATION_GUIDES} />
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <ListLinks listLinks={SNAPSHOTS} />
        </div>
        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <ListLinks listLinks={GENESIS_FILES} />
        </div>
        <div id={HEADINGS[4].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[4].label}
          </h2>
          <ListLinks listLinks={ADDRESS_BOOKS} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
