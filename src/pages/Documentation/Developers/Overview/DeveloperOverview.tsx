import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  1: {
    id: 'about',
    label: 'About',
  },
  2: {
    id: 'notable-points',
    label: 'Notable Points',
  },
  3: {
    id: 'notable-points',
    label: 'Link to Osmosis',
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
  },
];

const DOCUMENTATION_NOTES: String[] = [
  "Symphony's prefix is 'symphony', not 'osmo'",
  "Symphony's endpoint information can be found at https://github.com/Orchestra-Labs/chain-registry/blob/master/testnets/symphonytestnet/chain.json",
  "Liquidity pools from the Osmosis documentation are cannot be used on Symphony.  Our focus is to support RWAs.  Osmosis's focus is to use liquidity pools for exchange management.",
];

const ECOSYSTEM: NavItem[] = [
  {
    id: '1',
    label: 'Osmosis Documentation',
    target: '_blank',
    href: 'https://docs.osmosis.zone/',
    description: 'Documentation from our parent chain',
  },
];

export const DeveloperOverview = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Developer Documentation
        </h1>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-10">
            Developer documentation is planned to be built out after fundraising
            completes. In the meantime, please use the Osmosis documentation
            link below, as Symphony was built from Osmosis.
          </p>
          <p className="mt-4">
            This is an open-source community effort, so feel free to suggest new
            topics, add new content, and provide examples wherever you think it
            might be helpful. All documentation can be edited via GitHub.
          </p>
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <ul className="mt-10">
            {DOCUMENTATION_NOTES.map(item => (
              <div className="flex mb-4 last:mb-0">
                <p>- {item}</p>
              </div>
            ))}
          </ul>
        </div>
        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <ListLinks listLinks={ECOSYSTEM} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
