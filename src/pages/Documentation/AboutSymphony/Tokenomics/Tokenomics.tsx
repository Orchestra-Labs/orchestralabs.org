import { ImageModal, PageNavigator, SectionNavigator } from '@/components';

import tokenomics from '@/assets/images/symphony-tokenomics.png';

export const Tokenomics = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Tokenomics
        </h1>
        <p className="mt-10">
          Symphony's tokenomics are planned out to grant a greater share to the
          userbase while allowing portions to be kept back for fundraising or
          ecosystem incentives as needed. While this variant is only showing
          tokenomics at the chain level, check it out below!
        </p>
        <ImageModal imageSrc={tokenomics} altText="Symphony Tokenomics" />
      </div>
      <SectionNavigator navigationItems={[]} />
    </div>
  </div>
);
