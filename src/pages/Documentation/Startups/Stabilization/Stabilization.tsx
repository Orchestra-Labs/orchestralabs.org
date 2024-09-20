import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';

const HEADINGS = {
  1: {
    id: 'stabilization-stage',
    label: 'Stabilization Stage',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
];

export const Stabilization = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Stabilization
        </h1>
        <p className="mt-10">
          Stabilizing your company is crucial for long-term success. While
          previous stages are normally funded by loans and equity, you will be
          much more limited at this stage. Series C funding and beyond are what
          are usually used here. You should likely focus on partnerships,
          optimization of processes and expenses, and new areas for growth.
          Continue innovating, adapting to market changes, and expanding the
          ecosystem to stay competitive. Good luck!
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
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
