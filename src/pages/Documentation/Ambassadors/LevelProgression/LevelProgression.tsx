import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import {
  ATTENDEE_RESPONSIBILITIES,
  AMPLIFIER_TASKS,
  CONCERTMASTER_RESPONSIBILITIES,
  CONCERTMASTER_TASKS,
  INSTRUMENTALIST_RESPONSIBILITIES,
  AMPLIFIER_RESPONSIBILITIES,
  INSTRUMENTALIST_TASKS,
  KOL_CRITERIA,
  SOLOIST_RESPONSIBILITIES,
  SOLOIST_TASKS,
  ATTENDEE_TASKS,
} from './levelTasksAndResponsibilities';
import { Link } from 'react-router-dom';

const HEADINGS = {
  1: {
    id: 'reach-requirements',
    label: 'Level Requirements',
  },
  2: {
    id: 'level-responsibilities',
    label: 'Level Responsibilities',
  },
};

const LEVEL_DETAILS = {
  reach: {
    attendee: {
      id: 'reaching-attendee',
      label: 'Attendee',
      href: '#reaching-attendee',
    },
    amplifier: {
      id: 'reaching-amplifier',
      label: 'Amplifier',
      href: '#reaching-amplifier',
    },
    instrumentalist: {
      id: 'reaching-instrumentalist',
      label: 'Instrumentalist',
      href: '#reaching-instrumentalist',
    },
    concertmaster: {
      id: 'reaching-concertmaster',
      label: 'Concertmaster',
      href: '#reaching-concertmaster',
    },
    soloist: {
      id: 'reaching-soloist',
      label: 'Soloist',
      href: '#reaching-soloist',
    },
  },
  responsibilities: {
    attendee: {
      id: 'attendee-responsibilities',
      label: 'Attendee',
      href: '#attendee-responsibilities',
    },
    amplifier: {
      id: 'amplifier-responsibilities',
      label: 'Amplifier',
      href: '#amplifier-responsibilities',
    },
    instrumentalist: {
      id: 'instrumentalist-responsibilities',
      label: 'Instrumentalist',
      href: '#instrumentalist-responsibilities',
    },
    concertmaster: {
      id: 'concertmaster-responsibilities',
      label: 'Concertmaster',
      href: '#concertmaster-responsibilities',
    },
    soloist: {
      id: 'soloist-responsibilities',
      label: 'Soloist',
      href: '#soloist-responsibilities',
    },
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
    subList: [
      LEVEL_DETAILS.reach.attendee,
      LEVEL_DETAILS.reach.amplifier,
      LEVEL_DETAILS.reach.instrumentalist,
      LEVEL_DETAILS.reach.concertmaster,
      LEVEL_DETAILS.reach.soloist,
    ],
  },
  {
    id: '2',
    label: HEADINGS[2].label,
    href: `#${HEADINGS[2].id}`,
    subList: [
      LEVEL_DETAILS.responsibilities.attendee,
      LEVEL_DETAILS.responsibilities.amplifier,
      LEVEL_DETAILS.responsibilities.instrumentalist,
      LEVEL_DETAILS.responsibilities.concertmaster,
      LEVEL_DETAILS.responsibilities.soloist,
    ],
  },
];

