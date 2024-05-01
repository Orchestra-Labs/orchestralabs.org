import { Link } from 'react-router-dom';

import { Copy, Question, SquareArrowUpRight } from '@/assets/icons';
import { Badge, Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui-kit';

enum TabsLabels {
  Overview = 'Overview',
  ConsensusInfo = 'Consensus Info',
  MEVInfo = 'MEV Info',
}

const BLOCK = {
  blockHeight: '19639603',
  status: 'Finalized',
  timestamp: '3 mins ago (Apr-11-2024 04:30:35 PM +UTC)',
  transactionAction: ['137 transactions', '25 contract internal transactions'],
  withdrawals: '16',
  feeRecipient: {
    value: 'beaverbuild',
    time: '12 secs',
  },
  blockReward:
    '0.056432172020433265 ETH (0 + 0.234848411539884275 - 0.17841623951945101)',
  totalDifficulty: '58,750,003,716,598,352,816,469',
  totalDifficultyBytes: '44,149 bytes',
  gasUsed: {
    value: '9,306,715',
    percents: '31.02%',
  },
  gasLimit: '30,000,000',
  feePerGas: {
    eth: '0.000000019170699814 ETH',
    gwei: '19.170699814 Gwei',
  },
  burntFee: '🔥 0.17841623951945101 ETH',
  extraData: 'beaverbuild.org (Hex:0x6265617665726275696c642e6f7267)',
  slot: '8841817',
  epoch: '276306',
  proposerIndex: '976305',
  slotRootHash:
    '0xa297e83a2f1b65f6fcda25a06fcb316457626279dd817a1e27916de568f1b565',
  beaconDepositCount: '1430823',
  slotGraffiti:
    '0xd581afb764cc74b4d559d1bc073b61edb75402616ae679b5ec3c7829b83b4e76',
  randaoReveal:
    '0x86a093011dbe486b886bc8c993586523756b8f141d8a9ec5efead1445c45e9655f719c1b5c99cf5bd94c551b9ce3af370f676a20154b9a86fdd1b93485e057cd8346fa15dc06932fa71a64d526cc650c806e13feb244f37483b860c9c6be7045',
  proposerFeeRecipient: '0xfFEE087852cb4898e6c3532E776e68BC68b1143B',
  mevReward: '0.083469255526343207 ETH',
  mevHash: '0x78ba2d2a71c6d5c150290a8f1951a889f80d2f628da7ca2d1a13ff78a2be8273',
};

export const BlockDetails = () => (
  <div className="page-container">
    <h1 className="text-h3 text-white font-semibold">Block</h1>
    <Tabs defaultValue={TabsLabels.Overview} className="w-full mt-7.5">
      <TabsList>
        <TabsTrigger value={TabsLabels.Overview}>
          {TabsLabels.Overview}
        </TabsTrigger>
        <TabsTrigger value={TabsLabels.ConsensusInfo}>
          {TabsLabels.ConsensusInfo}
        </TabsTrigger>
        <TabsTrigger value={TabsLabels.MEVInfo}>
          {TabsLabels.MEVInfo}
        </TabsTrigger>
      </TabsList>
      <TabsContent value={TabsLabels.Overview}>
        <div className="flex flex-col mt-7.5 w-full border border-neutral-2 p-5 rounded-lg bg-background-dark-grey text-base text-white">
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Block Height</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <p>{BLOCK.blockHeight}</p>
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
                type={BLOCK.status === 'Finalized' ? 'success' : 'warning'}
              >
                {BLOCK.status}
              </Badge>
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Timestamp</p>
            </div>
            <div className="flex items-center flex-wrap gap-2.5 w-full lg:w-4/6">
              <p>{BLOCK.timestamp}</p>
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Proposed On</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <p>
                Block proposed on slot{' '}
                <Link to="#" className="text-blue hover:text-blue-darker">
                  {BLOCK.slot},
                </Link>
                epoch{' '}
                <Link to="#" className="text-blue hover:text-blue-darker">
                  {BLOCK.epoch}
                </Link>
              </p>
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Transaction Action</p>
            </div>
            <div className="flex items-center flex-wrap gap-1 w-full lg:w-4/6">
              <Link to="#" className="text-blue hover:text-blue-darker">
                {BLOCK.transactionAction[0]}
              </Link>{' '}
              and{' '}
              <Link to="#" className="text-blue hover:text-blue-darker">
                {BLOCK.transactionAction[1]}
              </Link>{' '}
              in this block
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Withdrawals</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <Link to="#" className="text-blue hover:text-blue-darker">
                {BLOCK.withdrawals} withdrawals
              </Link>{' '}
              in this block
            </div>
          </div>
          <div className="border-t border-neutral-2 my-5" />
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Fee Recipient</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <Link
                to="#"
                className="text-blue hover:text-blue-darker ml-1 break-all"
              >
                {BLOCK.feeRecipient.value}
              </Link>
              <Copy
                className="text-neutral-1 ml-2 min-w-[18px]"
                width={18}
                height={18}
              />{' '}
              in {BLOCK.feeRecipient.time}
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Block Reward</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <p>{BLOCK.blockReward}</p>
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Total Difficulty</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <p className="break-all">{BLOCK.totalDifficulty}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Total Difficulty</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <p>{BLOCK.totalDifficultyBytes}</p>
            </div>
          </div>
          <div className="border-t border-neutral-2 my-5" />
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Gas Used</p>
            </div>
            <div className="flex items-center flex-wrap gap-1 w-full lg:w-4/6">
              <p>{BLOCK.gasUsed.value}</p>
              <span className="text-neutral-1">({BLOCK.gasUsed.percents})</span>
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Gas Limit</p>
            </div>
            <div className="flex items-center flex-wrap gap-1 w-full lg:w-4/6">
              <p>{BLOCK.gasLimit}</p>
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Base Fee Per Gas</p>
            </div>
            <div className="flex items-center flex-wrap gap-1 w-full lg:w-4/6">
              <p>{BLOCK.feePerGas.eth}</p>
              <span className="text-neutral-1">({BLOCK.feePerGas.gwei})</span>
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Burnt Fees</p>
            </div>
            <div className="flex items-center flex-wrap gap-1 w-full lg:w-4/6">
              <p>{BLOCK.burntFee}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Extra Data</p>
            </div>
            <div className="flex items-center flex-wrap gap-1 w-full lg:w-4/6">
              <p className="break-all">{BLOCK.extraData}</p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value={TabsLabels.ConsensusInfo}>
        <div className="flex flex-col mt-7.5 w-full border border-neutral-2 p-5 rounded-lg bg-background-dark-grey text-base text-white">
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Slot</p>
            </div>
            <div className="flex flex-nowrap gap-1 items-center w-full lg:w-4/6">
              <Link
                to="#"
                className="text-blue hover:text-blue-darker break-all"
              >
                {BLOCK.slot}
              </Link>
              <SquareArrowUpRight className="text-neutral-1" />
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Epoch</p>
            </div>
            <div className="flex flex-nowrap gap-1 items-center w-full lg:w-4/6">
              <Link
                to="#"
                className="text-blue hover:text-blue-darker break-all"
              >
                {BLOCK.epoch}
              </Link>
              <SquareArrowUpRight className="text-neutral-1" />
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Proposer Index</p>
            </div>
            <div className="flex flex-nowrap gap-1 items-center w-full lg:w-4/6">
              <Link
                to="#"
                className="text-blue hover:text-blue-darker break-all"
              >
                {BLOCK.proposerIndex}
              </Link>
              <SquareArrowUpRight className="text-neutral-1" />
            </div>
          </div>
          <div className="border-t border-neutral-2 my-5" />
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Slot Root Hash</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <p className="break-all">{BLOCK.slotRootHash}</p>
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">
                Beacon Chain Deposit Count
              </p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <p className="break-all">{BLOCK.beaconDepositCount}</p>
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Slot Graffiti</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <p className="break-all">{BLOCK.slotGraffiti}</p>
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Randao Reveal</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <p className="break-all">{BLOCK.randaoReveal}</p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value={TabsLabels.MEVInfo}>
        <div className="flex flex-col mt-7.5 w-full border border-neutral-2 p-5 rounded-lg bg-background-dark-grey text-base text-white">
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">Proposer Fee Recipient</p>
            </div>
            <div className="flex flex-wrap gap-1 items-center w-full lg:w-4/6">
              <Link
                to="#"
                className="text-blue hover:text-blue-darker break-all"
              >
                {BLOCK.proposerFeeRecipient}
              </Link>
              (stakefish: Fee Recipient)
            </div>
          </div>
          <div className="flex mb-5 flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">MEV Reward</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <p>{BLOCK.mevReward}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-center w-full lg:w-2/6">
              <Question className="text-neutral-1 mr-1" />
              <p className="text-neutral-1 text-lg">MEV Payout Txn Hash</p>
            </div>
            <div className="flex items-center w-full lg:w-4/6">
              <Link
                to="#"
                className="text-blue hover:text-blue-darker break-all"
              >
                {BLOCK.mevHash}
              </Link>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>
);
