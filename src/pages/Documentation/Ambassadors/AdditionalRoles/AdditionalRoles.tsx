import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  0: { id: 'additional-roles', label: 'Additional Roles' },
  1: {
    id: 'socialite',
    label: 'Socialite',
  },
  2: {
    id: 'artist',
    label: 'Artist',
  },
  3: {
    id: 'satirist',
    label: 'Satirist',
  },
  4: {
    id: 'promoter',
    label: 'Promoter',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
  { id: '3', label: HEADINGS[3].label, href: `#${HEADINGS[3].id}` },
  { id: '4', label: HEADINGS[4].label, href: `#${HEADINGS[4].id}` },
];

const SOCIALITE_HOW_TO_GET = [
  'Engagement in quality discussions in the community, with the community (not the admin)',
  'Participation in community events (calls, spaces, games, etc)',
  'Helping the newcomers',
];

const ARTIST_HOW_TO_GET = ['High quality art', 'Community recognition'];

const SATIRIST_HOW_TO_GET = ['High quality memes', 'Community recognition'];

const PROMOTER_HOW_TO_GET = [
  'Consistent high-quality tweets',
  "5 retweets from Orchestra Labs' Twitter",
];

const SOCIALITE_BENEFIT = [
  'Access to group with Mods and Orchestra Labs team',
  'Opportunity for virtual hangouts with team',
  'Early access to Symphony projects and dApps',
  'New role',
];

const ARTIST_BENEFIT = [
  'Addition to featured list on Twitter (improved chances of retweets)',
  'Extra Discord XP per image after reaching First Chair',
  'Increased likelihood of promotion via community leaders',
  'New role',
];

const SATIRIST_BENEFIT = [
  'Addition to featured list on Twitter (improved chances of retweets)',
  'Extra Discord XP per meme after reaching First Chair',
  'Increased likelihood of promotion via community leaders',
  'New role',
];

const PROMOTER_BENEFIT = [
  'Addition to featured list on Twitter (improved chances of retweets)',
  'Extra Discord XP per tweet after reaching First Chair',
  'Increased likelihood of promotion via community leaders',
  'New role',
];

export const AdditionaRoles = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      We also have additional roles that don't stand in the regulat level
      system. These can be gained (and lost) by level of activity in certain
      areas:
    </p>

    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <h3 className="mt-8 text-h5 font-semibold text-blue">How to get:</h3>
      <ul className="list-disc pl-5 mt-5">
        {SOCIALITE_HOW_TO_GET.map(task => (
          <p key={String(task)} className="mb-4">
            - {task}
          </p>
        ))}
      </ul>
      <h3 className="mt-8 text-h5 font-semibold text-blue">Benefit:</h3>
      <ul className="list-disc pl-5 mt-5">
        {SOCIALITE_BENEFIT.map(benefit => (
          <p key={String(benefit)} className="mb-4">
            - {benefit}
          </p>
        ))}
      </ul>
    </div>

    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <h3 className="mt-8 text-h5 font-semibold text-blue">How to get:</h3>
      <ul className="list-disc pl-5 mt-5">
        {ARTIST_HOW_TO_GET.map(task => (
          <p key={String(task)} className="mb-4">
            - {task}
          </p>
        ))}
      </ul>
      <h3 className="mt-8 text-h5 font-semibold text-blue">Benefit:</h3>
      <ul className="list-disc pl-5 mt-5">
        {ARTIST_BENEFIT.map(benefit => (
          <p key={String(benefit)} className="mb-4">
            - {benefit}
          </p>
        ))}
      </ul>
    </div>

    <div id={HEADINGS[3].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[3].label}
      </h2>
      <h3 className="mt-8 text-h5 font-semibold text-blue">How to get:</h3>
      <ul className="list-disc pl-5 mt-5">
        {SATIRIST_HOW_TO_GET.map(task => (
          <p key={String(task)} className="mb-4">
            - {task}
          </p>
        ))}
      </ul>
      <h3 className="mt-8 text-h5 font-semibold text-blue">Benefit:</h3>
      <ul className="list-disc pl-5 mt-5">
        {SATIRIST_BENEFIT.map(benefit => (
          <p key={String(benefit)} className="mb-4">
            - {benefit}
          </p>
        ))}
      </ul>
    </div>

    <div id={HEADINGS[4].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[4].label}
      </h2>
      <h3 className="mt-8 text-h5 font-semibold text-blue">How to get:</h3>
      <ul className="list-disc pl-5 mt-5">
        {PROMOTER_HOW_TO_GET.map(task => (
          <p key={String(task)} className="mb-4">
            - {task}
          </p>
        ))}
      </ul>
      <h3 className="mt-8 text-h5 font-semibold text-blue">Benefit:</h3>
      <ul className="list-disc pl-5 mt-5">
        {PROMOTER_BENEFIT.map(benefit => (
          <p key={String(benefit)} className="mb-4">
            - {benefit}
          </p>
        ))}
      </ul>
    </div>
  </DocumentationLayout>
);