export const LevelProgression = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Level Progression
        </h1>
        <p className="mt-10">
          Below you will find a list of requirements-for and responsibilities-of
          each level within the ambassador program. Note both requirements and
          responsibilities of each level are subject to change as circumstances
          require.
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>

          <p id={LEVEL_DETAILS.reach.attendee.id} className="mt-8">
            <h3 className="text-h5 font-semibold text-blue">
              {LEVEL_DETAILS.reach.attendee.label}:
            </h3>
            <ul className="list-disc pl-5 mt-4">
              {ATTENDEE_TASKS.map(task => (
                <p className="mb-4">- {task}</p>
              ))}
            </ul>
          </p>

          <p id={LEVEL_DETAILS.reach.amplifier.id} className="mt-8">
            <h3 className="text-h5 font-semibold text-blue">
              {LEVEL_DETAILS.reach.amplifier.label}:
            </h3>
            <ul className="list-disc pl-5 mt-4">
              {AMPLIFIER_TASKS.map(task => (
                <p className="mb-4">- {task}</p>
              ))}
              <p className="mb-4">
                - Complete the{' '}
                <Link
                  to="https://forms.gle/toCtHcBW9s8QNEqP8"
                  target="_blank"
                  className="text-blue hover:text-blue-darker underline"
                >
                  Amplifier Application
                </Link>
                . and have your submissions approved.
              </p>
            </ul>
          </p>

          <p id={LEVEL_DETAILS.reach.instrumentalist.id} className="mt-8">
            <h3 className="text-h5 font-semibold text-blue">
              {LEVEL_DETAILS.reach.instrumentalist.label}:
            </h3>
            <ul className="list-disc pl-5 mt-4">
              {INSTRUMENTALIST_TASKS.map(task => (
                <p className="mb-4">- {task}</p>
              ))}
              <p className="mb-4">
                - Complete the{' '}
                <Link
                  to="https://forms.gle/yKScUhQv8Q7C6vEx7"
                  target="_blank"
                  className="text-blue hover:text-blue-darker underline"
                >
                  First Chair Application
                </Link>{' '}
                and be approved.
              </p>
            </ul>
          </p>

          <p id={LEVEL_DETAILS.reach.concertmaster.id} className="mt-8">
            <h3 className="text-h5 font-semibold text-blue">
              {LEVEL_DETAILS.reach.concertmaster.label}:
            </h3>
            <ul className="list-disc pl-5 mt-4">
              {CONCERTMASTER_TASKS.map(task => (
                <p className="mb-4">- {task}</p>
              ))}
            </ul>
          </p>

          <p id={LEVEL_DETAILS.reach.soloist.id} className="mt-8">
            <h3 className="text-h5 font-semibold text-blue">
              {LEVEL_DETAILS.reach.soloist.label}:
            </h3>
            <ul className="list-disc pl-5 mt-4">
              {SOLOIST_TASKS.map(task => (
                <p className="mb-4">- {task}</p>
              ))}
            </ul>
          </p>

          <p className="mt-8">
            <strong>Note:</strong> Level and time requirements may be waived for
            KOLs. To qualify as a KOL Ambassador, you must meet the following
            criteria:
          </p>
          <ul className="list-disc pl-5 mt-4">
            {KOL_CRITERIA.map(criteria => (
              <p className="mb-4">- {criteria}</p>
            ))}
          </ul>
        </div>

        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>

          <p id={LEVEL_DETAILS.responsibilities.attendee.id} className="mt-8">
            <h3 className="text-h5 font-semibold text-blue">
              {LEVEL_DETAILS.responsibilities.attendee.label}:
            </h3>
            <ul className="list-disc pl-5 mt-4">
              {ATTENDEE_RESPONSIBILITIES.map(responsibility => (
                <p className="mb-4">- {responsibility}</p>
              ))}
            </ul>
          </p>

          <p id={LEVEL_DETAILS.responsibilities.amplifier.id} className="mt-8">
            <h3 className="text-h5 font-semibold text-blue">
              {LEVEL_DETAILS.responsibilities.amplifier.label}:
            </h3>
            <ul className="list-disc pl-5 mt-4">
              {AMPLIFIER_RESPONSIBILITIES.map(responsibility => (
                <p className="mb-4">- {responsibility}</p>
              ))}
            </ul>
          </p>

          <p
            id={LEVEL_DETAILS.responsibilities.instrumentalist.id}
            className="mt-8"
          >
            <h3 className="text-h5 font-semibold text-blue">
              {LEVEL_DETAILS.responsibilities.instrumentalist.label}:
            </h3>
            <ul className="list-disc pl-5 mt-4">
              {INSTRUMENTALIST_RESPONSIBILITIES.map(responsibility => (
                <p className="mb-4">- {responsibility}</p>
              ))}
            </ul>
          </p>

          <p
            id={LEVEL_DETAILS.responsibilities.concertmaster.id}
            className="mt-8"
          >
            <h3 className="text-h5 font-semibold text-blue">
              {LEVEL_DETAILS.responsibilities.concertmaster.label}:
            </h3>
            <ul className="list-disc pl-5 mt-4">
              {CONCERTMASTER_RESPONSIBILITIES.map(responsibility => (
                <p className="mb-4">- {responsibility}</p>
              ))}
            </ul>
          </p>

          <p id={LEVEL_DETAILS.responsibilities.soloist.id} className="mt-8">
            <h3 className="text-h5 font-semibold text-blue">
              {LEVEL_DETAILS.responsibilities.soloist.label}:
            </h3>
            <ul className="list-disc pl-5 mt-4">
              {SOLOIST_RESPONSIBILITIES.map(responsibility => (
                <p className="mb-4">- {responsibility}</p>
              ))}
            </ul>
          </p>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
