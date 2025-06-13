import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  0: {
    id: 'example-tasks',
    label: 'Example Tasks',
  },
  1: {
    id: 'social-media-engagement',
    label: 'Social Media Engagement',
  },
  2: {
    id: 'text-content-creation',
    label: 'Text Content Creation',
  },
  3: {
    id: 'video-creation',
    label: 'Video Creation',
  },
  4: {
    id: 'art',
    label: 'Art',
  },
  5: {
    id: 'translation',
    label: 'Translation',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '0',
    label: HEADINGS[0].label,
    href: `#${HEADINGS[0].id}`,
  },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
  { id: '2', label: HEADINGS[2].label, href: `#${HEADINGS[2].id}` },
  { id: '3', label: HEADINGS[3].label, href: `#${HEADINGS[3].id}` },
  { id: '4', label: HEADINGS[4].label, href: `#${HEADINGS[4].id}` },
  { id: '5', label: HEADINGS[5].label, href: `#${HEADINGS[5].id}` },
];

const SOCIAL_MEDIA_ENGAGEMENT_EXAMPLES = [
  'Like, retweet and share posts',
  'Intelligent Tweet or quote tweet: Link',
  'Comment on tweets',
  'Create posts',
];

export const ExampleTasks = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      Here are example tasks to complete that will help with leveling up. The
      better the task, the more likely an application to reach First Chair is
      accepted. If you are not chosen right away as a First Chair, don’t worry —
      applications are evaluated often, and you can be given the role at some
      point in the near future.
    </p>

    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <p className="mt-5">
        Engage with social media posts from Orchestra's official channels or
        posts that mention Symphony. Create posts about Symphony ecosystem
        dApps.
      </p>
      <ul className="list-disc pl-5 mt-5">
        {SOCIAL_MEDIA_ENGAGEMENT_EXAMPLES.map((example, index) => (
          <p key={index} className="mb-4">
            - {example}
          </p>
        ))}
      </ul>
    </div>

    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <p className="mt-5">
        Write useful content to onboard new users, such as articles, or
        tutorials about Symphony and its ecosystem of dApps.
      </p>
    </div>

    <div id={HEADINGS[3].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[3].label}
      </h2>
      <p className="mt-5">
        Create video content about Symphony and its ecosystem.
      </p>
    </div>

    <div id={HEADINGS[4].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[4].label}
      </h2>
      <p className="mt-5">
        Make creative memes, infographics, stickers, or other art pieces.
      </p>
    </div>

    <div id={HEADINGS[5].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[5].label}
      </h2>
      <p className="mt-5">
        Translate official news into your local language and share it with
        communities.
      </p>
    </div>
  </DocumentationLayout>
);
