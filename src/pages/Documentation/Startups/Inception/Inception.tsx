import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  0: {
    id: 'business-inception',
    label: 'Business Inception',
  },
  1: {
    id: 'identify-problem',
    label: 'Identify the Problem',
  },
  2: {
    id: 'gather-data',
    label: 'Gather Data',
  },
  3: {
    id: 'brainstorm',
    label: 'Brainstorm',
  },
  4: {
    id: 'analyze-options',
    label: 'Analyze Options',
  },
  5: {
    id: 'test-options',
    label: 'Test Options',
  },
  6: {
    id: 'draw-conclusions',
    label: 'Draw Conclusions',
  },
  7: {
    id: 'implement-solution',
    label: 'Implement the Solution',
  },
  8: {
    id: 'review-reflect',
    label: 'Review and Reflect',
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
  { id: '7', label: HEADINGS[7].label, href: `#${HEADINGS[7].id}` },
  { id: '8', label: HEADINGS[8].label, href: `#${HEADINGS[8].id}` },
];

export const Inception = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      The first step with any blockchain startup is forming the idea. A
      walkthrough for problem solving is below, which you can use as a guide
      through idea formation. This walkthrough follows "The Sherlock Method",
      with the intent being to mimic natural thought processes, but to apply
      them intentionally, making yourself more efficient.
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <p className="mt-5">
        Clearly identify the problem you are trying to solve. Given a business
        application, this should address a market gap or need.
      </p>
      <p className="mt-5">
        Given identification of a problem is a problem in itself, you may need
        to use these problem solving steps as a way to solve the problem that is
        "what should my business be".
      </p>
    </div>
    <div id={HEADINGS[2].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[2].label}
      </h2>
      <p className="mt-5">
        Collect all relevant information and data about the problem. Research
        the market, competitors, potential customers, previous attempts at
        solving this problem, etc.
      </p>
    </div>
    <div id={HEADINGS[3].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[3].label}
      </h2>
      <p className="mt-5">
        Based on the data, come up with possible solutions to the problem.
        Brainstorm different approaches to address the problem. Keep this
        open-ended. Do not write off solutions at this stage. Current attempts
        at a solution may be included, with the intent to try to find why those
        don't work or how they can be improved.
      </p>
    </div>
    <div id={HEADINGS[4].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[4].label}
      </h2>
      <p className="mt-5">
        Evaluate each hypothesis, looking for consistency and evidence. Narrow
        down the list to the most promising solutions. Order these by most
        likely to least likely to solve the problem.
      </p>
    </div>
    <div id={HEADINGS[5].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[5].label}
      </h2>
      <p className="mt-5">
        Perform experiments or further analysis to test the validity of each
        hypothesis. Validate your assumptions through testing. Testing, at this
        stage, can be whiteboarded problems, thought experiments, or further
        research to try and disprove the hypothesis.
      </p>
      <p className="mt-5">
        It may be a good idea at this stage to validate your solutions by
        querying others for opinions on those solutions to see if they can find
        issues you overlooked.
      </p>
    </div>
    <div id={HEADINGS[6].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[6].label}
      </h2>
      <p className="mt-5">
        Decide which hypothesis is most likely correct based on the tests.
        Choose the best solution to pursue, based on your criteria, whether that
        is the most effective option, the option most closely aligned to
        regulations, or just the most palatable option.
      </p>
    </div>
    <div id={HEADINGS[7].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[7].label}
      </h2>
      <p className="mt-5">
        Apply your chosen solution to the problem. Start building your business
        around this solution.
      </p>
    </div>
    <div id={HEADINGS[8].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[8].label}
      </h2>
      <p className="mt-5">
        Assess the outcome and reflect on the process to improve future
        problem-solving efforts. Learn from the experience and iterate if
        necessary.
      </p>
    </div>
  </DocumentationLayout>
);
