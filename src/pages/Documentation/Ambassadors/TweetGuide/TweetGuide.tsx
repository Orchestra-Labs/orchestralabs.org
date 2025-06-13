import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  0: {
    id: 'post-guide',
    label: 'Post Guide',
  },
  1: {
    id: 'how-to',
    label: 'How To',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
];

const POST_GUIDE = [
  {
    title: 'Write meaningful content',
    content:
      'Quantity isn’t quality. The focus should be on the quality of your posts. Try to post meaningful and relevant content that adds value to your audience.',
  },
  {
    title: 'Go deep',
    content:
      'Writing in-depth posts or threads can enhance your understanding of Symphony, and it also allows readers to learn more about Symphony through your content.',
  },
  {
    title: 'Proofread your tweet',
    content:
      'Grammar and spelling mistakes can significantly reduce the impact of your content. Take a minute to proofread your tweet. If necessary, utilize AI tools to correct grammar but **do not use AI to write the entire Tweet for you**.',
  },
  {
    title: 'Formatting your tweet',
    content:
      'Ensure your posts are well-formatted. Don’t make it just a large piece of text without breaking it up. Add spaces where needed, and use emojis wisely (1-2 per tweet).',
  },
  {
    title: 'Pay attention to tags/mentions',
    content:
      'Do not start a tweet by tagging an account. Usually, one or two tags per tweet are sufficient. Mention only the most relevant accounts related to the tweet. Over-tagging can lead to a decrease in tweet engagement.',
  },
  {
    title: 'Don’t abuse the hashtag',
    content:
      'Do not add multiple hashtags. While hashtags are an effective way to track events or topics, overuse can clutter your message and make your tweet harder to read.',
  },
  {
    title: 'Include images or videos',
    content:
      'Images, GIFs or videos can be powerful tools to enhance engagement and increase visibility on Twitter. Incorporating visual elements can help your content stand out.',
  },
];

export const TweetGuide = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      Below is a guide to creating posts for aspiring Symphony ambassadors:
    </p>

    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      {POST_GUIDE.map((section, index) => (
        <div key={index} className="mt-5">
          <h3 className="text-h5 font-semibold text-blue">{section.title}</h3>
          <p className="mt-2">{section.content}</p>
        </div>
      ))}
    </div>
  </DocumentationLayout>
);
