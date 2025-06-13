import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  0: {
    id: 'foundation-delegations',
    label: 'Foundation Delegations',
  },
  1: {
    id: 'delegation-breakdown',
    label: 'Delegation Breakdown',
  },
  2: {
    id: 'minimum-criteria',
    label: 'Minimum Criteria',
  },
  3: {
    id: 'selection-criteria',
    label: 'Selection Criteria',
  },
  4: {
    id: 'measuring-performance',
    label: 'Measuring Performance',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
  { id: '3', label: HEADINGS[3].label, href: `#${HEADINGS[3].id}` },
  { id: '4', label: HEADINGS[4].label, href: `#${HEADINGS[4].id}` },
];

const MINIMUM_CRITERIA = [
  'Run a Symphony testnet validator for at least three weeks with good performance.',
  'Not have been slashed or jailed within the testnet period',
  'Not associated with a centralized exchange',
  'Have less than 10% commission',
  'Dedicated email address for communication of emergency fixes and upgrades',
  'Not running infrastructure on Hetzner',
];

const SELECTION_CRITERIA = [
  'Proven track record on Symphony testnet',
  'Running full nodes and participating in governance on other chains',
  'Dedicated teams with experience in other networks',
  'Consistent use of monitoring and alerting systems',
  'Contributions to the Symphony community including documentation, education, and promotion',
  'Use of self-hosted and bare metal validators',
  'Geographical decentralization',
  'Strategic partnerships with Symphony',
  'Provision of services, applications, and dashboards',
  'Operation of IBC relayers',
];

const PERFORMANCE_METRICS = [
  'Success rate for heartbeat messages',
  'Participation in keygen and sign protocols',
  'Jail frequency and downtime',
  'Support for external chains including IBC relaying and validating',
  'Responsiveness to network upgrades',
  'Promotion/discussion on social media and involvement in community initiatives',
];

export const FoundationDelegation = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      The Foundation Delegation Program is one of the programs through which
      Orchestra Labs delegates stakes to mainnet validators. The program will
      delegate stakes to validators for a four-month period starting from the
      coin launch. Changes in delegation might occur in special circumstances,
      such as poor validator performance.
    </p>
    <p className="mt-5">
      This program aims to incentivize high performing validators through the
      delegation of protocol-owned MLD to validators against carefully curated
      selection guidelines. The foundation delegation program is expected to
      start at a 1M MLD delegation and will remain constant throughout the
      initial 4-month period except for exceptional circumstances.
    </p>

    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <p className="mt-5">
        30 validators will be selected to receive delegations at mainnet launch.
        Validators are divided into two performance-based buckets:
      </p>
      <ul className="mt-5">
        <li className="mb-4">
          <p className="ml-5">
            - <strong>Bucket 1:</strong> 12 validators with 2x the delegation of
            Bucket 2
          </p>
        </li>
        <li className="mb-4">
          <p className="ml-5">
            - <strong>Bucket 2:</strong> 18 validators
          </p>
        </li>
      </ul>
      <p className="mt-5">
        For example, at launch each validator will be delegated:
      </p>
      <ul className="mt-5">
        <li className="mb-4">
          <p className="ml-5">
            - <strong>Bucket 1:</strong> 476,190 MLD{' '}
          </p>
        </li>
        <li className="mb-4">
          <p className="ml-5">
            - <strong>Bucket 2:</strong> 238,095 MLD{' '}
          </p>
        </li>
      </ul>
      <p className="mt-5">
        Existing validators with current delegations will not lose their stakes
        but may receive additional coins if eligible.
      </p>
    </div>

    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <p className="mt-5">Minimum Criteria:</p>
      <ul className="mt-5">
        {MINIMUM_CRITERIA.map(item => (
          <li className="mb-4" key={item}>
            <p className="ml-5">- {item}</p>
          </li>
        ))}
      </ul>
    </div>

    <div id={HEADINGS[3].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[3].label}
      </h2>
      <p className="mt-5">Selection Criteria:</p>
      <ul className="mt-5">
        {SELECTION_CRITERIA.map(item => (
          <li className="mb-4" key={item}>
            <p className="ml-5">- {item}</p>
          </li>
        ))}
      </ul>
    </div>

    <div id={HEADINGS[4].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[4].label}
      </h2>
      <p className="mt-5">Performance metrics include:</p>
      <ul className="mt-5">
        {PERFORMANCE_METRICS.map(item => (
          <li className="mb-4" key={item}>
            <p className="ml-5">- {item}</p>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        Next Steps
      </h2>
      <p className="mt-5">
        Follow Orchestra Labs on X or join the Discord and Telegram for updates.
      </p>
      <p className="mt-5">
        Look out for opportunities to earn Symphony Soundwave NFTs.
      </p>
      <p className="mt-5">
        Share the testnet news for a chance to win Symphony Soundwave NFTs.
      </p>
      <p className="mt-5">
        Join us in this exciting journey to experience the future of stablecoins
        and RWAs with Symphony!
      </p>
    </div>
  </DocumentationLayout>
);
