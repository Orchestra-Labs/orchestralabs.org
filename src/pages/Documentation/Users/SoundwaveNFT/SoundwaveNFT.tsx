import { ImageModal, DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

import soundwave from '@/assets/images/symphony-soundwave.png';

const HEADINGS = {
  0: {
    id: 'soundwave',
    label: "Symphony's Soundwave",
  },
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
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
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
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      Symphony's Soundwave is an NFT used to designate a group of users that
      have helped amplify the message that the Symphony blockchain has arrived
      on the market. The best way to get them is by completing tasks on{' '}
      <Link
        to="https://centrifuge.digital/symphony"
        target="_blank"
        className="text-blue hover:text-blue-darker underline"
      >
        Centrifuge
      </Link>
      .
    </p>
    <p className="mt-10">
      These NFTs can be obtained through giveaways on various marketing efforts
      that come on an as-announced basis. Those holding the Soundwave NFT
      receive the benefits outlined below:
    </p>

    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <ul className="mt-5">
        {NFT_BENEFITS.map(item => (
          <li key={item} className="mb-4">
            <p>- {item}</p>
          </li>
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
      </p>
      <ImageModal imageSrc={soundwave} altText="The Symphony Soundwave" />
    </div>
  </DocumentationLayout>
);
