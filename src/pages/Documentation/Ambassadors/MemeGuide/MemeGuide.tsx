import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  1: {
    id: 'meme-guide',
    label: 'Meme Guide',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
];

const MEME_GUIDE = [
  {
    title: 'Choose a topic',
    content:
      'Start by choosing a relevant topic. Define the purpose of your meme, whether it’s to promote a product, educate, or simply entertain.',
  },
  {
    title: 'Pick a meme generator',
    content:
      'For beginners, you can use popular meme generators to generate memes (e.g. https://imgflip.com/memegenerator). These generators offer numerous templates, each with a basic layout, text, and images that can be edited.',
  },
  {
    title: 'Select a template',
    content:
      'Choose a template from https://imgflip.com/memetemplates that aligns with the tone and context of your message. You may also go for a template that is currently trending.',
  },
  {
    title: 'Write meme caption',
    content:
      "The next step is to write your meme caption on the template. The caption should be relevant to the message you want to convey and match the template. Make it concise to quickly capture the audience's attention. Try to be humorous and original.",
  },
  {
    title: 'Incorporate Symphony memes',
    content:
      'If needed, you can include Symphony memes created by the community in your own memes.',
  },
  {
    title: 'Share your meme on Twitter',
    content:
      'After you finish creating, share it with your friends on Twitter.',
  },
  {
    title: 'Share your meme on Discord',
    content:
      'You can then share the Twitter link on the #memes-lounge channel on the Symphony Discord.',
  },
];

export const MemeGuide = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Meme Guide
        </h1>
        <p className="mt-10">
          Below is a guide to creating memes for aspiring Symphony ambassadors:
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          {MEME_GUIDE.map((section, index) => (
            <div key={index} className="mt-10">
              <h3 className="text-h5 font-semibold text-blue">
                {section.title}
              </h3>
              <p className="mt-2">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
