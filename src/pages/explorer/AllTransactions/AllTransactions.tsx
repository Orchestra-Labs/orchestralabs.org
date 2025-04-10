import { ArrowLeft, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Copy, List, Question } from '@/assets/icons';
import { ROUTES } from '@/config/';
import {
  Badge,
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
    transactionHash: '0х5c6f90e5228...',
    method: 'Transfer',
    block: '19632593',
    age: '4 days ago',
    from: '0х779f0567...db1143F24',
    type: 'OUT',
    to: '0х779f0567...db1143F24',
    value: '0.026454495 ETH',
    fee: '0.00052331',
  },
  {
    id: 2,
    transactionHash: '0х5c6f90e5228...',
    method: 'Transfer',
    block: '19632593',
    age: '4 days ago',
    type: 'IN',
    from: '0х779f0567...db1143F24',
    to: '0х779f0567...db1143F24',
    value: '0.026454495 ETH',
    fee: '0.00052331',
  },
  {
    id: 3,
    transactionHash: '0х5c6f90e5228...',
    method: 'Transfer',
    block: '19632593',
    age: '4 days ago',
    type: 'OUT',
    from: '0х779f0567...db1143F24',
    to: '0х779f0567...db1143F24',
    value: '0.026454495 ETH',
    fee: '0.00052331',
  },
  {
    id: 4,
    transactionHash: '0х5c6f90e5228...',
    method: 'Transfer',
    block: '19632593',
    age: '4 days ago',
    type: 'IN',
    from: '0х779f0567...db1143F24',
    to: '0х779f0567...db1143F24',
    value: '0.026454495 ETH',
    fee: '0.00052331',
  },
  {
    id: 5,
    transactionHash: '0х5c6f90e5228...',
    method: 'Transfer',
    block: '19632593',
    age: '4 days ago',
    type: 'OUT',
    from: '0х779f0567...db1143F24',
    to: '0х779f0567...db1143F24',
    value: '0.026454495 ETH',
    fee: '0.00052331',
  },
  {
    id: 6,
    transactionHash: '0х5c6f90e5228...',
    method: 'Transfer',
    block: '19632593',
    age: '4 days ago',
    type: 'IN',
    from: '0х779f0567...db1143F24',
    to: '0х779f0567...db1143F24',
    value: '0.026454495 ETH',
    fee: '0.00052331',
  },
  {
    id: 7,
    transactionHash: '0х5c6f90e5228...',
    method: 'Transfer',
    block: '19632593',
    age: '4 days ago',
    type: 'OUT',
    from: '0х779f0567...db1143F24',
    to: '0х779f0567...db1143F24',
    value: '0.026454495 ETH',
    fee: '0.00052331',
  },
  {
    id: 8,
    transactionHash: '0х5c6f90e5228...',
    method: 'Transfer',
    block: '19632593',
    age: '4 days ago',
    type: 'IN',
    from: '0х779f0567...db1143F24',
    to: '0х779f0567...db1143F24',
    value: '0.026454495 ETH',
    fee: '0.00052331',
  },
  {
    id: 9,
    transactionHash: '0х5c6f90e5228...',
    method: 'Transfer',
    block: '19632593',
    age: '4 days ago',
    type: 'OUT',
    from: '0х779f0567...db1143F24',
    to: '0х779f0567...db1143F24',
    value: '0.026454495 ETH',
    fee: '0.00052331',
  },
  {
    id: 10,
    transactionHash: '0х5c6f90e5228...',
    method: 'Transfer',
    block: '19632593',
    age: '4 days ago',
    type: 'IN',
    from: '0х779f0567...db1143F24',
    to: '0х779f0567...db1143F24',
    value: '0.026454495 ETH',
    fee: '0.00052331',
  },
];

