import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import { ROUTES } from '@/config/routes';

const HEADINGS = {
  1: {
    id: 'core-information',
    label: 'Core Information',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
];

const ABOUT_SYMPHONY_LINKS: NavItem[] = [
  {
    id: '1',
    label: 'The Stablecoin Trilemma',
    description: 'The challenges of stablecoin design',
    href: ROUTES.DOCUMENTATION.ABOUT.THE_STABLECOIN_TRILEMMA,
  },
  {
    id: '2',
    label: 'Why Decentralized RWAs',
    description: 'Why Symphony was made',
    href: ROUTES.DOCUMENTATION.ABOUT.WHY_DECENTRALIZED_RWAS,
  },
  {
    id: '3',
    label: "Symphony's Approach",
    description: 'How Symphony solves the stablecoin trilemma',
    href: ROUTES.DOCUMENTATION.ABOUT.THE_SYMPHONY_APPROACH,
  },
  {
    id: '4',
    label: "Symphony's Impact",
    description: "How Symphony's introduction affects the market",
    href: ROUTES.DOCUMENTATION.ABOUT.THE_SYMPHONY_APPROACH,
  },
  {
    id: '5',
    label: 'Size of the Opportunity',
    description: "Market sizes of Symphony's areas of impact",
    href: ROUTES.DOCUMENTATION.ABOUT.THE_SYMPHONY_APPROACH,
  },
  {
    id: '6',
    label: 'Tokenomics',
    description: 'Initial distribution of Melody coins on Symphony',
    href: ROUTES.DOCUMENTATION.ABOUT.TOKENOMICS,
  },
  {
    id: '7',
    label: 'Roadmap',
    description: 'Current and upcoming projects for Symphony developers',
    href: ROUTES.DOCUMENTATION.ABOUT.ROADMAP,
  },
];

export const AboutSymphonyOverview = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          About Symphony
        </h1>
        <p className="mt-10">
          This documentation is designed to help you connect with Symphony. It
          covers Symphony as a concept, explains the Symphony tech stack, and
          documents the ecosystem.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <ListLinks listLinks={ABOUT_SYMPHONY_LINKS} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
