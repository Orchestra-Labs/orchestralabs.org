import ScrollSpy from 'react-scrollspy-navigation';

import { cn } from '@/helpers';
import { NavItem } from '@/types';

type SectionNavigatorProps = {
  navigationItems: NavItem[];
};

export const SectionNavigator = ({
  navigationItems,
}: SectionNavigatorProps) => {
  return (
    <div className="bg-background-dialog-bg py-5 md:py-0 md:bg-transparent md:min-w-[232px] md:w-[232px] lg:min-w-[272px] lg:w-[272px] xl:min-w-[312px] xl:w-[312px]">
      <div className="sticky top-[114px] md:mb-12.5 md:before:absolute md:before:h-full md:before:bg-background-dialog-bg md:before:w-0.5 md:before:left-2">
        <h3 className="pl-5 md:pl-10 text-body-md mt-1.5">ON THIS PAGE</h3>
        <ScrollSpy activeClass="text-blue" activeAttr offsetTop={124}>
          <nav className="w-max pt-2.5 mb-1.5 max-w-full">
            <ul className="flex flex-col gap-2.5">
              {navigationItems.map(item => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={cn(
                      'relative pl-5 md:pl-10 pr-5 md:pr-0 block truncate md:max-w-[260px] lg:max-w-[320px] hover:text-blue-darker',
                      'md:data-[active=true]:before:block before:hidden before:absolute before:w-4.5 before:h-4.5 before:border before:border-blue before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2',
                    )}
                  >
                    {item.label}
                  </a>
                  {item?.subList?.length ? (
                    <ul className="flex flex-col pt-2.5 gap-2.5">
                      {item?.subList?.map(subItem => (
                        <li key={subItem.id}>
                          <a
                            href={subItem.href}
                            className={cn(
                              'relative pl-10 md:pl-15 pr-5 md:pr-0 block truncate md:max-w-[240px] lg:max-w-[300px] hover:text-blue-darker',
                              'md:data-[active=true]:before:block before:hidden before:absolute before:w-4.5 before:h-4.5 before:border before:border-blue before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2',
                            )}
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <></>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </ScrollSpy>
      </div>
    </div>
  );
};
