import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import { BENEFITS_MAP, LEVELS_MAP, LEVELS } from './benefitsMap';
import { Check } from '@/assets/icons';

const HEADINGS = {
  0: {
    id: 'Benefits',
    label: 'Benefits',
  },
  1: {
    id: 'By Level',
    label: 'By Level',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '0',
    label: HEADINGS[0].label,
    href: `#${HEADINGS[0].id}`,
  },
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
];

export const LevelBenefits = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      Below you will find a list of benefits according to level reached within
      the ambassador program. In addition to the below, Instrumentalist earns an
      additional 25% on airdrops, Concertmaster earns an additional 50%, and
      Soloist earns an additional 100%!
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      {/* TODO: fix table to be horizontally and vertically scrollable (with sticky header and first column) */}
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
  </DocumentationLayout>
);
