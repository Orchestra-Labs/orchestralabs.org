import { SocialLinks } from '@/components';
import { MAIN_LAYOUT_LINKS } from '@/constants';

import { NavItems } from '../NavItems';

export const Footer = () => {
  return (
    <footer className="relative bottom-0 inset-x-0">
      <div className="mx-auto max-w-[1278px] w-full flex flex-col px-6 py-[58px]">
        <div className="flex flex-col items-center gap-8">
          <NavItems
            items={MAIN_LAYOUT_LINKS}
            linkClassName="text-grey"
            className="flex-col gap-5 md:gap-8 md:flex-row mb-2.5 md:mb-0"
          />
          <SocialLinks linkClassName="text-grey" />
          <p className="text-grey text-sm lg:text-base">
            © 2024 Orchestra Labs, LLC. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
