import image4 from '@/assets/images/info-image4.png';
import image5 from '@/assets/images/info-image5.png';
import image6 from '@/assets/images/info-image6.png';
import {
  AdvantagesSection,
  BlogArticlesSlider,
  HeroSection,
  TrustedCompaniesSection,
} from '@/sections';
import { InfoRowsSection } from '@/sections/InfoRowsSection';

import image1 from '@/assets/images/info-image1.png';
import image2 from '@/assets/images/info-image2.png';
import image3 from '@/assets/images/info-image3.png';
import { ROUTES } from '@/config/routes';

const BENEFITS_ROWS = [
  {
    id: 1,
    src: image1,
    title: 'Fully \n Decentralized',
    description: 'Absolute decentralization for guaranteed access to trade',
  },
  {
    id: 2,
    src: image2,
    title: 'Dynamic Rebalancing \n Mechanisms',
    description:
      'Full withdrawals guaranteed for all through our adaptive algorithms',
  },
  {
    id: 3,
    src: image3,
    title: 'Robust \n Safeguards',
    description: 'Every stablecoin.  Every currency.  Fully secured',
  },
];

const FEATURED_LINKS_ROWS = [
  {
    id: 1,
    src: image4,
    title: 'Create a Wallet',
    description: 'Get started on your blockchain journey',
    link: ROUTES.DOCUMENTATION.USERS.CREATE_WALLET,
    linkLabel: 'Get Started',
  },
  {
    id: 2,
    src: image5,
    title: 'Join the community',
    description:
      'Stay connected with our vibrant community of blockchain enthusiasts',
    link: undefined,
    linkLabel: 'Join',
    showSocials: true,
  },
  {
    id: 3,
    src: image6,
    title: 'Read about Us',
    description:
      'We have a lot of information to share.  Read about us and our approach!',
    link: ROUTES.DOCUMENTATION.ROOT,
    linkLabel: 'Learn More',
  },
];

const FEATURED_SECTION_TITLE =
  'Experience the true potential of tokenization with Symphony.';
const SECONDARY_SECTION_TITLE = 'See How to Get Started';

export const Home = () => (
  <div>
    <HeroSection />
    <InfoRowsSection
      revertType="even"
      rows={BENEFITS_ROWS}
      textAlign="center"
    />
    <InfoRowsSection
      title={FEATURED_SECTION_TITLE}
      secondaryTitle={SECONDARY_SECTION_TITLE}
      rows={FEATURED_LINKS_ROWS}
      children={<AdvantagesSection />}
    />
    <TrustedCompaniesSection />
    <BlogArticlesSlider />
  </div>
);
