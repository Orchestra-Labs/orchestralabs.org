import { Hash } from 'lucide-react';

import { cn } from '@/helpers';
import {
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
    token: '0х5c6f90e5228...',
    price: {
      usd: '$1.00',
      eth: '0.000285 ETH',
    },
    change: '+ 0.15%',
    changeType: 'UP',
    volume: '$53,686,761.000',
    circulatingMarketCap: '$53,686,761.000',
    onlineMarketCap: '$53,686,761.000',
    holders: {
      value: '5,586,827',
      percents: '0.080%',
      type: 'UP',
    },
  },
  {
    id: 2,
    token: '0х5c6f90e5228...',
    price: {
      usd: '$1.00',
      eth: '0.000285 ETH',
    },
    change: '- 0.15%',
    changeType: 'DOWN',
    volume: '$53,686,761.000',
    circulatingMarketCap: '$53,686,761.000',
    onlineMarketCap: '$53,686,761.000',
    holders: {
      value: '5,586,827',
      percents: '-0.080%',
      type: 'DOWN',
    },
  },
  {
    id: 3,
    token: '0х5c6f90e5228...',
    price: {
      usd: '$1.00',
      eth: '0.000285 ETH',
    },
    change: '+ 0.15%',
    changeType: 'UP',
    volume: '$53,686,761.000',
    circulatingMarketCap: '$53,686,761.000',
    onlineMarketCap: '$53,686,761.000',
    holders: {
      value: '5,586,827',
      percents: '0.080%',
      type: 'UP',
    },
  },
  {
    id: 4,
    token: '0х5c6f90e5228...',
    price: {
      usd: '$1.00',
      eth: '0.000285 ETH',
    },
    change: '- 0.15%',
    changeType: 'DOWN',
    volume: '$53,686,761.000',
    circulatingMarketCap: '$53,686,761.000',
    onlineMarketCap: '$53,686,761.000',
    holders: {
      value: '5,586,827',
      percents: '-0.080%',
      type: 'DOWN',
    },
  },
  {
    id: 5,
    token: '0х5c6f90e5228...',
    price: {
      usd: '$1.00',
      eth: '0.000285 ETH',
    },
    change: '+ 0.15%',
    changeType: 'UP',
    volume: '$53,686,761.000',
    circulatingMarketCap: '$53,686,761.000',
    onlineMarketCap: '$53,686,761.000',
    holders: {
      value: '5,586,827',
      percents: '0.080%',
      type: 'UP',
    },
  },
  {
    id: 6,
    token: '0х5c6f90e5228...',
    price: {
      usd: '$1.00',
      eth: '0.000285 ETH',
    },
    change: '- 0.15%',
    changeType: 'DOWN',
    volume: '$53,686,761.000',
    circulatingMarketCap: '$53,686,761.000',
    onlineMarketCap: '$53,686,761.000',
    holders: {
      value: '5,586,827',
      percents: '-0.080%',
      type: 'DOWN',
    },
  },
  {
    id: 7,
    token: '0х5c6f90e5228...',
    price: {
      usd: '$1.00',
      eth: '0.000285 ETH',
    },
    change: '+ 0.15%',
    changeType: 'UP',
    volume: '$53,686,761.000',
    circulatingMarketCap: '$53,686,761.000',
    onlineMarketCap: '$53,686,761.000',
    holders: {
      value: '5,586,827',
      percents: '0.080%',
      type: 'UP',
    },
  },
  {
    id: 8,
    token: '0х5c6f90e5228...',
    price: {
      usd: '$1.00',
      eth: '0.000285 ETH',
    },
    change: '- 0.15%',
    changeType: 'DOWN',
    volume: '$53,686,761.000',
    circulatingMarketCap: '$53,686,761.000',
    onlineMarketCap: '$53,686,761.000',
    holders: {
      value: '5,586,827',
      percents: '-0.080%',
      type: 'DOWN',
    },
  },
  {
    id: 9,
    token: '0х5c6f90e5228...',
    price: {
      usd: '$1.00',
      eth: '0.000285 ETH',
    },
    change: '+ 0.15%',
    changeType: 'UP',
    volume: '$53,686,761.000',
    circulatingMarketCap: '$53,686,761.000',
    onlineMarketCap: '$53,686,761.000',
    holders: {
      value: '5,586,827',
      percents: '0.080%',
      type: 'UP',
    },
  },
  {
    id: 10,
    token: '0х5c6f90e5228...',
    price: {
      usd: '$1.00',
      eth: '0.000285 ETH',
    },
    change: '- 0.15%',
    changeType: 'DOWN',
    volume: '$53,686,761.000',
    circulatingMarketCap: '$53,686,761.000',
    onlineMarketCap: '$53,686,761.000',
    holders: {
      value: '5,586,827',
      percents: '-0.080%',
      type: 'DOWN',
    },
  },
];

export const AllTokens = () => (
  <div className="page-container">
    <h1 className="text-h3 text-white font-semibold">Token Tracker</h1>
    <div className="flex flex-col mt-7.5 w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="flex justify-center items-center">
              <Hash className="text-neutral-1" />
            </TableHead>
            <TableHead>Token</TableHead>
            <TableHead className="text-blue">Price</TableHead>
            <TableHead className="text-blue">Change (%)</TableHead>
            <TableHead className="text-blue">Volume (24H)</TableHead>
            <TableHead className="text-blue">Circulating Market Cap</TableHead>
            <TableHead className="text-left">Online Market Cap</TableHead>
            <TableHead className="text-blue">Holders</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TABLE_DATA.map(item => (
            <TableRow key={item.id}>
              <TableCell className="font-medium text-center">
                {item.id}
              </TableCell>
              <TableCell>{item.token}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span>{item.price.usd}</span>
                  <span className="text-neutral-1 mt-0.5">
                    {item.price.eth}
                  </span>
                </div>
              </TableCell>
              <TableCell
                className={cn(
                  item.changeType === 'UP' && 'text-success',
                  item.changeType === 'DOWN' && 'text-error',
                )}
              >
                {item.change}
              </TableCell>
              <TableCell>{item.volume}</TableCell>
              <TableCell>{item.circulatingMarketCap}</TableCell>
              <TableCell>{item.onlineMarketCap}</TableCell>
              <TableCell className="text-neutral-1">
                <div className="flex flex-col gap-y-0.5">
                  <span>{item.holders.value}</span>
                  <span
                    className={cn(
                      item.holders.type === 'UP' && 'text-success',
                      item.holders.type === 'DOWN' && 'text-error',
                    )}
                  >
                    {item.holders.percents}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);
