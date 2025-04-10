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
import { ROUTES } from '@/config/';

const BENEFITS_ROWS = [
  {
    id: 1,
    src: image1,
    title: 'Fully Decentralized',
    description: 'Absolute decentralization for guaranteed access to trade',
  },
  {
    id: 2,
    src: image2,
    title: 'Dynamic Rebalancing',
    description:
      'Full withdrawals guaranteed for all through our adaptive algorithms',
  },
  {
    id: 3,
    src: image3,
    title: 'Robust Safeguards',
    description: 'Every stablecoin.  Every currency.  Fully secured',
  },
];

const FEATURED_LINKS_ROWS = [
  {
    id: 1,
    src: image4,
    title: 'Create a Wallet',
    description: 'Get started on your blockchain journey!',
    link: ROUTES.DOCUMENTATION.USERS.CREATE_WALLET,
    linkLabel: 'Get Started',
  },
  {
    id: 2,
    src: image5,
    title: 'Join the community',
    description: 'See our latest updates!',
    link: undefined,
    linkLabel: 'Join',
    showSocials: true,
  },
  {
    id: 3,
    src: image6,
    title: 'Read about Us',
    description: 'Learn about our approach!',
    link: ROUTES.DOCUMENTATION.ROOT,
    linkLabel: 'Learn More',
  },
];

const FEATURED_SECTION_TITLE = (
  <p className="text-center">
    Your Money, Your{' '}
    <span className="text-blue tracking-wide-20">SYMPHONY</span>
  </p>
);
const SECONDARY_SECTION_TITLE = (
  <p className="text-center">
    See How to <span className="text-blue">Get Started</span>
  </p>
);

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
