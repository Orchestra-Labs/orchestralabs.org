import { ListLinks, PageNavigator, SectionNavigator } from '@/components';
import { ROUTES } from '@/config/routes';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';
import { ADDRESS_BOOKS } from './AddressBooks';
import { INSTALLATION_GUIDES } from './InstallationGuides';
import { SNAPSHOTS } from './Snapshots';
import { GENESIS_FILES } from './GenesisFiles';

const HEADINGS = {
  1: {
    id: 'installation-guides',
    label: 'Installation Guides',
  },
  2: {
    id: 'snapshots',
    label: 'Snapshots',
  },
  3: {
    id: 'genesis-files',
    label: 'Genesis Files',
  },
  4: {
    id: 'address-books',
    label: 'Address Books',
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
  {
    id: '4',
    label: HEADINGS[4].label,
    href: `#${HEADINGS[4].id}`,
  },
];

export const Validators = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Validators
        </h1>
        <p className="mt-10">
          For interested validators, you can find information on our genesis
          delegation criteria{' '}
          <Link
            to={ROUTES.DOCUMENTATION.DEVELOPERS.GENESIS_DELEGATION}
            className="text-blue hover:text-blue-darker underline"
          >
            here
          </Link>
          . If you are starting out or recovering, a list of installation guides
          and other relevant information required for starting up a new
          validator are below.
        </p>
        <p className="mt-5">
          For those interested in validators, a full list of our active and
          inactive validators can be found at the{' '}
          <Link
            to="https://testnet.cosmos.directory/symphonytestnet/validators"
            target="_blank"
            className="text-blue hover:text-blue-darker underline"
          >
            Cosmos Directory
          </Link>
          . This list includes information such as commission rate, rank,
          whether or not the validator has a security contract, and a link to
          their site!
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <ListLinks listLinks={INSTALLATION_GUIDES} />
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <ListLinks listLinks={SNAPSHOTS} />
        </div>
        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <ListLinks listLinks={GENESIS_FILES} />
        </div>
        <div id={HEADINGS[4].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[4].label}
          </h2>
          <ListLinks listLinks={ADDRESS_BOOKS} />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
