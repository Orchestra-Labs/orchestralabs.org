import image1 from '@/assets/images/schema.png';
import image2 from '@/assets/images/schema2.png';
import image3 from '@/assets/images/schema3.png';

const ROWS = [
  {
    id: 1,
    src: image1,
    alt: 'Level 1: Arbitrage Rebalancing',
  },
  {
    id: 2,
    src: image2,
    alt: 'Level 2: Supply-Side Rebalancing',
  },
  {
    id: 3,
    src: image3,
    alt: 'Level 3: 2:1 Elastic Reserves',
  },
];

export const HowItWorksSection = () => (
  <section className="py-15 bg-background-dark-grey md:py-[70px] md:px-6 lg:py-[90px]">
    <div className="max-w-[1280px] mx-auto">
      <h2 className="text-center font-semibold text-white text-center mb-[15px] text-h4 md:mb-2.5 md:text-h2 xl:mb-5 xl:text-display2">
        How it works
      </h2>
      {ROWS.map(row => (
        <div
          key={row.id}
          className="py-25px px-[34px] border-b border-grey21 md:py-12.5 md:px-0 xl:py-17.5 last-of-type:border-b-0 last-of-type:pb-0"
        >
          <div className="flex flex-col md:px-[16.5%] xl:px-[17%]">
            <img className="w-full" src={row.src} alt={row.alt} />
          </div>
        </div>
      ))}
    </div>
  </section>
);
