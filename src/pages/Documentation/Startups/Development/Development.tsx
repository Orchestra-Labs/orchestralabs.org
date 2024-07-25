import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  1: {
    id: 'prototyping',
    label: 'Prototyping',
  },
  2: {
    id: 'building',
    label: 'Building',
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
];

export const Development = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Development
        </h1>
        <p className="mt-10">
          After forming and validating the idea, the next step is
          implementation. A guide for this is below, as split into two phases:
          prototyping and building.
        </p>
        {/* TODO: link to fundraising page here */}
        <p className="mt-5">
          If you are not a developer, it is at this point you will need funding.
          This can come from personal funds or friends and family, but if you
          have a team and advisors, you can try one of the following:
          <ul className="list-disc ml-5 mt-2">
            <li>Incubators</li>
            <li>Accelerators</li>
            <li>Angel Investors</li>
          </ul>
        </p>
        <p className="mt-5">
          If you are a developer, then while you may have to learn a new
          development language or method, you can hold fundraising off until the
          building stage.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            Develop a proof of concept (POC) to test core functionalities. The
            POC should be able to demonstrate the key features and potential of
            your blockchain solution.
          </p>
          <p className="mt-5">
            <strong>Steps:</strong>
            <ul className="list-disc ml-5 mt-2">
              <li>
                Define the core features and functionalities of your concept.
              </li>
              <li>
                Identify the best language, environment, and/or tools to address
                these features and functions.
              </li>
              <li>
                Develop the POC with a focus on demonstrability of your
                solution.
              </li>
              <li>Conduct initial testing to identify and fix bugs.</li>
              <li>
                Gather user feedback (this can be your own) to refine the POC.
              </li>
            </ul>
          </p>
          <p className="mt-5">
            A refined POC may or may not be approaching an MVP, but regardless,
            it will be good to have to be able to demo your solution. Gather
            test data and make your demo available to others to prove your
            solution works. This will be useful later when trying to get funding
            or to gain assistance from others with bringing your product to
            market.
          </p>
          <p className="mt-5">
            <strong>Tip:</strong> Focus on creating a functional POC that
            addresses the core problem. Ensure that the POC is easy to use and
            showcases the unique value of your solution.
          </p>
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-5">
            <strong>Description:</strong> Developing the final blockchain
            product and preparing for deployment. This stage involves scaling up
            development efforts, enhancing the product based on MVP feedback,
            and ensuring readiness for a wider launch.
          </p>
          <p className="mt-5">
            <strong>Steps:</strong>
            <ul className="list-disc ml-5 mt-2">
              <li>Expand your development team to accelerate progress.</li>
              <li>
                Enhance and optimize the blockchain infrastructure for
                scalability and security.
              </li>
              <li>
                Conduct thorough testing, including security audits and
                performance benchmarks.
              </li>
              <li>Prepare comprehensive documentation and user guides.</li>
              <li>
                Plan and execute a marketing strategy for the product launch.
              </li>
            </ul>
          </p>
          <p className="mt-5">
            <strong>Funding:</strong> Series A funding to scale product
            development and expand the team.
          </p>
          <p className="mt-5">
            <strong>Tip:</strong> Establish a robust development team and ensure
            your blockchain infrastructure is secure and scalable. Pay attention
            to user experience and support to facilitate smooth adoption.
          </p>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
