import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

import locationAdvancedIBC from '@/assets/images/initial-location-advanced-ibc.png';
import selectAsset from '@/assets/images/select-asset.png';
import newIBCChannel from '@/assets/images/new-ibc-channel.png';
import selectDestinationChain from '@/assets/images/select-destination-chain.png';
import sourceChannelID from '@/assets/images/source-channel-id.png';
import enterWalletAddress from '@/assets/images/enter-wallet-address.png';
import enterAmount from '@/assets/images/enter-amount.png';
import confirmIBCTransaction from '@/assets/images/confirm-ibc-transaction.png';
import verifyResults from '@/assets/images/initial-location-advanced-ibc.png';
import devMode from '@/assets/images/dev-mode.png';
import { ROUTES } from '@/config/routes';
import { Link } from 'react-router-dom';

const HEADINGS = {
  1: {
    id: 'advanced-ibc',
    label: 'Advanced IBC',
  },
  2: {
    id: 'current-ibc-channels',
    label: 'Current IBC Channels',
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
];

export const AdvancedIBC = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Using IBC
        </h1>
        <p className="mt-10">
          Cosmos chains have a native inter-blockchain (IBC) protocol that's
          used to connect to each other. Symphony, being based on Cosmos, is
          able to take advantage of this same feature. In Keplr, the wallet that
          first listed Symphony, there are two ways to approach this: regular
          IBC and advanced IBC. The two operate similarly, but advanced IBC is
          for non-native chains. Symphony, being a non-native chain to Keplr,
          has the steps for this listed below.
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>

          <p className="mt-5">
            First step is to make sure the chain you want to transfer to is
            visible in your wallet. If it is native to the wallet, you should be
            able to find it with a simple search. If not, follow the
            instructions{' '}
            <Link
              to={ROUTES.DOCUMENTATION.USERS.ADD_SYMPHONY_TO_WALLET}
              className="text-blue hover:text-blue-darker underline"
            >
              here
            </Link>
            .
          </p>

          <p className="mt-5">
            After the chain you want to transfer to is visible in your wallet,
            turn on dev mode. This is a web wallet exclusive feature, so be sure
            you're on that. Go to settings and enter the Advanced tab. Turn on
            Developer Mode.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={devMode}
            alt="Turn on Dev Mode"
          />

          <p className="mt-5">
            You can find the advanced IBC option in the bottom of the Keplr web
            wallet. Scroll down to find it, and be sure to grab the address of
            the wallet you want to send to along the way.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={locationAdvancedIBC}
            alt="Where to find Advanced IBC"
          />

          <p className="mt-5">
            Press the "Transfer" button. You will be brought to a "Select Asset"
            screen. If you have multiple assets in your wallet, select which one
            you're sending. Be sure it's on the same chain you want to send
            from, as assets on different chains can have the same name,
            especially if you've already done this transfer before.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={selectAsset}
            alt="Select asset for transfer"
          />

          <p className="mt-5">
            After selecting the asset to send, you will be brought to a screen
            with a dropdown bar, from which you can select the destination chain
            and the channel to send through. If your preferred chain and channel
            exist, select them. if not, select to create a new IBC transfer
            channel.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={newIBCChannel}
            alt="Keplr download"
          />

          <p className="mt-5">Select your destination chain.</p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={selectDestinationChain}
            alt="Select destination Chain"
          />

          <p className="mt-5">
            Given this is advanced IBC and not an intuitive UI, you will need to
            enter the channel ID. Your chain should have a table or list of
            acceptable channels. A warning will pop up if the channel you enter
            does not exist as a valid option.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={sourceChannelID}
            alt="Enter source channel ID"
          />

          <p className="mt-5">
            From this point, IBC operates in the same manner as ordinary
            transactions. Enter the destination wallet address. If you are
            sending to the Osmosis testnet, this should be an Osmosis address.
            Symphony testnet requires a Symphony address.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={enterWalletAddress}
            alt="Enter wallet address"
          />

          <p className="mt-5">Enter the amount to send.</p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={enterAmount}
            alt="Enter amount to send"
          />

          <p className="mt-5">
            Confirm the transaction, checking the details included.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={confirmIBCTransaction}
            alt="Confirm transaction"
          />

          <p className="mt-5">Verify the results from your account balances.</p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={verifyResults}
            alt="Verify results"
          />

          <p className="mt-5">
            <strong>Note:</strong> Keplr Mobile updates account balances much
            faster than the browser wallet. If your wallet balances have not
            updated in good time, consider checking your wallet through the
            mobile app rather than the web extension.
          </p>
        </div>

        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <table
            className="w-full max-w-[90%] mb-12.5 mt-10"
            style={{ border: '2px solid white', borderCollapse: 'collapse' }}
          >
            <caption
              style={{
                captionSide: 'top',
                textAlign: 'left',
                fontWeight: 'bold',
                padding: '4px',
                color: 'white',
              }}
            >
              Symphony Testnet Connections:
            </caption>
            <tr>
              <th
                style={{
                  border: '2px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                External Chain
              </th>
              <th
                style={{
                  border: '2px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                Symphony Channel
              </th>
              <th
                style={{
                  border: '2px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                External Channel
              </th>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                Osmosis Testnet
              </td>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                channel-0
              </td>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                channnel-8743
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                Stargaze Testnet
              </td>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                channel-4
              </td>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                channnel-998
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                Cosmos Testnet
              </td>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                channel-7
              </td>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                channnel-4300
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                Juno Testnet
              </td>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                channel-9
              </td>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                channnel-942
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                Archway Testnet
              </td>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                channel-10
              </td>
              <td
                style={{
                  border: '1px solid white',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                channnel-495
              </td>
            </tr>
          </table>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
