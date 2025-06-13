import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

import exampleAgreement from '@/assets/documents/example_advisor_agreement.pdf';

const HEADINGS = {
  0: {
    id: 'advisors',
    label: 'Advisors',
  },
  1: {
    id: 'finding-advisors',
    label: 'Finding Advisors',
  },
  2: {
    id: 'engaging-advisors',
    label: 'Engaging Advisors',
  },
  3: {
    id: 'leveraging-advisors',
    label: 'Leveraging Advisors',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
  { id: '3', label: HEADINGS[3].label, href: `#${HEADINGS[3].id}` },
];

export const Advisors = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      Securing the right advisors is crucial for the success of your blockchain
      project. This page will eventually include a list of recommended advisors
      to assist with your building process. Until then, this guide is split into
      three phases: finding, engaging, and leveraging advisors.
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <p className="mt-5">
        <strong>Finding Advisors:</strong> Identifying potential advisors with
        the right expertise and network is the first step. Consider industry
        leaders, experienced entrepreneurs, and investors.
      </p>
      <p className="mt-5">
        <strong>Steps:</strong>
      </p>
      <ul className="list-disc ml-5 mt-2">
        <li>
          Identify the areas where you need the most guidance (e.g., technical,
          business development, marketing).
        </li>
        <li>
          Research potential advisors who have a strong background in these
          areas.
        </li>
        <li>
          Utilize platforms like LinkedIn, industry conferences, and networking
          events to connect with potential advisors.
        </li>
        <li>Seek recommendations from your network and other entrepreneurs.</li>
        <li>
          Consider using platforms such as{' '}
          <Link
            to="Buidl.so"
            target="_blank"
            className="text-blue hover:text-blue-darker underline"
          >
            Buidl.so
          </Link>{' '}
          to find advisors.
        </li>
      </ul>
    </div>
    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <p className="mt-5">
        <strong>Engaging Advisors:</strong> Once you've identified potential
        advisors, the next step is to engage them effectively.
      </p>
      <p className="mt-5">
        <strong>Steps:</strong>
      </p>
      <ul className="list-disc ml-5 mt-2">
        <li>
          Prepare a compelling pitch that outlines your project, its potential,
          and why you need their expertise.
        </li>
        <li>
          Be clear about what you are offering in return, whether it's equity,
          tokens, or other forms of compensation.
        </li>
        <li>
          Set up initial meetings to discuss your project and gauge their
          interest and compatibility.
        </li>
        <li>
          Establish clear expectations and goals for the advisory relationship.
        </li>
        <li>
          Draft a formal agreement outlining the terms of their involvement and
          compensation. If you do not have, or cannot find an agreement for
          this, you can use our{' '}
          <Link
            to={exampleAgreement}
            target="_blank"
            className="text-blue hover:text-blue-darker underline"
          >
            example agreement
          </Link>
          .
        </li>
      </ul>
      <p className="mt-5">
        <strong>Tip:</strong> While an initial meeting for money may be
        necessary, only sign on advisors willing to work for equity. This aligns
        goals, and makes embezzling of funds less likely.
      </p>
    </div>
    <div id={HEADINGS[3].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[3].label}
      </h2>
      <p className="mt-5">
        <strong>Leveraging Advisors:</strong> Maximizing the value of your
        advisors' expertise and network is crucial for your project's growth.
      </p>
      <p className="mt-5">
        <strong>Steps:</strong>
      </p>
      <ul className="list-disc ml-5 mt-2">
        <li>
          Schedule regular meetings to keep them updated and seek their advice.
        </li>
        <li>
          Leverage their network to open doors to potential investors, partners,
          and customers.
        </li>
        <li>
          Encourage them to actively participate in strategy sessions and key
          decision-making processes.
        </li>
        <li>
          Utilize their feedback to refine your product, marketing strategies,
          and business model.
        </li>
        <li>
          Show appreciation and recognize their contributions to maintain a
          strong and positive relationship.
        </li>
      </ul>
      <p className="mt-5">
        <strong>Tip:</strong> Keep communication clear and consistent. Ensure
        that your advisors are well-informed about the progress and challenges
        of your project to provide the best possible guidance.
      </p>
    </div>
  </DocumentationLayout>
);
