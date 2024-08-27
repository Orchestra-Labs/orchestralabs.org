import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

import { Link } from 'react-router-dom';

import soundwave from '@/assets/images/symphony-soundwave.png';

const HEADINGS = {
  1: {
    id: 'nft-benefits',
    label: 'NFT Benefits',
  },
  2: {
    id: 'soundwave-nft',
    label: 'The Soundwave',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
];

const NFT_BENEFITS = [
  'Being whitelisted on future sales',
  'Exclusive airdrops',
  'Exclusive discord channel for NFT holders only',
  'Online events',
  'Holder-only giveaways and contests',
];

export const SoundwaveNFT = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Symphony's Soundwave
        </h1>
        <p className="mt-10">
          Symphony's Soundwave is an NFT used to designate a group of users that
          have helped amplify the message that the Symphony blockchain has
          arrived on the market. These NFTs can be obtained through giveaways on
          various marketing efforts that come on an as-announced basis. Those
          holding the Soundwave NFT receive the benefits outlined below:
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <ul className="mt-5">
            {NFT_BENEFITS.map(item => (
              <div className="flex mb-4 last:mb-0">
                <p>- {item}</p>
              </div>
            ))}
          </ul>
        </div>

        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-5">
            The image used for the Soundwave NFT can be viewed below or on{' '}
            <Link
              to="https://www.stargaze.zone/m/stars1z5qcmx9frn2y92cjy3k62gzylkezkphdwrx3675mvug3fd9l26fshdd85t/148%7C1"
              target="_blank"
              className="text-blue hover:text-blue-darker underline"
            >
              Stargaze
            </Link>
            .
            <img
              className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
              src={soundwave}
              alt="The Symphony Soundwave"
            />
          </p>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
