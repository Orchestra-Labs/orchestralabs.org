import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import { BENEFITS_MAP, LEVELS_MAP, LEVELS } from './benefitsMap';
import { Check } from '@/assets/icons';

const HEADINGS = {
  1: {
    id: 'level-benefits',
    label: 'Level Benefits',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
];

export const LevelBenefits = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Level Benefits
        </h1>
        <p className="mt-10">
          Below you will find a list of benefits according to level reached
          within the ambassador program:
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <table
            className="w-full max-w-[90%] mb-12.5 mt-5 border-collapse"
            style={{ border: '2px solid white', borderCollapse: 'collapse' }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: '2px solid white',
                    textAlign: 'left',
                    padding: '8px',
                    color: 'white',
                  }}
                >
                  Benefit
                </th>
                {LEVELS.map(level => (
                  <th
                    key={level}
                    style={{
                      border: '2px solid white',
                      textAlign: 'center',
                      padding: '8px',
                      color: 'white',
                      minWidth: '80px',
                    }}
                  >
                    {level}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(BENEFITS_MAP).map(benefitId => (
                <tr key={benefitId}>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '8px',
                      color: 'white',
                    }}
                  >
                    {BENEFITS_MAP[parseInt(benefitId)]}
                  </td>
                  {LEVELS.map(level => (
                    <td
                      key={level}
                      className="border border-white text-center align-middle p-2 text-blue"
                    >
                      {LEVELS_MAP[level][parseInt(benefitId)] ? (
                        <Check style={{ margin: 'auto' }} />
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
