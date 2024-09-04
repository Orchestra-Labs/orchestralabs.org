import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import {
  AMPLIFIER_RESPONSIBILITIES,
  AMPLIFIER_TASKS,
  CONCERTMASTER_RESPONSIBILITIES,
  CONCERTMASTER_TASKS,
  FIRST_CHAIR_RESPONSIBILITIES,
  FIRST_CHAIR_TASKS,
  INSTRUMENTALIST_RESPONSIBILITIES,
  INSTRUMENTALIST_TASKS,
  KOL_CRITERIA,
  SOLOIST_RESPONSIBILITIES,
  SOLOIST_TASKS,
} from './levelTasksAndResponsibilities';

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
    firstChair: {
      id: 'reaching-first-chair',
      label: 'First Chair',
      href: '#reaching-first-chair',
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
    firstChair: {
      id: 'first-chair-responsibilities',
      label: 'First Chair',
      href: '#first-chair-responsibilities',
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
      LEVEL_DETAILS.reach.amplifier,
      LEVEL_DETAILS.reach.instrumentalist,
      LEVEL_DETAILS.reach.firstChair,
      LEVEL_DETAILS.reach.concertmaster,
      LEVEL_DETAILS.reach.soloist,
    ],
  },
  {
    id: '2',
    label: HEADINGS[2].label,
    href: `#${HEADINGS[2].id}`,
    subList: [
      LEVEL_DETAILS.responsibilities.amplifier,
      LEVEL_DETAILS.responsibilities.instrumentalist,
      LEVEL_DETAILS.responsibilities.firstChair,
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
          each level within the ambassador program:
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>

          <p id={LEVEL_DETAILS.reach.amplifier.id} className="mt-5">
            <strong>{LEVEL_DETAILS.reach.amplifier.label}:</strong>
            <ul className="list-disc pl-5">
              {AMPLIFIER_TASKS.map(task => (
                <p className="mb-4">- {task}</p>
              ))}
            </ul>
          </p>

          <p id={LEVEL_DETAILS.reach.instrumentalist.id} className="mt-5">
            <strong>{LEVEL_DETAILS.reach.instrumentalist.label}:</strong>
            <ul className="list-disc pl-5">
              {INSTRUMENTALIST_TASKS.map(task => (
                <p className="mb-4">- {task}</p>
              ))}
            </ul>
          </p>

          <p id={LEVEL_DETAILS.reach.firstChair.id} className="mt-5">
            <strong>{LEVEL_DETAILS.reach.firstChair.label}:</strong>
            <ul className="list-disc pl-5">
              {FIRST_CHAIR_TASKS.map(task => (
                <p className="mb-4">- {task}</p>
              ))}
            </ul>
          </p>

          <p id={LEVEL_DETAILS.reach.concertmaster.id} className="mt-5">
            <strong>{LEVEL_DETAILS.reach.concertmaster.label}:</strong>
            <ul className="list-disc pl-5">
              {CONCERTMASTER_TASKS.map(task => (
                <p className="mb-4">- {task}</p>
              ))}
            </ul>
          </p>

          <p id={LEVEL_DETAILS.reach.soloist.id} className="mt-5">
            <strong>{LEVEL_DETAILS.reach.soloist.label}:</strong>
            <ul className="list-disc pl-5">
              {SOLOIST_TASKS.map(task => (
                <p className="mb-4">- {task}</p>
              ))}
            </ul>
          </p>

          <p className="mt-5">
            <strong>Note:</strong> To qualify as a KOL Ambassador, you must meet
            the following criteria:
          </p>
          <ul className="list-disc pl-5">
            {KOL_CRITERIA.map(criteria => (
              <p className="mb-4">- {criteria}</p>
            ))}
          </ul>
        </div>

        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>

          <p id={LEVEL_DETAILS.responsibilities.amplifier.id} className="mt-5">
            <strong>{LEVEL_DETAILS.responsibilities.amplifier.label}:</strong>
            <ul className="list-disc pl-5">
              {AMPLIFIER_RESPONSIBILITIES.map(responsibility => (
                <p className="mb-4">- {responsibility}</p>
              ))}
            </ul>
          </p>

          <p
            id={LEVEL_DETAILS.responsibilities.instrumentalist.id}
            className="mt-5"
          >
            <strong>
              {LEVEL_DETAILS.responsibilities.instrumentalist.label}:
            </strong>
            <ul className="list-disc pl-5">
              {INSTRUMENTALIST_RESPONSIBILITIES.map(responsibility => (
                <p className="mb-4">- {responsibility}</p>
              ))}
            </ul>
          </p>

          <p id={LEVEL_DETAILS.responsibilities.firstChair.id} className="mt-5">
            <strong>{LEVEL_DETAILS.responsibilities.firstChair.label}:</strong>
            <ul className="list-disc pl-5">
              {FIRST_CHAIR_RESPONSIBILITIES.map(responsibility => (
                <p className="mb-4">- {responsibility}</p>
              ))}
            </ul>
          </p>

          <p
            id={LEVEL_DETAILS.responsibilities.concertmaster.id}
            className="mt-5"
          >
            <strong>
              {LEVEL_DETAILS.responsibilities.concertmaster.label}:
            </strong>
            <ul className="list-disc pl-5">
              {CONCERTMASTER_RESPONSIBILITIES.map(responsibility => (
                <p className="mb-4">- {responsibility}</p>
              ))}
            </ul>
          </p>

          <p id={LEVEL_DETAILS.responsibilities.soloist.id} className="mt-5">
            <strong>{LEVEL_DETAILS.responsibilities.soloist.label}:</strong>
            <ul className="list-disc pl-5">
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
