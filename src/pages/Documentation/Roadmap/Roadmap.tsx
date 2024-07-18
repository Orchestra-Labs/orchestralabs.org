import { PageNavigator, SectionNavigator } from '@/components';
import { Link } from 'react-router-dom';

export const Roadmap = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Roadmap
        </h1>
        <p className="mt-10">
          Symphony's roadmap is planned out through the next few years, with new
          projects spanning from the completion of the stablecoin exchange, all
          the way to payments and banking integrations. To view this roadmap,
          check out the link below!
        </p>
        <p className="mt-5">
          {'See roadmap on '}
          <Link
            to={
              'https://view.monday.com/6706378739-5f04a16a2ca7adf36478df8ec7a87edc?r=use1'
            }
            target="_blank"
            className="text-blue hover:text-blue-darker underline mr-1"
          >
            Monday.com
          </Link>
        </p>
      </div>
      <SectionNavigator navigationItems={[]} />
    </div>
  </div>
);
