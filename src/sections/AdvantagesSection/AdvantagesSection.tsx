const ROWS = [
  {
    id: 1,
    title: 'Any Currency',
    subtitle: 'Pay in anything!',
    shadowText: 'Any currency',
  },
  {
    id: 2,
    title: 'Any Metal',
    subtitle: 'Save in anything!',
    shadowText: 'Any metal',
  },
  {
    id: 3,
    title: 'Any Stablecoin',
    subtitle: 'Simplify your experience!',
    shadowText: 'Any Stablecoin',
  },
];

export const AdvantagesSection = () => (
  <section className="section-container pt-15 px-25px pb-7.5 md:pt-17.5 md:pb-22.5 md:px-6 xl:pt-22.5 xl:pb-[150px]">
    {ROWS.map(row => (
      <div
        key={row.id}
        className="relative mb-10 md:pl-19 md:pt-[114px] md:mb-15 xl:pl-[125px] last-of-type:mb-0"
      >
        <div className="flex flex-col items-center gap-4 md:items-start xl:gap-[23px]">
          <h3 className="font-semibold text-white text-h4 md:text-h3 xl:text-h1">
            {row.title}
          </h3>
          <p className="text-grey text-body-md md:text-body-lg xl:text-body-xl">
            {row.subtitle}
          </p>
          <span className="hidden md:block md:absolute md:top-0 md:text-neutral-shadow md:font-semibold md:text-[100px]/[192px] lg:text-[120px]/[168px] xl:text-[150px]/[210px]">
            {row.shadowText}
          </span>
        </div>
      </div>
    ))}
  </section>
);
