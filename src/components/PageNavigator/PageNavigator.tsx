import { Link, NavLink, useLocation } from 'react-router-dom';

import { cn } from '@/helpers';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui-kit';
import { DOCUMENTATION_NAVIGATION } from '@/config/';

export const PageNavigator = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const documentationNavigationItems = Object.values(DOCUMENTATION_NAVIGATION);

  return (
    <div className="mt-12.5 mx-25px md:m-0 bg-background-dialog-bg py-7.5 px-5 xl:py-10 xl:px-12.5 md:min-w-[206px] md:w-[206px] lg:min-w-[246px] lg:w-[246px] xl:min-w-[286px] xl:w-[286px] md:min-h-[430px] h-fit">
      <div className="flex flex-col gap-5">
        {documentationNavigationItems.map(navItem => {
          const isCurrentPathInSubList =
            navItem.href == currentPath ||
            navItem.subList?.some(subPath => subPath.href === currentPath);

          return (
            <div key={navItem.id}>
              {navItem?.subList?.length ? (
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={isCurrentPathInSubList ? 'item-1' : ''}
                  className="w-full"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="[&[data-state=closed]>svg]:-rotate-90 [&[data-state=open]>svg]:rotate-0">
                      <Link
                        to={navItem.href}
                        className={cn(
                          'text-white font-normal hover:text-blue-darker',
                          navItem.href === currentPath && 'text-blue',
                        )}
                      >
                        {navItem.label}
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent className="text-body-sm">
                      <div className="flex flex-col gap-5">
                        {navItem.subList.map(subPath => (
                          <Link
                            key={subPath.id}
                            to={subPath.href}
                            className={cn(
                              'w-fit text-white font-normal hover:text-blue-darker',
                              subPath.href === currentPath && 'text-blue',
                            )}
                          >
                            {subPath.label}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <NavLink
                  to={navItem.href}
                  className={() =>
                    cn(
                      'text-white font-normal hover:text-blue-darker',
                      navItem.href === currentPath && 'text-blue',
                    )
                  }
                >
                  {navItem.label}
                </NavLink>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
