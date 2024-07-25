import { PageNavigator, SectionNavigator } from '@/components';
import { ROUTES } from '@/config/routes';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

const HEADINGS = {
  1: {
    id: 'funding-types',
    label: 'Types of Fundraising',
  },
  2: {
    id: 'funding-stages',
    label: 'Fundraising Stages',
  },
  3: {
    id: 'investor-platforms',
    label: 'Investor Platforms',
  },
  4: {
    id: 'launchpads',
    label: 'Launchpads',
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

const INVESTOR_PLATFORMS = [
  {
    label: 'Signal.nfx',
    target: '_blank',
    href: 'https://signal.nfx.com',
    description: 'A platform for finding and connecting with investors.',
  },
  {
    label: 'F6S',
    target: '_blank',
    href: 'https://www.f6s.com',
    description: 'A network of startup programs and investors.',
  },
  {
    label: 'OpenVC',
    target: '_blank',
    href: 'https://openvc.app',
    description: 'A directory of venture capital firms with open applications.',
  },
  {
    label: 'Buidl.so',
    target: '_blank',
    href: 'https://buidl.so',
    description: 'A community and resource hub for blockchain startups.',
  },
];

const LAUNCHPADS = [
  {
    label: 'GemPad',
    target: '_blank',
    href: 'https://gempad.app/presale/all',
    description: 'A multi-chain launchpad & crowdfund platform.',
  },
  {
    label: 'SolSale',
    target: '_blank',
    href: 'https://solsale.app/presale/all',
    description: 'A decentralized Solana launchpad without limits!',
  },
  {
    label: 'UNCX',
    target: '_blank',
    href: 'https://uncx.network/',
    description: 'A truly decentralized Launchpad!',
  },
];

export const Fundraising = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Fundraising
        </h1>
        <p className="mt-10">
          While Symphony will offer grant programs in the future, for now, other
          fundraising sources will be required for new projects. These options
          and when to use them are outlined below.
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            Different types of fundraising options include:
            <ul className="list-disc ml-5 mt-2">
              <li>
                Pre-Seed and Seed:
                <ul className="list-disc ml-5 mt-2">
                  <li>Angel Investors</li>
                  <li>Family and Friends</li>
                  <li>Incubators</li>
                  <li>Accelerators</li>
                </ul>
              </li>
              <li>
                Series A and beyond:
                <ul className="list-disc ml-5 mt-2">
                  <li>Venture Capital</li>
                  <li>Crowdfunding</li>
                </ul>
              </li>
            </ul>
          </p>
          <p className="mt-5">
            <strong>Tip:</strong> Some fundraising sites, like YCombinator,
            provide example documents for the post-money safe for US and/or
            Non-US companies. You can find YCombinator's version of these files{' '}
            <Link
              to="https://www.ycombinator.com/documents"
              target="_blank"
              className="text-blue hover:text-blue-darker underline"
            >
              here
            </Link>
            .
          </p>
        </div>

        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-5">
            The stages of fundraising include:
            <ul className="list-disc ml-5 mt-2">
              <li>
                <strong>Pre-Seed:</strong> Initial funding to validate the idea.
                <p>
                  <Link
                    to={ROUTES.DOCUMENTATION.STARTUPS.INCEPTION}
                    target="_blank"
                    className="text-blue hover:text-blue-darker underline"
                  >
                    Inception
                  </Link>{' '}
                  - Validate the initial idea and build a prototype.
                </p>
              </li>
              <li>
                <strong>Seed:</strong> Funds to develop an MVP and conduct
                market research.
                <p>
                  <Link
                    to={ROUTES.DOCUMENTATION.STARTUPS.DEVELOPMENT}
                    target="_blank"
                    className="text-blue hover:text-blue-darker underline"
                  >
                    Development
                  </Link>{' '}
                  - Build an MVP and conduct initial market research.
                </p>
              </li>
              <li>
                <strong>Series A:</strong> Scale the product, expand the team,
                and grow the user base.
                <p>
                  <Link
                    to={ROUTES.DOCUMENTATION.STARTUPS.EXPANSION}
                    target="_blank"
                    className="text-blue hover:text-blue-darker underline"
                  >
                    Expansion
                  </Link>{' '}
                  - Scale the product and grow your user base.
                </p>
              </li>
              <li>
                <strong>Series B and beyond:</strong> Further scaling, expanding
                into new markets, and improving the product.
                <p>
                  <Link
                    to={ROUTES.DOCUMENTATION.STARTUPS.STABILIZATION}
                    target="_blank"
                    className="text-blue hover:text-blue-darker underline"
                  >
                    Stabilization
                  </Link>{' '}
                  - Continue scaling and improve product features.
                </p>
              </li>
            </ul>
          </p>
          <p className="mt-5">
            <strong>Tip:</strong> The above is based on theory, and matches what
            you will find from most sources. In practice, all of the above
            require traction, unless you have some connection to the fund or
            successful entrepreneurs. This is one reason why having{' '}
            <Link
              to={ROUTES.DOCUMENTATION.STARTUPS.ADVISORS}
              target="_blank"
              className="text-blue hover:text-blue-darker underline"
            >
              advisors
            </Link>{' '}
            may help at those early stages.
          </p>
        </div>

        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <p className="mt-5">
            The following sources show investors for multiple stages of
            investment, from angels to later series investments:
            <ul className="list-disc ml-5 mt-2">
              {INVESTOR_PLATFORMS.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    target={item.target}
                    className="text-blue hover:text-blue-darker underline"
                  >
                    {item.label}
                  </Link>{' '}
                  - {item.description}
                </li>
              ))}
            </ul>
          </p>
        </div>

        <div id={HEADINGS[4].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[4].label}
          </h2>
          <p className="mt-5">
            For those with a good userbase already, these launchpads may help
            with funding and will not require waiting on an application:
            <ul className="list-disc ml-5 mt-2">
              {LAUNCHPADS.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    target={item.target}
                    className="text-blue hover:text-blue-darker underline"
                  >
                    {item.label}
                  </Link>{' '}
                  - {item.description}
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
