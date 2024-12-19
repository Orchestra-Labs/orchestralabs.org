import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

import { Link } from 'react-router-dom';

const HEADINGS = {
  1: {
    id: 'staking',
    label: 'Staking',
  },
  2: {
    id: 'presales',
    label: 'Presales',
  },
  3: {
    id: 'nfts',
    label: 'NFTs',
  },
  3.1: {
    id: 'soundwave',
    label: 'Soundwave',
  },
  3.2: {
    id: 'geckies',
    label: 'Geckies',
  },
  3.3: {
    id: 'archies',
    label: 'Archies',
  },
  3.4: {
    id: 'snails',
    label: 'SNAILS',
  },
  3.5: {
    id: 'defi-geeks',
    label: 'Defi Geeks',
  },
  3.6: {
    id: 'defi-geeks-members',
    label: 'Defi Geeks Members',
  },
  3.7: {
    id: 'metahuahua',
    label: 'MetaHuahuas',
  },
  3.8: {
    id: 'creepy-companions',
    label: 'Creepy Companions',
  },
  3.9: {
    id: 'necropolis',
    label: 'Necropolis',
  },
  3.11: {
    id: 'pixel-wizards',
    label: 'Pixel Wizards',
  },
  3.12: {
    id: 'pixel-witches',
    label: 'Pixel Witches',
  },
  3.13: {
    id: 'cewts',
    label: 'CEWTs',
  },
  3.14: {
    id: 'bad-kids',
    label: 'Bad Kids',
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
  {
    id: '3',
    label: HEADINGS[3].label,
    href: `#${HEADINGS[3].id}`,
    subList: [
      {
        id: HEADINGS[3.1].id,
        label: HEADINGS[3.1].label,
        href: `#${HEADINGS[3.1].id}`,
        description:
          'stars1z5qcmx9frn2y92cjy3k62gzylkezkphdwrx3675mvug3fd9l26fshdd85t',
      },
      {
        id: HEADINGS[3.2].id,
        label: HEADINGS[3.2].label,
        href: `#${HEADINGS[3.2].id}`,
        description:
          'stars166kqwcu8789xh7nk07fcrdzek54205u8gzas684lnas2kzalksqsg5xhqf',
      },
      {
        id: HEADINGS[3.3].id,
        label: HEADINGS[3.3].label,
        href: `#${HEADINGS[3.3].id}`,
        description:
          'archway1r9qqfl2ptc96frn3tx4k2n967xc64uwxg2j9xn2rvsm882fu04kq3hutsv',
      },
      {
        id: HEADINGS[3.4].id,
        label: HEADINGS[3.4].label,
        href: `#${HEADINGS[3.4].id}`,
        description:
          'stars1qur5x273yhdn2lgz49e62lfp6tsthyku6jjw953gl3r7df2azmcshfq8gt',
      },
      {
        id: HEADINGS[3.5].id,
        label: HEADINGS[3.5].label,
        href: `#${HEADINGS[3.5].id}`,
        description:
          'stars1mg2hg6gppf78svvntya2065tvpuhfx6qf6zmv2z0n8hclpap7ycszq8v22',
      },
      {
        id: HEADINGS[3.6].id,
        label: HEADINGS[3.6].label,
        href: `#${HEADINGS[3.6].id}`,
        description:
          'stars1k6gdkepvwhhhdt6tk0auvkvansd3muqy0p98yedgwwarvcycxh8sex8dsf',
      },
      {
        id: HEADINGS[3.7].id,
        label: HEADINGS[3.7].label,
        href: `#${HEADINGS[3.7].id}`,
        description:
          'pasg1y6hjq8yvqzk6al4yrjl7yjkt87ujvhaq32c0qvt7627sk0j63d2q4dhzyw',
      },
      {
        id: HEADINGS[3.8].id,
        label: HEADINGS[3.8].label,
        href: `#${HEADINGS[3.8].id}`,
        description:
          'stars1h7pefpv3xqn7zr9a9x28zjtq9h0k5zc0dq8g0hp2q8xzzn6ry52sjpke38',
      },
      {
        id: HEADINGS[3.9].id,
        label: HEADINGS[3.9].label,
        href: `#${HEADINGS[3.9].id}`,
        description:
          'stars1gfzln3v6z0g3h2dl4waj6u7vlrjta4hszwpqwc5s55c63fgrt8ksaq89t8',
      },
      {
        id: HEADINGS[3.11].id,
        label: HEADINGS[3.11].label,
        href: `#${HEADINGS[3.11].id}`,
        description:
          'stars18d7ver7mmjdt06mz6x0pz09862060kupju75kpka5j0r7huearcsq0gyg0',
      },
      {
        id: HEADINGS[3.12].id,
        label: HEADINGS[3.12].label,
        href: `#${HEADINGS[3.12].id}`,
        description:
          'stars1mvnqhskpmwy8tjkuftwvnl56x5kumlgnqffaqpcscpnrnw3mep4s9z2s9m',
      },
      {
        id: HEADINGS[3.13].id,
        label: HEADINGS[3.13].label,
        href: `#${HEADINGS[3.13].id}`,
        description:
          'stars1wjq8m7n2wjfmfhrx7cdt04u3tkmf544d3clmedm7pjh8fs9qzteqfve4e0',
      },
    ],
  },
];

const QUALIFYING_COINS = ['OSMO', 'ATOM', 'ARCH', 'KUJI'];

const QUALIFYING_NFTS: NavItem[] = [
  {
    id: HEADINGS[3.1].id,
    label: HEADINGS[3.1].label,
    target: '_blank',
    href: `https://www.stargaze.zone/m/stars1z5qcmx9frn2y92cjy3k62gzylkezkphdwrx3675mvug3fd9l26fshdd85t/148%7C120`,
  },
  {
    id: HEADINGS[3.2].id,
    label: HEADINGS[3.2].label,
    target: '_blank',
    href: `https://www.stargaze.zone/m/geckies/tokens`,
  },
  {
    id: HEADINGS[3.3].id,
    label: HEADINGS[3.3].label,
    target: '_blank',
    href: `https://ambur.xyz/`,
  },
  {
    id: HEADINGS[3.4].id,
    label: HEADINGS[3.4].label,
    target: '_blank',
    href: `https://www.stargaze.zone/l/stars1qur5x273yhdn2lgz49e62lfp6tsthyku6jjw953gl3r7df2azmcshfq8gt`,
  },
  {
    id: HEADINGS[3.5].id,
    label: HEADINGS[3.5].label,
    target: '_blank',
    href: `https://www.stargaze.zone/m/stars1mg2hg6gppf78svvntya2065tvpuhfx6qf6zmv2z0n8hclpap7ycszq8v22/tokens`,
  },
  {
    id: HEADINGS[3.6].id,
    label: HEADINGS[3.6].label,
    target: '_blank',
    href: `https://www.stargaze.zone/p/defigeekscollection/tokens`,
  },
  {
    id: HEADINGS[3.7].id,
    label: HEADINGS[3.7].label,
    target: '_blank',
    href: `https://app.aaa-metahuahua.com/metahuahua/first/collection`,
  },
  {
    id: HEADINGS[3.8].id,
    label: HEADINGS[3.8].label,
    target: '_blank',
    href: `https://app.aaa-metahuahua.com/creepy/creepycompanions/collection`,
  },
  {
    id: HEADINGS[3.9].id,
    label: HEADINGS[3.9].label,
    target: '_blank',
    href: `https://www.stargaze.zone/p/necropolis-vault/tokens`,
  },
  {
    id: HEADINGS[3.11].id,
    label: HEADINGS[3.11].label,
    target: '_blank',
    href: `https://www.stargaze.zone/m/pixelwizards/tokens`,
  },
  {
    id: HEADINGS[3.12].id,
    label: HEADINGS[3.12].label,
    target: '_blank',
    href: `https://www.stargaze.zone/m/pixelwitches/tokens`,
  },
  {
    id: HEADINGS[3.13].id,
    label: HEADINGS[3.13].label,
    target: '_blank',
    href: `https://www.stargaze.zone/m/stars1wjq8m7n2wjfmfhrx7cdt04u3tkmf544d3clmedm7pjh8fs9qzteqfve4e0/tokens`,
  },
  {
    id: HEADINGS[3.14].id,
    label: HEADINGS[3.14].label,
    target: '_blank',
    href: `https://www.stargaze.zone/m/stars19jq6mj84cnt9p7sagjxqf8hxtczwc8wlpuwe4sh62w45aheseues57n420/tokens`,
  },
];

export const QualifyingUsers = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Qualifying For Testnet Rewards
        </h1>
        <p className="mt-5">
          Orchestra Labs has allocated 10% of the genesis supply of Melody
          (MLD), as airdrops for the incentivized testnet. To qualify for these
          airdropped testnet rewards, meet one of the criteria below when the
          snapshot is taken:
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            Stakers of {'>100'} USD of select Cosmos ecosystem coins:
          </p>
          <ul className="mt-5">
            {QUALIFYING_COINS.map(item => (
              <li key={String(item)} className="mb-4">
                <p className="ml-5">- {item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-5">
            Participants in the Symphony pre-sale rounds. Look out for
            announcements of these on our social media sites!
          </p>
        </div>

        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <p className="mt-5">Holders of select Cosmos ecosystem NFTs:</p>
          <ul className="mt-5">
            {QUALIFYING_NFTS.map(item => (
              <li key={String(item.label)} id={item.id} className="mb-4">
                <p className="ml-5">
                  -{' '}
                  <Link
                    to={item.href}
                    target={item.target}
                    className="text-blue hover:text-blue-darker underline mr-1"
                  >
                    {item.label}
                  </Link>
                </p>{' '}
              </li>
            ))}
          </ul>
          <p className="mt-5">
            <strong>Note:</strong> Soundwave NFTs are not sold, but rather
            earned through community building efforts as are announced
            regularly.
          </p>
        </div>
      </div>
    </div>
    <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
  </div>
);
