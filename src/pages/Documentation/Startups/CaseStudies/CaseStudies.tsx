import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

const HEADINGS = {
  1: {
    id: 'orchestra-labs',
    label: 'Orchestra Labs (Symphony)',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
];

export const CaseStudies = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Case Studies
        </h1>
        <p className="mt-10">
          Explore detailed case studies that illustrate the journey of building
          a successful startup. Learn how others built their MVP, reached out
          for fundraising, secured advisors, developed the product, and
          leveraged existing communities to foster a strong user base. Beginning
          with Orchestra Labs' own, these examples provide valuable insights
          into the challenges and triumphs faced during the startup journey.
        </p>
        {/* TODO: organize into subsections for faster, easier reading for startups */}
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            Orchestra Labs began its journey with Terra's collapse, which
            created a hole in the stablecoin space that needed to be filled.
            Many companies tried to step up by copying Terra's code, and others
            tried to provide centralized options. In these cases, the former
            failed and the latter contradicted the reason for blockchain
            technology's inception. This showed both an problem that required a
            solution and a dearth of true competitors within the area.
          </p>
          <p className="mt-5">
            The initial step was to fully form the idea, so a paper was written
            and the idea itself continuously reformed to mitigate vectors of
            attack. This paper was shown to others to have them try to attack
            the idea as well. Once fully formed, it needed a Proof of Concept
            (POC) that could showcase the potential of the algorithm.
          </p>
          <p className="mt-5">
            The founder of Orchestra Labs didn't know blockchain technology, but
            was a developer, so he learned what he needed to learn and built the
            POC, focusing on minimal requirements for a blockchain that could
            then host the test to prove the concept.
          </p>
          <p className="mt-5">
            With the POC in hand, the next challenge was to build the Minimum
            Viable Product (MVP). This, being blocked by smart contract
            compilation at the time, was a more daunting endeavor, amd required
            funding. For one year, the founder reached out to various investors,
            presenting his vision and the potential impact of his product. He
            failed.
          </p>
          <p className="mt-5">
            The founder used his own money to start Orchestra Labs and cut back
            his own lifestyle. He looked for the best developers and hired{' '}
            <Link
              to="https://evacodes.com/"
              className="text-blue hover:text-blue-darker underline"
            >
              EvaCodes
            </Link>
            , a top 10 developer in the space. This development effort was
            crucial in developing a MVP.
          </p>
          <p className="mt-5">
            With time freed up from development, the founder moved on to
            marketing, hiring freelancers whose efforts brought in an advisor.
            With efforts having reached one in the space and piquing interest,
            an advisor from{' '}
            <Link
              to="https://kleomed.es/"
              className="text-blue hover:text-blue-darker underline"
            >
              Kleomedes
            </Link>{' '}
            was brought on, whose knowledge and contacts in the space allowed
            for mroe organic marketing and faster growth. Other, hired advisors,
            did not prove quite so helpful. It's at this point Orchestra Labs
            could be thought of as a company.
          </p>
          <p className="mt-5">
            As development progressed, Orchestra Labs focused on refining and
            expanding their product. They rolled out an incentivized testnet and
            are now seeking to incorporate feedback from early users and
            advisors, ensuring that the product meets the needs of its target
            audience.
          </p>
          <p className="mt-5">
            To do this, recognizing the importance of community, Orchestra Labs
            turned to NFT communities. These communities provided a vibrant and
            engaged user base that is proving instrumental in building a strong
            following for the Symphony chain. By leveraging these communities,
            Orchestra Labs seems able to foster a sense of belonging and loyalty
            among its users.
          </p>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
