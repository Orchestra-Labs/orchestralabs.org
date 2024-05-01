import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Copy, List, Question } from '@/assets/icons';
import {
  Badge,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
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

export const AccountDetails = () => (
  <div className="page-container">
    <div className="flex items-center">
      <img
        className="w-8 h-8 rounded-full"
        src="/src/assets/images/avatar.png"
        alt="Avatar"
      />
      <h1 className="text-h3 text-white ml-1 font-semibold">
        Address{' '}
        <span className="text-h5 font-normal">
          0х95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
        </span>
      </h1>
    </div>
    <div className="flex gap-x-5 justify-between text-white">
      <div className="flex flex-col w-full border border-neutral-2 p-5 rounded-lg mt-5 bg-background-dark-grey">
        <h5 className="text-h5 font-semibold">Overview</h5>
        <div className="mt-5 flex flex-col">
          <span className="text-lg text-neutral-1">BNB BALANCE</span>
          <div className="inline-flex items-center mt-1">
            <img
              className="w-6 h-6 rounded-full"
              src="/src/assets/images/bnb-balance.png"
              alt="BNB"
            />
            <span className="ml-2 text-base">0.5559993778633352 BNB</span>
          </div>
        </div>
        <div className="mt-5 flex flex-col">
          <span className="text-lg text-neutral-1">TOKEN HOLDINGS</span>
          <Select defaultValue="1">
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Token holdings" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-base" value="1">
                $0.00 <span className="text-neutral-1">(31 tokens)</span>
              </SelectItem>
              <SelectItem className="text-base" value="2">
                $10.00 <span className="text-neutral-1">(8 tokens)</span>
              </SelectItem>
              <SelectItem className="text-base" value="3">
                $1000.00 <span className="text-neutral-1">(5 tokens)</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col w-full border border-neutral-2 p-5 rounded-lg mt-5 bg-background-dark-grey">
        <h5 className="text-h5 font-semibold">More info</h5>
        <div className="mt-5 flex flex-col">
          <span className="text-lg text-neutral-1">LAST TXN SENT</span>
          <span className="text-base text-neutral-1 mt-1">
            <Link to="#" className="text-blue hover:text-blue-darker">
              0xb3c6ed6af2a...
            </Link>{' '}
            from 3 days ago
          </span>
        </div>
        <div className="mt-5 flex flex-col">
          <span className="text-lg text-neutral-1">FIRST TXN SENT</span>
          <span className="text-base text-neutral-1 mt-1">
            <Link to="#" className="text-blue hover:text-blue-darker">
              0xbfbdd2957d...
            </Link>{' '}
            from 628 days ago
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full border border-neutral-2 p-5 rounded-lg mt-5 bg-background-dark-grey">
        <h5 className="text-h5 font-semibold">Multichain info</h5>
        <div className="mt-5">
          <span className="text-lg text-neutral-1">N / A</span>
        </div>
      </div>
    </div>
    <div className="flex mt-[50px]">
      <Tabs defaultValue="transactions" className="w-full">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="transfers">Token Transfers (BEP-20)</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">
          <div className="flex flex-col w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="inline-flex items-center">
                    <Question className="text-neutral-1" />
                  </TableHead>
                  <TableHead>Transaction Hash</TableHead>
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
                      <Eye />
                    </TableCell>
                    <TableCell>
                      <Link
                        className="text-blue hover:text-blue-darker text-sm"
                        to="#"
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
                        to="#"
                      >
                        {item.block}
                      </Link>
                    </TableCell>
                    <TableCell>{item.age}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Link
                          className="text-blue hover:text-blue-darker text-sm"
                          to="#"
                        >
                          {item.from}
                        </Link>
                        <Copy
                          role="button"
                          className="ml-2.5 mr-5"
                          width={18}
                          height={18}
                        />
                        <Badge
                          variant="outline"
                          type={item.type === 'IN' ? 'success' : 'warning'}
                        >
                          {item.type}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <List className="mr-2.5" width={18} height={18} />
                        <Link
                          className="text-blue hover:text-blue-darker text-sm"
                          to="#"
                        >
                          {item.to}
                        </Link>
                        <Copy
                          role="button"
                          className="ml-2.5"
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
        </TabsContent>
        <TabsContent value="transfers">
          <div className="flex flex-col w-full border border-neutral-2 p-5 pb-2.5 rounded-lg bg-background-dark-grey">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="inline-flex items-center">
                    <Question className="text-neutral-1" />
                  </TableHead>
                  <TableHead>Transaction Hash</TableHead>
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
                {TABLE_DATA.reverse().map(item => (
                  <TableRow>
                    <TableCell className="font-medium">
                      <Eye />
                    </TableCell>
                    <TableCell>
                      <Link
                        className="text-blue hover:text-blue-darker text-sm"
                        to="#"
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
                        to="#"
                      >
                        {item.block}
                      </Link>
                    </TableCell>
                    <TableCell>{item.age}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Link
                          className="text-blue hover:text-blue-darker text-sm"
                          to="#"
                        >
                          {item.from}
                        </Link>
                        <Copy
                          role="button"
                          className="ml-2.5 mr-5"
                          width={18}
                          height={18}
                        />
                        <Badge
                          variant="outline"
                          type={item.type === 'IN' ? 'success' : 'warning'}
                        >
                          {item.type}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <List className="mr-2.5" width={18} height={18} />
                        <Link
                          className="text-blue hover:text-blue-darker text-sm"
                          to="#"
                        >
                          {item.to}
                        </Link>
                        <Copy
                          role="button"
                          className="ml-2.5"
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
        </TabsContent>
      </Tabs>
    </div>
  </div>
);
