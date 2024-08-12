import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

import stablecoinTrilemma from '@/assets/images/stablecoin-trilemma.png';
import fiatBackedStablecoins from '@/assets/images/fiat-backed-stablecoins.png';
import algorithmicStablecoins from '@/assets/images/algorithmic-stablecoins.png';
import cryptoBackedStablecoins from '@/assets/images/crypto-backed-stablecoins.png';

const HEADINGS = {
  1: {
    id: 'about-the-trilemma',
    label: 'About the Trilemma',
  },
  2: {
    id: 'fragility-of-centralization',
    label: 'Fragility of Centralization',
  },
  3: {
    id: 'challenges-of-decentralization',
    label: 'Challenges of Decentralization',
  },
  4: {
    id: 'the-solution',
    label: 'The Solution',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
  {
    id: '2',
    label: HEADINGS[2].label,
    href: `#${HEADINGS[2].id}`,
  },
  {
    id: '3',
    label: HEADINGS[3].label,
    href: `#${HEADINGS[3].id}`,
  },
  {
    id: '4',
    label: HEADINGS[4].label,
    href: `#${HEADINGS[4].id}`,
  },
];

export const TheStablecoinTrilemma = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          The Stablecoin Trilemma
        </h1>
        <p className="mt-10">
          Stablecoins are the single most important instrument in crypto. All
          major trading pairs across spot and futures markets in centralized and
          decentralized venues are denominated in stablecoin pairs, with more
          than 90% of orderbook trades and over 70% of onchain settlements being
          stablecoin-denominated. Stablecoins settled more than $12 trillion
          onchain in 2023, constitute 2 out of the 5 largest assets in the
          space, greater than 40% of TVL in DeFi, and are by far the most
          utilized assets across decentralized money markets.
        </p>
        <p className="mt-5">
          Stablecoins are not only the foundation of the entire industry, but
          they also arguably represent the only crypto asset to have found true
          product-market fit globally, with more than 100 million users, the
          largest addressable market, and the greatest potential for revenue
          generation.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-5">
            New explorers of the world of decentralized finance and the market
            for stablecoins might wonder why so many different stablecoins are
            available to use while all of them just provide the utility of being
            a (relatively) stable cryptocurrency.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[355px] section-container mt-4"
            src={stablecoinTrilemma}
            alt="Stablecoin Trilemma"
          />
          <p className="mt-5">
            Until today, every stablecoin had to balance three main goals. The
            main target and purpose of a stablecoin are to hold a stable value
            pegged to the value of another asset, such as a fiat currency. This
            price stability can be achieved through different price-stability
            mechanisms. Unfortunately, in most stablecoin designs, the goal to
            achieve high price stability comes with a tradeoff in either the
            decentralization of the system or its capital efficiency.
          </p>
          <p className="mt-5">
            <Link
              to="https://stablecoins.wtf/resources/the-stablecoin-trillema"
              target="_blank"
              className="text-blue hover:text-blue-darker underline"
            >
              The stablecoin trilemma
            </Link>{' '}
            refers to the challenge of achieving three key properties in a
            single stablecoin:
            <ul className="list-disc pl-5">
              <li>
                Price Stability: The ability to maintain a stable value compared
                to the base asset.
              </li>
              <li>
                Capital Efficiency: The value needed to create one unit of the
                stablecoin.
              </li>
              <li>Decentralization: Operating in a decentralized manner.</li>
            </ul>
            Achieving all three simultaneously has proven difficult.
          </p>
        </div>
        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={fiatBackedStablecoins}
            alt="Fiat Backed Stablecoins"
          />
          <p className="mt-5">
            Centralized stablecoins address the stablecoin trilemma by
            compromising on decentralization. Stablecoins dependent on
            traditional financial infrastructure, such as USDC or USDT, provide
            price stability and capital efficiency but introduce:
            <ul className="list-disc pl-5">
              <li>
                Unhedgeable custodial risk with bond collateral in regulated
                bank accounts prone to censorship.
              </li>
              <li>
                Critical reliance on existing banking infrastructure and
                country-specific evolving regulations.
              </li>
              <li>
                "Return-free" risk for the user, as the issuer internalizes
                yield generated using backing assets while exporting the risk of
                depeg to users.
              </li>
            </ul>
          </p>
        </div>
        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <p className="mt-5">
            Decentralized stablecoins address the trilemma by focusing on
            decentralization, often at the expense of capital efficiency or
            price stability. These stablecoins, which do not rely on traditional
            banking or financial infrastructure, have faced their own issues:
            <ul className="list-disc pl-5">
              <img
                className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
                src={cryptoBackedStablecoins}
                alt="Crypto Backed Stablecoins"
              />
              <li className="mt-4">
                Crypto-backed stablecoins, also known as overcollateralized
                stablecoins, sacrifice capital efficiency, introducing a high
                up-front cost to users, which dissuades use. These
                overcollateralized stablecoins, such as DAI, will often
                auto-sell users when the price of the collateral drops.
              </li>
              <img
                className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
                src={algorithmicStablecoins}
                alt="Algorithmic Stablecoins"
              />
              <li className="mt-4">
                Algorithmic stablecoins face significant challenges with their
                mechanism design. The most well-known example, UST, demonstrated
                how these can be fragile and unstable. A common issue has been
                runaway inflation, which undermines price stability.
              </li>
            </ul>
          </p>
        </div>
        <div id={HEADINGS[4].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[4].label}
          </h2>
          <p className="mt-5">
            How can one construct a trust-minimized, scalable, and reasonably
            stable asset that is both unreliant on the banking system and
            systemically creates economic protocol-level returns for ecosystem
            participants?
          </p>
          <p className="mt-5">
            Symphony aims to address this challenge through a combination of
            multiple approaches, including algorithmic balancing and
            overcollateralization, and multiple safeguards such as its coin
            cycling and dual-elasticity systems. By combining several different
            approaches, Symphony seeks to solve the scalability "stablecoin
            trilemma" that previous decentralized stablecoin designs have faced,
            as well as the custodial risk deficiencies of centralized
            stablecoins.
          </p>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
