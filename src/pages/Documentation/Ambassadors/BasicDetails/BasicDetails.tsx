import { DocumentationLayout } from '@/components';
import { ROUTES } from '@/config/';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

const HEADINGS = {
  0: {
    id: 'basic-details',
    label: 'Basic Details',
  },
  1: {
    id: 'who-can-join',
    label: 'Who Can Join',
  },
  2: {
    id: 'what-will-you-do',
    label: 'What Will You Do',
  },
  3: {
    id: 'what-can-you-earn',
    label: 'What Can You Earn',
  },
  4: {
    id: 'how-to-join',
    label: 'How to Join',
  },
  5: {
    id: 'demotion',
    label: 'Demotion',
  },
  6: {
    id: 'code-of-conduct',
    label: 'Code of Conduct',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
  { id: '3', label: HEADINGS[3].label, href: `#${HEADINGS[3].id}` },
  { id: '4', label: HEADINGS[4].label, href: `#${HEADINGS[4].id}` },
  { id: '5', label: HEADINGS[5].label, href: `#${HEADINGS[5].id}` },
  { id: '6', label: HEADINGS[6].label, href: `#${HEADINGS[6].id}` },
];

const WHAT_CAN_YOU_EARN = [
  'Early Access to Ecosystem Projects',
  'Limited Edition Symphony Merch',
  'Invitations to Exclusive Symphony Events',
  'Exclusive Events with the Orchestra Labs Team',
  'And More!',
];

const CODE_OF_CONDUCT = [
  'Be original: Plagiarized or copied content (AI use is allowed) will lead to automatic demotions or removal from the ambassador program.',
  'Don’t spam: If you wish to contribute, focus on quality and avoid spamming. While your enthusiasm is appreciated, rewards will only be given for quality input.',
];

export const BasicDetails = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <p className="mt-5">
        Everyone in the Symphony Discord server will start off with the Verified
        role. As a result, everyone on Discord is automatically entered into the
        Ambassador Program! Writers, designers, developers, traders, memers, and
        more are welcome to join!
      </p>
    </div>

    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <p className="mt-5">
        Develop and execute new ways to amplify news about Symphony. Launch a
        diverse array of growth initiatives. Contribute through content
        creation, social media engagement, meme creation, blog writing,
        community management, and more.
      </p>
    </div>

    <div id={HEADINGS[3].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[3].label}
      </h2>
      <div className="list-disc pl-5 mt-5">
        {WHAT_CAN_YOU_EARN.map(item => (
          <p key={String(item)}>- {item}</p>
        ))}
      </div>
      <p className="mt-5">
        <strong>Note: </strong>A full list of what you can earn through this
        program can be found broken down by level{' '}
        <Link
          to={ROUTES.DOCUMENTATION.AMBASSADORS.LEVEL_BENEFITS}
          className="text-blue hover:text-blue-darker underline"
        >
          here
        </Link>{' '}
      </p>
    </div>

    <div id={HEADINGS[4].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[4].label}
      </h2>
      <p className="mt-5">
        Join our{' '}
        <Link
          to="https://discord.gg/symphonyblockchain"
          target="_blank"
          className="text-blue hover:text-blue-darker underline"
        >
          Discord
        </Link>
        , engage with the community, and complete tasks on{' '}
        <Link
          to="https://centrifuge.digital/symphony"
          target="_blank"
          className="text-blue hover:text-blue-darker underline"
        >
          Centrifuge
        </Link>
        .
      </p>
    </div>

    <div id={HEADINGS[5].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[5].label}
      </h2>
      <p className="mt-5">
        Extended periods of inactivity will result in demotion.
      </p>
    </div>

    <div id={HEADINGS[6].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[6].label}
      </h2>
      <div className="list-disc pl-5 mt-5">
        {CODE_OF_CONDUCT.map(item => (
          <p key={String(item)}>- {item}</p>
        ))}
      </div>
    </div>
  </DocumentationLayout>
);
