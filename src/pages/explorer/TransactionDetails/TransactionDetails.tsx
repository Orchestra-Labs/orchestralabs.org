import { Link } from 'react-router-dom';

import { Copy, Question } from '@/assets/icons';
import { ROUTES } from '@/config/';
import { Badge } from '@/ui-kit';

const TRANSACTION = {
  id: 1,
  transactionHash:
    '0x19e342389b898449e4e46eeb03f116e74f2279b48332542cfe1b1215401e0b54',
  status: 'Success',
  block: '19633579',
  timestamp: '3 mins ago (Apr-11-2024 04:30:35 PM +UTC)',
  action: {
    type: 'Transfer',
    value: '0.032 ETH',
    to: '0xb0fBC722...f2ADb9b08',
  },
  from: '0xf7f07B16C15735590830600B515fC3ee3F438cbf',
  to: '0xb0fBC7221b0c61A68A449b81e12dAe9f2ADb9b08',
  value: { eth: '0.032 ETH', usd: '$111.80' },
  fee: { eth: '0.000648452690193 ETH', usd: ' $2.27' },
  gasPrice: { eth: '0.000000030878699533 ETH', gwei: '30.878699533 Gwei' },
};

export const TransactionDetails = () => (
  <div className="page-container">
    <h1 className="text-h3 text-white font-semibold">Transaction Details</h1>
    <div className="flex flex-col mt-7.5 w-full border border-neutral-2 p-5 rounded-lg bg-background-dark-grey text-base text-white">
      <div className="flex mb-5 flex-col gap-3 lg:flex-row">
        <div className="flex items-center w-full lg:w-2/6">
          <Question className="text-neutral-1 mr-1" />
          <p className="text-neutral-1 text-lg">Transaction Hash</p>
        </div>
        <div className="flex items-center w-full lg:w-4/6">
          <p className="truncate">{TRANSACTION.transactionHash}</p>
          <Copy
            className="text-neutral-1 hover:text-white ml-2 min-w-[18px]"
            role="button"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className="flex mb-5 flex-col gap-3 lg:flex-row">
        <div className="flex items-center w-full lg:w-2/6">
          <Question className="text-neutral-1 mr-1" />
          <p className="text-neutral-1 text-lg">Status</p>
        </div>
        <div className="flex items-center w-full lg:w-4/6">
          <Badge
            variant="outlined"
            className="text-base px-4"
            type={TRANSACTION.status === 'Success' ? 'success' : 'warning'}
          >
            {TRANSACTION.status}
          </Badge>
        </div>
      </div>
      <div className="flex mb-5 flex-col gap-3 lg:flex-row">
        <div className="flex items-center w-full lg:w-2/6">
          <Question className="text-neutral-1 mr-1" />
          <p className="text-neutral-1 text-lg">Block</p>
        </div>
        <div className="flex items-center flex-wrap gap-2.5 w-full lg:w-4/6">
          <Link
            to={`${ROUTES.EXPLORER.BLOCKS}/${TRANSACTION.block}`}
            className="text-blue hover:text-blue-darker"
          >
            {TRANSACTION.block}
          </Link>
          <Badge variant="outlined" className="text-sm px-3 py-2">
            17 Block Confirmations
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex items-center w-full lg:w-2/6">
          <Question className="text-neutral-1 mr-1" />
          <p className="text-neutral-1 text-lg">Timestamp</p>
        </div>
        <div className="flex items-center w-full lg:w-4/6">
          <p>{TRANSACTION.timestamp}</p>
        </div>
      </div>
      <div className="border-t border-neutral-2 my-5" />
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex items-center w-full lg:w-2/6">
          <Question className="text-neutral-1 mr-1" />
          <p className="text-neutral-1 text-lg">Transaction Action</p>
        </div>
        <div className="flex items-center flex-wrap gap-1 w-full lg:w-4/6">
          <p className="">{`${TRANSACTION.action.type} ${TRANSACTION.action.value} To`}</p>
          <Link
            to={`${ROUTES.EXPLORER.ACCOUNT}/${TRANSACTION.action.to}`}
            className="text-blue hover:text-blue-darker"
          >
            {TRANSACTION.action.to}
          </Link>
        </div>
      </div>
      <div className="border-t border-neutral-2 my-5" />
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex items-center w-full lg:w-2/6">
          <Question className="text-neutral-1 mr-1" />
          <p className="text-neutral-1 text-lg">Sponsored</p>
        </div>
        <div className="flex items-center w-full lg:w-4/6">
          <div className="bg-neutral-1 h-[70px] w-full lg:w-3/4" />
        </div>
      </div>
      <div className="border-t border-neutral-2 my-5" />
      <div className="flex mb-5 flex-col gap-3 lg:flex-row">
        <div className="flex items-center w-full lg:w-2/6">
          <Question className="text-neutral-1 mr-1" />
          <p className="text-neutral-1 text-lg">From</p>
        </div>
        <div className="flex items-center w-full lg:w-4/6">
          <Link
            to={`${ROUTES.EXPLORER.ACCOUNT}/${TRANSACTION.from}`}
            className="text-blue hover:text-blue-darker ml-1 truncate"
          >
            {TRANSACTION.from}
          </Link>
          <Copy
            className="text-neutral-1 hover:text-white ml-2 min-w-[18px]"
            role="button"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex items-center w-full lg:w-2/6">
          <Question className="text-neutral-1 mr-1" />
          <p className="text-neutral-1 text-lg">To</p>
        </div>
        <div className="flex items-center w-full lg:w-4/6">
          <Link
            to={`${ROUTES.EXPLORER.ACCOUNT}/${TRANSACTION.to}`}
            className="text-blue hover:text-blue-darker ml-1 truncate"
          >
            {TRANSACTION.to}
          </Link>
          <Copy
            className="text-neutral-1 hover:text-white ml-2 min-w-[18px]"
            role="button"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className="border-t border-neutral-2 my-5" />
      <div className="flex mb-5 flex-col gap-3 lg:flex-row">
        <div className="flex items-center w-full lg:w-2/6">
          <Question className="text-neutral-1 mr-1" />
          <p className="text-neutral-1 text-lg">Value</p>
        </div>
        <div className="flex items-center flex-wrap gap-1 w-full lg:w-4/6">
          <p>{TRANSACTION.value.eth}</p>
          <span className="text-neutral-1">({TRANSACTION.value.usd})</span>
        </div>
      </div>
      <div className="flex mb-5 flex-col gap-3 lg:flex-row">
        <div className="flex items-center w-full lg:w-2/6">
          <Question className="text-neutral-1 mr-1" />
          <p className="text-neutral-1 text-lg">Transaction Fee</p>
        </div>
        <div className="flex items-center flex-wrap gap-1 w-full lg:w-4/6">
          <p>{TRANSACTION.fee.eth}</p>
          <span className="text-neutral-1">({TRANSACTION.fee.usd})</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex items-center w-full lg:w-2/6">
          <Question className="text-neutral-1 mr-1" />
          <p className="text-neutral-1 text-lg">Gas Price</p>
        </div>
        <div className="flex items-center flex-wrap gap-1 w-full lg:w-4/6">
          <p>{TRANSACTION.gasPrice.gwei}</p>
          <span className="text-neutral-1">({TRANSACTION.gasPrice.eth})</span>
        </div>
      </div>
    </div>
  </div>
);
