import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import { SOCIAL_LINKS } from '@/constants';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/config/';
import { ImageModal } from '@/components/ImageModal';

import commitStyle from '@/assets/images/commit-style.png';
import githubIssues from '@/assets/images/github-issues.png';

const HEADINGS = {
  0: {
    id: 'contributing',
    label: 'Contributing as a Dev',
  },
  1: {
    id: 'reporting-issues',
    label: 'Reporting Issues',
  },
  2: {
    id: 'readying-repository',
    label: 'Readying the Repository',
  },
  3: {
    id: 'commit-style',
    label: 'Commit Style',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
  { id: '3', label: HEADINGS[3].label, href: `#${HEADINGS[3].id}` },
];

export const Contributing = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    {/* TODO: split into two sections.  how to add issues, how to get started.  include recommendation to add issues to amend documentation if there is either outdated or insufficient documentation to get started */}
    <p className="mt-10">
      There are several ways to contribute as a developer. If you're starting a
      new business and you're not sure how to start, check out our{' '}
      <Link
        className="text-blue hover:text-blue-darker"
        to={ROUTES.DOCUMENTATION.STARTUPS.ROOT}
      >
        startup guide
      </Link>{' '}
      . Otherwise, if you're looking to contribute code to our projects, check
      out our{' '}
      <Link
        className="text-blue hover:text-blue-darker"
        to={SOCIAL_LINKS[2].href}
      >
        GitHub
      </Link>
      . On areas you get stuck or are likely to get stuck, check out or add to
      the contribution guides below.
    </p>

    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
    </div>
    <p className="mt-5">
      There are two ways to report issues. The first is to report it to us
      directly in the <strong>#support-chat</strong> channel in{' '}
      <Link
        className="text-blue hover:text-blue-darker"
        target="_blank"
        to={SOCIAL_LINKS[3].href}
      >
        Discord
      </Link>
      . The second is to create a Github issue by navigating to your chosen
      repository and selecting the issues tab, then clicking the "New Issue"
      button.
    </p>
    <ImageModal imageSrc={githubIssues} altText="GitHub Issues" />

    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
    </div>
    <p className="mt-5">
      Every one of our repositories has a top-level readme with instructions on
      getting started. Go to that file or check the first page of your chosen
      repository to find instructions on how to get started.
    </p>

    <div id={HEADINGS[3].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[3].label}
      </h2>
    </div>
    <p className="mt-5">
      When ready with your contributions to one of our repositories, make a pull
      request. Be sure to follow the{' '}
      <Link
        className="text-blue hover:text-blue-darker"
        to="https://www.conventionalcommits.org/en/v1.0.0-beta.2/"
      >
        conventional commits
      </Link>{' '}
      style, as it helps with the squash-merge commit descriptions.
    </p>
    <ImageModal imageSrc={commitStyle} altText="Commit Style" />
  </DocumentationLayout>
);
