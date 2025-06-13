import { AutoNav, PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import { ReactNode } from 'react';

type DocumentationLayoutProps = {
  navigationItems: NavItem[];
  heading: { id: string; label: string };
  children?: ReactNode;
};

export const DocumentationLayout = ({
  navigationItems,
  heading,
  children,
}: DocumentationLayoutProps) => (
  <AutoNav navigationItems={navigationItems}>
    <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
      <PageNavigator />
      <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
        <div
          id={heading.id}
          className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey"
        >
          <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
            {heading.label}
          </h1>
          {children}
        </div>
        <SectionNavigator navigationItems={navigationItems} />
      </div>
    </div>
  </AutoNav>
);
