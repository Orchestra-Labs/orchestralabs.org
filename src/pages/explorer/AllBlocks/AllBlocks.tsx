import { Link } from 'react-router-dom';

import { Copy } from '@/assets/icons';
import { ROUTES } from '@/config/';
import {
  Progress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui-kit';

const TABLE_DATA = [
  {
    id: 1,
    block: '19632593',
    age: '4 days ago',
    txn: '100',
    from: 'beaverbuild',
    gasUsed: '10,108,274 (33.69% | - 33%)',
    gasLimit: '30,000,000',
    baseFee: '37,94 Gwei',
    reward: '0.05829 ETH',
    burnsFees: {
      value: '0.053592',
      percents: '89.31%',
    },
  },
  {
    id: 2,
    block: '19632593',
    age: '4 days ago',
    txn: '100',
    from: 'beaverbuild',
    gasUsed: '10,108,274 (33.69% | - 33%)',
    gasLimit: '30,000,000',
    baseFee: '37,94 Gwei',
    reward: '0.05829 ETH',
    burnsFees: {
      value: '0.053592',
      percents: '89.31%',
    },
  },
  {
    id: 3,
    block: '19632593',
    age: '4 days ago',
    txn: '100',
    from: 'beaverbuild',
    gasUsed: '10,108,274 (33.69% | - 33%)',
    gasLimit: '30,000,000',
    baseFee: '37,94 Gwei',
    reward: '0.05829 ETH',
    burnsFees: {
      value: '0.053592',
      percents: '89.31%',
    },
  },
  {
    id: 4,
    block: '19632593',
    age: '4 days ago',
    txn: '100',
    from: 'beaverbuild',
    gasUsed: '10,108,274 (33.69% | - 33%)',
    gasLimit: '30,000,000',
    baseFee: '37,94 Gwei',
    reward: '0.05829 ETH',
    burnsFees: {
      value: '0.053592',
      percents: '89.31%',
    },
  },
  {
    id: 5,
    block: '19632593',
    age: '4 days ago',
    txn: '100',
    from: 'beaverbuild',
    gasUsed: '10,108,274 (33.69% | - 33%)',
    gasLimit: '30,000,000',
    baseFee: '37,94 Gwei',
    reward: '0.05829 ETH',
    burnsFees: {
      value: '0.053592',
      percents: '89.31%',
    },
  },
  {
    id: 6,
    block: '19632593',
    age: '4 days ago',
    txn: '100',
    from: 'beaverbuild',
    gasUsed: '10,108,274 (33.69% | - 33%)',
    gasLimit: '30,000,000',
    baseFee: '37,94 Gwei',
    reward: '0.05829 ETH',
    burnsFees: {
      value: '0.053592',
      percents: '89.31%',
    },
  },
  {
    id: 7,
    block: '19632593',
    age: '4 days ago',
    txn: '100',
    from: 'beaverbuild',
    gasUsed: '10,108,274 (33.69% | - 33%)',
    gasLimit: '30,000,000',
    baseFee: '37,94 Gwei',
    reward: '0.05829 ETH',
    burnsFees: {
      value: '0.053592',
      percents: '89.31%',
    },
  },
  {
    id: 8,
    block: '19632593',
    age: '4 days ago',
    txn: '100',
    from: 'beaverbuild',
    gasUsed: '10,108,274 (33.69% | - 33%)',
    gasLimit: '30,000,000',
    baseFee: '37,94 Gwei',
    reward: '0.05829 ETH',
    burnsFees: {
      value: '0.053592',
      percents: '89.31%',
    },
  },
  {
    id: 9,
    block: '19632593',
    age: '4 days ago',
    txn: '100',
    from: 'beaverbuild',
    gasUsed: '10,108,274 (33.69% | - 33%)',
    gasLimit: '30,000,000',
    baseFee: '37,94 Gwei',
    reward: '0.05829 ETH',
    burnsFees: {
      value: '0.053592',
      percents: '89.31%',
    },
  },
  {
    id: 10,
    block: '19632593',
    age: '4 days ago',
    txn: '100',
    from: 'beaverbuild',
    gasUsed: '10,108,274 (33.69% | - 33%)',
    gasLimit: '30,000,000',
    baseFee: '37,94 Gwei',
    reward: '0.05829 ETH',
    burnsFees: {
      value: '0.053592',
      percents: '89.31%',
    },
  },
];

export const AllBlocks = () => (
  <div className="page-container">
    <h1 className="text-h3 text-white font-semibold">Blocks</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-7.5 gap-5">
      <div className="flex flex-col w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
        <span className="text-base text-neutral-1">
          NETWORK UTILIZATION (24H)
        </span>
        <span className="text-h5 text-white font-semibold mt-1">50.6%</span>
      </div>
      <div className="flex flex-col w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
        <span className="text-base text-neutral-1">LAST SAFE BLOCK</span>
        <span className="text-h5 text-white font-semibold mt-1">19633349</span>
      </div>
      <div className="flex flex-col w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
        <span className="text-base text-neutral-1">
          PRODUCED BY MEV BUILDERS( 24H)
        </span>
        <span className="text-h5 text-white font-semibold mt-1">88.4%</span>
      </div>
      <div className="flex flex-col w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
        <span className="text-base text-neutral-1">BURNT FEES 🔥</span>
        <span className="text-h5 text-white font-semibold mt-1">
          4,254,203.22 ETH
        </span>
      </div>
    </div>
    <div className="flex flex-col mt-7.5 w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Block</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Txn</TableHead>
            <TableHead>From</TableHead>
            <TableHead>Gas Used</TableHead>
            <TableHead>Gas Limit</TableHead>
            <TableHead>Base Fee</TableHead>
            <TableHead>Reward</TableHead>
            <TableHead>Burns Fees (ETH)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TABLE_DATA.map(item => (
            <TableRow key={item.id}>
              <TableCell>
                <Link
                  to={`${ROUTES.EXPLORER.BLOCKS}/${item.id}`}
                  className="text-blue hover:text-blue-darker"
                >
                  {item.block}
                </Link>
              </TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>
                <Link to="#" className="text-blue hover:text-blue-darker">
                  {item.txn}
                </Link>
              </TableCell>
              <TableCell className="inline-flex items-center">
                <Link to="#" className="text-blue hover:text-blue-darker">
                  {item.from}
                </Link>
                <Copy
                  className="ml-2.5 text-neutral-1 hover:text-white"
                  role="button"
                  width={18}
                  height={18}
                />
              </TableCell>
              <TableCell>
                <div className="flex flex-col px-5">
                  <span>{item.gasUsed}</span>
                  <Progress className="w-full mt-1.5" value={30} />
                </div>
              </TableCell>
              <TableCell>{item.gasLimit}</TableCell>
              <TableCell>{item.gasUsed}</TableCell>
              <TableCell>{item.reward}</TableCell>
              <TableCell className="flex items-center">
                <span>{item.burnsFees.value}</span>
                <span className="text-xs text-neutral-1 ml-0.5">
                  ({item.burnsFees.percents})
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);