export const AllTransactions = () => (
  <div className="page-container">
    <h1 className="text-h3 text-white font-semibold">Transactions</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-7.5 gap-5">
      <div className="flex flex-col w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
        <span className="text-base text-neutral-1">Transactions</span>
        <span className="text-h5 text-white font-semibold mt-1">
          1,207,911{' '}
          <span className="text-error text-sm font-normal">(1,51%)</span>
        </span>
      </div>
      <div className="flex flex-col w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
        <span className="text-base text-neutral-1">
          PENDING TRANSACTIONS (LAST 1H)
        </span>
        <span className="text-h5 text-white font-semibold mt-1">
          181,126 <span className="text-sm font-normal">(Average)</span>
        </span>
      </div>
      <div className="flex flex-col w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
        <span className="text-base text-neutral-1">
          NETWORK TRANSACTIONS FEE (24H)
        </span>
        <span className="text-h5 text-white font-semibold mt-1">
          283,55 ETH <span className="text-sm font-normal">(0.02%)</span>
        </span>
      </div>
      <div className="flex flex-col w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
        <span className="text-base text-neutral-1">
          AVG. TRANSACTION FEE (24H)
        </span>
        <span className="text-h5 text-white font-semibold mt-1">
          7.11 USD{' '}
          <span className="text-error text-sm font-normal">(22.20%)</span>
        </span>
      </div>
    </div>
    <div className="flex flex-col mt-7.5 w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="inline-flex items-center">
              <Question className="text-neutral-1" />
            </TableHead>
            <TableHead>Txn Hash</TableHead>
            <TableHead className="inline-flex items-center">
              Method <Question className="text-neutral-1 ml-2" />
            </TableHead>
            <TableHead className="text-left">Block</TableHead>
            <TableHead className="text-left">Age</TableHead>
            <TableHead className="text-left">From</TableHead>
            <TableHead className="text-left">To</TableHead>
            <TableHead className="text-left">Value</TableHead>
            <TableHead className="text-left">Txn Fee</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TABLE_DATA.map(item => (
            <TableRow>
              <TableCell className="font-medium">
                <Eye role="button" />
              </TableCell>
              <TableCell>
                <Link
                  className="text-blue hover:text-blue-darker text-sm"
                  to={`${ROUTES.EXPLORER.TRANSACTIONS}/${item.id}`}
                >
                  {item.transactionHash}
                </Link>
              </TableCell>
              <TableCell>
                <div className="border border-neutral-2 rounded-lg py-2 px-4 flex items-center justify-center">
                  {item.method}
                </div>
              </TableCell>
              <TableCell>
                <Link
                  className="text-blue hover:text-blue-darker text-sm"
                  to={`${ROUTES.EXPLORER.BLOCKS}/${item.block}`}
                >
                  {item.block}
                </Link>
              </TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Link
                    className="text-blue hover:text-blue-darker text-sm"
                    to={`${ROUTES.EXPLORER.ACCOUNT}/${item.from}`}
                  >
                    {item.from}
                  </Link>
                  <Copy
                    role="button"
                    className="ml-2.5 mr-5 text-neutral-1 hover:text-white"
                    width={18}
                    height={18}
                  />
                  <Badge
                    variant="outline"
                    className="flex items-center justify-center w-[26px] h-[26px] rounded-full p-1"
                    type={item.type === 'IN' ? 'success' : 'warning'}
                  >
                    {item.type === 'IN' ? (
                      <ArrowRight className="w-4 h-4 text-success" />
                    ) : (
                      <ArrowLeft className="w-4 h-4 text-warning" />
                    )}
                  </Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <List
                    className="mr-2.5 text-neutral-1"
                    width={18}
                    height={18}
                  />
                  <Link
                    className="text-blue hover:text-blue-darker text-sm"
                    to={`${ROUTES.EXPLORER.ACCOUNT}/${item.to}`}
                  >
                    {item.to}
                  </Link>
                  <Copy
                    role="button"
                    className="ml-2.5 text-neutral-1 hover:text-white"
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>
              <TableCell>{item.value}</TableCell>
              <TableCell className="text-neutral-1">{item.fee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);
