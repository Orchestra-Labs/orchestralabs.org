import { Globe, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Blocks, Clock, List, LogoIcon } from '@/assets/icons';
import { ShortListView } from '@/components';
import { ROUTES } from '@/config/';
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui-kit';

const CHART_DATA = [
  {
    value: 1220,
  },
  {
    date: 'Mar 26',
    value: 1130,
    disabled: true,
  },
  {
    value: 1170,
  },
  {
    date: 'Apr 2',
    value: 1040,
  },
  {
    value: 1140,
  },
  {
    date: 'Apr 9',
    value: 1360,
  },
];

export const ExplorerMain = () => (
  <div className="page-container">
    <h1 className="text-h4 md:text-h3 xl:text-h3 text-white font-semibold mb-3">
      Symphony Blockchain Explorer
    </h1>
    <div className="flex items-center border border-neutral-2 pr-5 py-3 rounded-lg mt-5 bg-background-dark-grey max-w-[750px] w-full">
      <Select defaultValue="All filters">
        <SelectTrigger className="w-[130px] bg-transparent border-0 py-0 pl-5 pr-3 min-h-6 text-lg">
          <SelectValue placeholder="Choose filter" />
        </SelectTrigger>
        <SelectContent className="data-[side=bottom]:translate-y-3.5">
          <SelectItem className="text-lg" value="All filters">
            All filters
          </SelectItem>
          <SelectItem className="text-lg" value="Filter A">
            Filter A
          </SelectItem>
          <SelectItem className="text-lg" value="Filter B">
            Filter B
          </SelectItem>
        </SelectContent>
      </Select>
      <Input
        className="ml-8 mr-2 px-3 outline-0 w-full text-lg flex-1"
        placeholder="Search"
      />
      <Search className="text-blue" />
    </div>
    <section className="mt-15 flex items-center border border-neutral-2 p-5 rounded-lg mt-5 bg-background-dark-grey">
      <div className="flex justify-between w-full flex-wrap xl:flex-nowrap gap-8">
        <div className="flex flex-col w-full md:w-[calc(50%-33px)] xl:w-1/4">
          <div className="flex items-center">
            <LogoIcon width={32} height={34} />
            <div className="ml-2 flex flex-col gap-1">
              <span className="text-lg text-neutral-1">Symphony price</span>
              <div className="text-base">
                <span className="text-white">$150.45 </span>
                <span className="text-success">(+45%)</span>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-2 w-full my-[30px]" />
          <div className="flex items-center">
            <Globe className="text-blue" width={38} height={38} />
            <div className="ml-2 flex flex-col gap-1">
              <span className="text-lg text-neutral-1">Market cap</span>
              <span className="text-base text-white">$1,000,000</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.8px] md:w-[1px] md:h-32 bg-neutral-2 md:my-1.5" />
        <div className="flex flex-col w-full md:w-[calc(50%-33px)] xl:w-2/5">
          <div className="flex items-center justify-between">
            <div className="flex">
              <List className="text-blue" />
              <div className="ml-2 flex flex-col gap-1">
                <span className="text-lg text-neutral-1">Transactions</span>
                <div className="text-base">
                  <span className="text-white">2,5 M (10 TPS)</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <span className="text-lg text-neutral-1 align-right">
                MED GAS PRICE
              </span>
              <span className="text-base text-white">150 MLD ($0.5)</span>
            </div>
          </div>
          <div className="border-t border-neutral-2 w-full my-[30px]" />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="text-blue" />
              <div className="ml-2 flex flex-col gap-1">
                <span className="text-lg text-neutral-1 align-right">
                  Last finalized block
                </span>
                <span className="text-base text-white">19603965</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <span className="text-lg text-neutral-1">LAST SAFE BLOCK</span>
              <span className="text-base text-white">19604661</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.8px] xl:w-[1px] xl:h-32 bg-neutral-2 xl:my-1.5" />
        <div className="w-full xl:w-[35%]">
          <span className="text-lg text-neutral-1">
            TRANSACTION HISTORY IN 14 DAYS
          </span>
          <ResponsiveContainer width="100%" height={96}>
            <LineChart
              className="text-neutral-1 text-xs"
              data={CHART_DATA}
              margin={{ top: 20 }}
            >
              <XAxis
                dataKey="date"
                height={20}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                domain={['dataMin', 'dataMax']}
              />
              <Line
                dot={false}
                type="monotone"
                dataKey="value"
                stroke="#A2A2AA"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
    <div className="flex gap-7.5 mt-7.5 flex-col min-[1100px]:flex-row">
      <ShortListView
        title="Latest Blocks"
        className="w-full min-[1100px]:w-1/2"
        linkText="View all blocks"
        link={ROUTES.EXPLORER.BLOCKS}
      >
        {Array.of(1, 2, 3, 4, 5, 6).map(item => (
          <div
            key={item}
            className="w-full min-w-[460px] flex justify-between py-5 border-b border-neutral-2"
          >
            <div className="flex items-center">
              <div className="bg-background-dialog-bg rounded-lg border border-neutral-2 w-8 h-8 xl:w-[46px] xl:h-[46px] flex items-center justify-center p-1.5 xl:p-2.5">
                <Blocks className="text-neutral-1" />
              </div>
              <div className="flex flex-col ml-2">
                <Link
                  className="text-blue hover:text-blue-darker text-base xl:text-lg"
                  to={`${ROUTES.EXPLORER.BLOCKS}/${item}`}
                >
                  19226333
                </Link>
                <span className="text-xs text-neutral-1">5 secs ago</span>
              </div>
            </div>
            <div className="flex flex-col ml-2">
              <span className="text-base xl:text-lg">
                Fee Recipent{' '}
                <Link className="text-blue hover:text-blue-darker" to="#">
                  beaverbuild
                </Link>
              </span>
              <span className="text-sm text-neutral-1">
                <Link className="text-blue hover:text-blue-darker" to="#">
                  182 txns
                </Link>{' '}
                in 12 secs
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="border border-neutral-2 px-2.5 py-1 rounded-lg text-xs">
                0.02447 Eth
              </div>
            </div>
          </div>
        ))}
      </ShortListView>
      <ShortListView
        title="Latest Transactions"
        className="w-full min-[1100px]:w-1/2"
        linkText="View all transactions"
        link={ROUTES.EXPLORER.TRANSACTIONS}
      >
        {Array.of(1, 2, 3, 4, 5, 6).map(item => (
          <div
            key={item}
            className="w-full min-w-[460px] flex justify-between py-5 border-b border-neutral-2"
          >
            <div className="flex items-center">
              <div className="bg-background-dialog-bg rounded-lg border border-neutral-2 w-8 h-8 xl:w-[46px] xl:h-[46px] flex items-center justify-center p-1.5 xl:p-2.5">
                <List className="text-neutral-1" />
              </div>
              <div className="flex flex-col ml-2 justify-center">
                <Link
                  className="text-blue hover:text-blue-darker text-base xl:text-lg"
                  to={`${ROUTES.EXPLORER.TRANSACTIONS}/${item}`}
                >
                  0x2bcb5bd70...
                </Link>
                <span className="text-xs text-neutral-1">5 secs ago</span>
              </div>
            </div>
            <div className="flex flex-col ml-2">
              <span className="text-base xl:text-lg">
                From{' '}
                <Link
                  className="text-blue hover:text-blue-darker"
                  to={`${ROUTES.EXPLORER.ACCOUNT}/${item}`}
                >
                  0х90222290...6CC4Af35
                </Link>
              </span>
              <span className="text-sm text-neutral-1">
                To{' '}
                <Link
                  className="text-blue hover:text-blue-darker"
                  to={`${ROUTES.EXPLORER.ACCOUNT}/${item}`}
                >
                  0хF52441A7...ae4dC7786
                </Link>
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="border border-neutral-2 px-2.5 py-1 rounded-lg text-xs">
                0.02447 Eth
              </div>
            </div>
          </div>
        ))}
      </ShortListView>
    </div>
  </div>
);
