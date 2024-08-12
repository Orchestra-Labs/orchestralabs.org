import { PageNavigator, SectionNavigator } from '@/components';
import { Link } from 'react-router-dom';

export const Tokenomics = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Tokenomics
        </h1>
        <p className="mt-10">
          Symphony's tokenomics is planned out to grant a greater share to the
          userbase while allowing portions to be kept back for fundraising or
          ecosystem incentives as needed. To view this roadmap, check out the
          link below!
        </p>
        <p className="mt-5">
          {'See tokenomics on '}
          <Link
            to={
              'https://docs.google.com/spreadsheets/d/1NVGXcyUoRvqwty3p-gtIdJMQCDbkGuOp3D0beyMn3Ig/edit?usp=sharing'
            }
            target="_blank"
            className="text-blue hover:text-blue-darker underline mr-1"
          >
            Google Sheets
          </Link>
        </p>
      </div>
      <SectionNavigator navigationItems={[]} />
    </div>
  </div>
);
