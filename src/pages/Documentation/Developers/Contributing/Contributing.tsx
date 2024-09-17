import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import { SOCIAL_LINKS } from '@/constants';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/config/routes';

import addDirectoryForNewPage from '@/assets/images/add-directory-for-new-page.png';
import addToNavigationPages from '@/assets/images/add-to-navigation-pages.png';

const HEADINGS = {
  1: {
    id: 'contributing-to-site',
    label: 'Adding Pages to the Site',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
];

export const Contributing = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Contributing as a Developer
        </h1>
        <p className="mt-10">
          There are several ways to contribute as a developer. If you're
          starting a new business and you're not sure how to start, check out
          our{' '}
          <Link
            className="text-blue hover:text-blue-darker"
            to={ROUTES.DOCUMENTATION.STARTUPS.ROOT}
          >
            startup guide
          </Link>{' '}
          . Otherwise, if you're looking to contribute code to our projects,
          check out our{' '}
          <Link
            className="text-blue hover:text-blue-darker"
            to={SOCIAL_LINKS[2].href}
          >
            GitHub
          </Link>
          . On areas you get stuck or are likely to get stuck, check out or add
          to the contribution guides below.
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
        </div>
        <p className="mt-5">
          When contributing to the site, if you're adding a page, add a
          directory for it under the appropriate category, as shown in the image
          below. If your addition would be more appropriate under a new
          category, add that instead.
        </p>
        <img
          className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[355px] section-container mt-4"
          src={addDirectoryForNewPage}
          alt="Stablecoin Trilemma"
        />

        <p className="mt-5">
          When contributing to the site, if you're adding a page, add a
          directory for it under the appropriate category, as shown in the image
          below. If your addition would be more appropriate under a new
          category, add that instead.
        </p>
        <img
          className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[355px] section-container mt-4"
          src={addToNavigationPages}
          alt="Stablecoin Trilemma"
        />

        <p className="mt-5">
          When ready with your contributions to the site's code, make a pull
          request.
        </p>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
