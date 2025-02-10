import { CodeBlock, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

const HEADINGS = {
  1: { id: 'symphonyjs', label: 'Using SymphonyJS' },
  2: { id: 'epochs', label: 'Epochs Module' },
  3: { id: 'market', label: 'Market Module' },
  4: { id: 'mint', label: 'Mint Module' },
  5: { id: 'oracle', label: 'Oracle Module' },
  6: { id: 'treasury', label: 'Treasury Module' },
  7: { id: 'examples', label: 'Example Code' },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
  { id: '3', label: HEADINGS[3].label, href: `#${HEADINGS[3].id}` },
  { id: '4', label: HEADINGS[4].label, href: `#${HEADINGS[4].id}` },
  { id: '5', label: HEADINGS[5].label, href: `#${HEADINGS[5].id}` },
  { id: '6', label: HEADINGS[6].label, href: `#${HEADINGS[6].id}` },
  { id: '7', label: HEADINGS[7].label, href: `#${HEADINGS[7].id}` },
];

const EXAMPLE_LINKS = [
  {
    title: 'Repository for Aria wallet (extension)',
    href: 'https://github.com/Orchestra-Labs/Aria-Extension-Wallet',
  },
  {
    title: 'Re-usable functions for querying nodes',
    href: 'https://github.com/Orchestra-Labs/Aria-Extension-Wallet/blob/main/src/helpers/queryNodes.ts',
  },
  {
    title: 'Basic Cosmos transaction sending',
    href: 'https://github.com/Orchestra-Labs/Aria-Extension-Wallet/blob/main/src/helpers/sendTransactions.ts',
  },
  {
    title: 'Use of our Swap protocol (Via Symphony JS)',
    href: 'https://github.com/Orchestra-Labs/Aria-Extension-Wallet/blob/main/src/helpers/swapTransactions.ts',
  },
  {
    title: 'Getting the list of assets available',
    href: 'https://github.com/Orchestra-Labs/Aria-Extension-Wallet/blob/main/src/hooks/useExchangeAssets.ts',
  },
  {
    title: 'Getting the full list of exchange rates',
    href: 'https://github.com/Orchestra-Labs/Aria-Extension-Wallet/blob/main/src/hooks/useExchangeRate.ts',
  },
];

export const API_Guide = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Symphony API Guide
        </h1>
        <p className="mt-10">
          Symphony follows the Cosmos standard, and as such most endpoints will
          align to{' '}
          <Link
            target="_blank"
            to="https://docs.cosmos.network/api"
            className="text-blue hover:text-blue-darker"
          >
            Cosmos documentation
          </Link>{' '}
          . The following endpoints are built to handle Symphony's more unique
          blockchain operations. The most important endpoints for user
          interaction are the simulation and send endpoints for swaps, allowing
          users to preview and execute token exchanges efficiently.
        </p>

        {/* SymphonyJS Section */}
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <h3 className="mt-5 text-white font-semibold">
            Installing SymphonyJS
          </h3>
          <p className="mt-5">
            Ensure you have installed <code>@orchestra-labs/symphonyjs</code> in
            your project:
          </p>
          <CodeBlock code={`npm install @orchestra-labs/symphonyjs@^1.0.29`} />

          <h3 className="mt-5 text-white font-semibold">
            Initializing a Symphony Client
          </h3>
          <p>
            Before making transactions, you must initialize a SymphonyJS signing
            client.
          </p>
          <CodeBlock
            code={`import { getSigningSymphonyClient } from '@orchestra-labs/symphonyjs';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

async function getClient(mnemonic, rpcEndpoint) {
  const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
  return await getSigningSymphonyClient({
    rpcEndpoint,
    signer: offlineSigner
  });
}`}
          />

          <h3 className="mt-5 text-white font-semibold">
            Performing RPC Queries
          </h3>
          <p>
            Use SymphonyJS to perform RPC queries using your signing client:
          </p>
          <CodeBlock
            code={`import { performRpcQuery } from './queryNodes';

async function queryBlockchain(client, walletAddress, messages, feeDenom, simulateOnly) {
  const result = await performRpcQuery(
    client,
    walletAddress,
    messages,
    feeDenom,
    simulateOnly
  );
  console.log('Query result:', result);
}`}
          />

          <h3 className="mt-5 text-white font-semibold">
            Simulating a Swap Transaction
          </h3>
          <p>
            Use SymphonyJS to <strong>simulate</strong> a swap before executing
            it:
          </p>
          <CodeBlock
            code={`import { symphony } from '@orchestra-labs/symphonyjs';

async function simulateSwap(client, fromAddress, offerCoin, askDenom) {
  const swapMessage = symphony.market.v1beta1.MessageComposer.withTypeUrl.swap({
    trader: fromAddress,
    offerCoin: { denom: offerCoin.denom, amount: offerCoin.amount },
    askDenom
  });

  const tx = await client.simulate([swapMessage], {});
  console.log('Estimated Gas:', tx);
}`}
          />

          <h3 className="mt-5 text-white font-semibold">
            Executing a Swap Transaction
          </h3>
          <p>Use SymphonyJS to execute a swap transaction:</p>
          <CodeBlock
            code={`import { symphony } from '@orchestra-labs/symphonyjs';

async function executeSwap(client, fromAddress, recipientAddress, offerCoin, askDenom) {
  const swapMessage = symphony.market.v1beta1.MessageComposer.withTypeUrl.swapSend({
    fromAddress,
    toAddress: recipientAddress,
    offerCoin: { denom: offerCoin.denom, amount: offerCoin.amount },
    askDenom
  });

  const tx = await client.signAndBroadcast(fromAddress, [swapMessage], { gas: "200000" });
  console.log('Transaction Hash:', tx);
}`}
          />
        </div>

        {/* Epochs Module */}
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-5">
            <strong>GET /symphony/epochs/v1beta1/epochs</strong> - Returns
            information about running epochs.
          </p>
          <p className="mt-5">
            <strong>GET /symphony/epochs/v1beta1/current_epoch</strong> -
            Returns the current epoch for a specified identifier.
          </p>
          <p className="mt-2">
            <strong>Query Parameters:</strong> identifier (string, required).
          </p>
        </div>

        {/* Market Module */}
        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>

          <h3 className="mt-5 text-white font-semibold">Simulate Swap</h3>
          <p className="mt-5">
            <strong>GET /symphony/market/v1beta1/swap</strong> - Returns
            simulated swap amount.
          </p>
          <p className="mt-2">
            <strong>Query Parameters:</strong>
          </p>
          <ul>
            <li>
              <code>offer_coin</code> (string, required): The coin being offered
              (format: "amount" + "denom", e.g. "1000note").
            </li>
            <li>
              <code>ask_denom</code> (string, required): The denomination to
              swap to.
            </li>
          </ul>
          <p className="mt-5">
            <strong>GET /symphony/market/v1beta1/params</strong> - Returns
            market module parameters.
          </p>
          <p className="mt-5">
            <strong>GET /symphony/market/v1beta1/exchange_requirements</strong>{' '}
            - Returns exchange requirements information.
          </p>
          <p className="mt-5">
            <strong>POST /cosmos.tx.v1beta1/txs</strong> - Sends a swap
            transaction.
          </p>
          <p className="mt-2">
            <strong>Payload:</strong>
          </p>
          <CodeBlock
            code={`{
  "tx": {
    "body": {
      "messages": [
        {
          "@type": "/symphony.market.v1beta1.MsgSwap",
          "trader": "symphony1exampleaddress",
          "offer_coin": { "denom": "uluna", "amount": "1000" },
          "ask_denom": "usdt"
        }
      ]
    },
    "auth_info": { /* gas, fee, and signers */ },
    "signatures": ["base64signature"]
  }
}`}
          />

          <p className="mt-5">
            <strong>POST /cosmos.tx.v1beta1/txs</strong> - Swaps tokens and
            sends them to another address.
          </p>
          <CodeBlock
            code={`{
  "tx": {
    "body": {
      "messages": [
        {
          "@type": "/symphony.market.v1beta1.MsgSwapSend",
          "from_address": "symphony1exampleaddress",
          "to_address": "symphony1destinationaddress",
          "offer_coin": { "denom": "uluna", "amount": "1000" },
          "ask_denom": "usdt"
        }
      ]
    },
    "auth_info": { /* gas, fee, and signers */ },
    "signatures": ["base64signature"]
  }
}`}
          />

          <p className="mt-5">
            <strong>MsgSwap</strong> - Swaps one denomination for another.
          </p>
          <CodeBlock
            code={`{
  "type": "symphony/MsgSwapSend",
  "value": {
    "from_address": "symphony1exampleaddress",
    "to_address": "symphony1destinationaddress",
    "offer_coin": { "denom": "note", "amount": "1000" },
    "ask_denom": "usdt"
  }
}`}
          />
        </div>

        {/* Mint Module */}
        <div id={HEADINGS[4].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[4].label}
          </h2>
          <p className="mt-5">
            <strong>GET /symphony/mint/v1beta1/params</strong> - Returns the
            current minting module parameters.
          </p>
          <p className="mt-5">
            <strong>GET /symphony/mint/v1beta1/epoch_provisions</strong> -
            Returns the current minting epoch provisions value.
          </p>
        </div>

        {/* Oracle Module */}
        <div id={HEADINGS[5].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[5].label}
          </h2>
          <p className="mt-5">
            <strong>
              GET /symphony/oracle/v1beta1/denoms/{'{'}denom{'}'}/exchange_rate
            </strong>{' '}
            - Returns exchange rate for a specific denomination.
          </p>
          <p className="mt-2">
            <strong>Path Parameters:</strong>
          </p>
          <ul>
            <li>
              <code>denom</code> (string, required): The denomination to query.
            </li>
          </ul>
          <p className="mt-5">
            <strong>GET /symphony/oracle/v1beta1/denoms/exchange_rates</strong>{' '}
            - Returns exchange rates for all denominations.
          </p>
          <p className="mt-5">
            <strong>
              GET /symphony/oracle/v1beta1/denoms/{'{'}denom{'}'}/tobin_tax
            </strong>{' '}
            - Returns tobin tax for a specific denomination.
          </p>
          <p className="mt-2">
            <strong>Path Parameters:</strong>
          </p>
          <ul>
            <li>
              <code>denom</code> (string, required): The denomination to query.
            </li>
          </ul>
          <p className="mt-5">
            <strong>GET /symphony/oracle/v1beta1/denoms/actives</strong> -
            Returns all active denominations.
          </p>
          <p className="mt-5">
            <strong>GET /symphony/oracle/v1beta1/denoms/vote_targets</strong> -
            Returns all vote target denominations.
          </p>
          <p className="mt-5">
            <strong>GET /symphony/oracle/v1beta1/params</strong> - Returns
            oracle module parameters.
          </p>
          <p className="mt-5">
            <strong>POST /cosmos.tx.v1beta1/txs</strong> - Submits an exchange
            rate prevote.
          </p>
          <CodeBlock
            code={`{
  "tx": {
    "body": {
      "messages": [
        {
          "@type": "/symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevote",
          "hash": "hash_value",
          "feeder": "symphony1feederaddress",
          "validator": "symphony1validatoraddress"
        }
      ]
    },
    "auth_info": { /* gas, fee, and signers */ },
    "signatures": ["base64signature"]
  }
}`}
          />
          <p className="mt-5">
            <strong>POST /cosmos.tx.v1beta1/txs</strong> - Submits an exchange
            rate vote.
          </p>
          <CodeBlock
            code={`{
  "tx": {
    "body": {
      "messages": [
        {
          "@type": "/symphony.oracle.v1beta1.MsgAggregateExchangeRateVote",
          "salt": "randomsalt",
          "exchange_rates": "uluna:1.2,usdt:1.0",
          "feeder": "symphony1feederaddress",
          "validator": "symphony1validatoraddress"
        }
      ]
    },
    "auth_info": { /* gas, fee, and signers */ },
    "signatures": ["base64signature"]
  }
}`}
          />
          <p className="mt-5">
            <strong>POST /cosmos.tx.v1beta1/txs</strong> - Delegates oracle
            voting rights to another address.
          </p>
          <CodeBlock
            code={`{
  "tx": {
    "body": {
      "messages": [
        {
          "@type": "/symphony.oracle.v1beta1.MsgDelegateFeedConsent",
          "operator": "symphony1operatoraddress",
          "delegate": "symphony1delegateaddress"
        }
      ]
    },
    "auth_info": { /* gas, fee, and signers */ },
    "signatures": ["base64signature"]
  }
}`}
          />
        </div>

        {/* Treasury Module */}
        <div id={HEADINGS[6].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[6].label}
          </h2>
          <p className="mt-5">
            <strong>GET /symphony/treasury/v1beta1/tax_rate</strong> - Returns
            the current tax rate.
          </p>
          <p className="mt-5">
            <strong>GET /symphony/treasury/v1beta1/params</strong> - Returns
            treasury module parameters.
          </p>
        </div>

        {/* Example Section */}
        <div id={HEADINGS[7].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[7].label}
          </h2>
          <p className="mt-10">
            The following are link examples for utilization of the above
            andpoints, as used in our own Aria wallet. Be sure to check imports,
            as these use TypeScript and our SymphonyJS implementation!
          </p>
          <ul className="mt-10">
            {EXAMPLE_LINKS.map(item => (
              <li key={String(item)} className="mb-4">
                <p>
                  -{' '}
                  <Link
                    target="_blank"
                    to={item.href}
                    className="text-blue hover:text-blue-darker"
                  >
                    {item.title}
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
