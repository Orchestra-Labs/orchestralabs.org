import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';
import {
  VERIFIED_RESPONSIBILITIES,
  CONCERTMASTER_RESPONSIBILITIES,
  CONCERTMASTER_TASKS,
  INSTRUMENTALIST_RESPONSIBILITIES,
  AMPLIFIER_RESPONSIBILITIES,
  KOL_CRITERIA,
  SOLOIST_RESPONSIBILITIES,
  SOLOIST_TASKS,
  VERIFIED_TASKS,
} from './levelTasksAndResponsibilities';
import { Link } from 'react-router-dom';

const HEADINGS = {
  0: {
    id: 'level-progression',
    label: 'Level Progression',
  },
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
    verified: {
      id: 'reaching-verified',
      label: 'Verified',
      href: '#reaching-verified',
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
    verified: {
      id: 'verified-responsibilities',
      label: 'Verified',
      href: '#verified-responsibilities',
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
    id: '0',
    label: HEADINGS[0].label,
    href: `#${HEADINGS[0].id}`,
  },
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
    subList: [
      LEVEL_DETAILS.reach.verified,
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
      LEVEL_DETAILS.responsibilities.verified,
      LEVEL_DETAILS.responsibilities.amplifier,
      LEVEL_DETAILS.responsibilities.instrumentalist,
      LEVEL_DETAILS.responsibilities.concertmaster,
      LEVEL_DETAILS.responsibilities.soloist,
    ],
  },
];

export const LevelProgression = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
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

      <p id={LEVEL_DETAILS.reach.verified.id} className="mt-8"></p>
      <h3 className="text-h5 font-semibold text-blue">
        {LEVEL_DETAILS.reach.verified.label}:
      </h3>
      <ul className="list-disc pl-5 mt-4">
        {VERIFIED_TASKS.map(task => (
          <p key={String(task)} className="mb-4">
            - {task}
          </p>
        ))}
      </ul>

      <p id={LEVEL_DETAILS.reach.amplifier.id} className="mt-8"></p>

      <h3 className="text-h5 font-semibold text-blue">
        {LEVEL_DETAILS.reach.amplifier.label}:
      </h3>
      <ul className="list-disc pl-5 mt-4">
        <p className="mb-4">
          - Complete tasks on{' '}
          <Link
            to="https://centrifuge.digital/symphony"
            target="_blank"
            className="text-blue hover:text-blue-darker underline"
          >
            Centrifuge
          </Link>{' '}
          and be approved.
        </p>
      </ul>

      <p id={LEVEL_DETAILS.reach.instrumentalist.id} className="mt-8"></p>
      <h3 className="text-h5 font-semibold text-blue">
        {LEVEL_DETAILS.reach.instrumentalist.label}:
      </h3>
      <ul className="list-disc pl-5 mt-4">
        <p className="mb-4">
          - Complete tasks on{' '}
          <Link
            to="https://centrifuge.digital/symphony"
            target="_blank"
            className="text-blue hover:text-blue-darker underline"
          >
            Centrifuge
          </Link>{' '}
          and be approved.
        </p>
      </ul>

      <p id={LEVEL_DETAILS.reach.concertmaster.id} className="mt-8"></p>
      <h3 className="text-h5 font-semibold text-blue">
        {LEVEL_DETAILS.reach.concertmaster.label}:
      </h3>
      <ul className="list-disc pl-5 mt-4">
        {CONCERTMASTER_TASKS.map(task => (
          <p key={String(task)} className="mb-4">
            - {task}
          </p>
        ))}
      </ul>

      <p id={LEVEL_DETAILS.reach.soloist.id} className="mt-8"></p>
      <h3 className="text-h5 font-semibold text-blue">
        {LEVEL_DETAILS.reach.soloist.label}:
      </h3>
      <ul className="list-disc pl-5 mt-4">
        {SOLOIST_TASKS.map(task => (
          <p key={String(task)} className="mb-4">
            - {task}
          </p>
        ))}
      </ul>

      <p className="mt-8">
        <strong>Note:</strong> Level and time requirements may be waived for
        KOLs. To qualify as a KOL Ambassador, you must meet the following
        criteria:
      </p>
      <ul className="list-disc pl-5 mt-4">
        {KOL_CRITERIA.map(criteria => (
          <p key={String(criteria)} className="mb-4">
            - {criteria}
          </p>
        ))}
      </ul>
    </div>

    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>

      <p id={LEVEL_DETAILS.responsibilities.verified.id} className="mt-8"></p>
      <h3 className="text-h5 font-semibold text-blue">
        {LEVEL_DETAILS.responsibilities.verified.label}:
      </h3>
      <ul className="list-disc pl-5 mt-4">
        {VERIFIED_RESPONSIBILITIES.map(responsibility => (
          <p key={String(responsibility)} className="mb-4">
            - {responsibility}
          </p>
        ))}
      </ul>

      <p id={LEVEL_DETAILS.responsibilities.amplifier.id} className="mt-8"></p>
      <h3 className="text-h5 font-semibold text-blue">
        {LEVEL_DETAILS.responsibilities.amplifier.label}:
      </h3>
      <ul className="list-disc pl-5 mt-4">
        {AMPLIFIER_RESPONSIBILITIES.map(responsibility => (
          <p key={String(responsibility)} className="mb-4">
            - {responsibility}
          </p>
        ))}
      </ul>

      <p
        id={LEVEL_DETAILS.responsibilities.instrumentalist.id}
        className="mt-8"
      ></p>
      <h3 className="text-h5 font-semibold text-blue">
        {LEVEL_DETAILS.responsibilities.instrumentalist.label}:
      </h3>
      <ul className="list-disc pl-5 mt-4">
        {INSTRUMENTALIST_RESPONSIBILITIES.map(responsibility => (
          <p key={String(responsibility)} className="mb-4">
            - {responsibility}
          </p>
        ))}
      </ul>

      <p
        id={LEVEL_DETAILS.responsibilities.concertmaster.id}
        className="mt-8"
      ></p>
      <h3 className="text-h5 font-semibold text-blue">
        {LEVEL_DETAILS.responsibilities.concertmaster.label}:
      </h3>
      <ul className="list-disc pl-5 mt-4">
        {CONCERTMASTER_RESPONSIBILITIES.map(responsibility => (
          <p key={String(responsibility)} className="mb-4">
            - {responsibility}
          </p>
        ))}
      </ul>

      <p id={LEVEL_DETAILS.responsibilities.soloist.id} className="mt-8"></p>
      <h3 className="text-h5 font-semibold text-blue">
        {LEVEL_DETAILS.responsibilities.soloist.label}:
      </h3>
      <ul className="list-disc pl-5 mt-4">
        {SOLOIST_RESPONSIBILITIES.map(responsibility => (
          <p key={String(responsibility)} className="mb-4">
            - {responsibility}
          </p>
        ))}
      </ul>
    </div>
  </DocumentationLayout>
);
