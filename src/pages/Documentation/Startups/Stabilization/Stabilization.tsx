import { DocumentationLayout } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  0: {
    id: 'stabilization',
    label: 'Stabilization',
  },
  1: {
    id: 'stabilization-stage',
    label: 'Stabilization Stage',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  { id: '0', label: HEADINGS[0].label, href: `#${HEADINGS[0].id}` },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
];

export const Stabilization = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      Stabilizing your company is crucial for long-term success. While previous
      stages are normally funded by loans and equity, you will be much more
      limited at this stage. Series C funding and beyond are what are usually
      used here. You should likely focus on partnerships, optimization of
      processes and expenses, and new areas for growth. Continue innovating,
      adapting to market changes, and expanding the ecosystem to stay
      competitive. Good luck!
    </p>
    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>
      <p className="mt-5">Options for action at this stage include:</p>
      <ul className="list-disc ml-5 mt-2">
        <li>Series C funding</li>
        <li>Seeking new partnerships</li>
        <li>Optimization of processes and expensees</li>
        <li>Expansion into new markets</li>
        <li>Expansion into new products or services</li>
      </ul>
    </div>
  </DocumentationLayout>
);
