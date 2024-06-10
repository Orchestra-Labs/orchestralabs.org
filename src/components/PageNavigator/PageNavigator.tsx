import { Link, NavLink } from 'react-router-dom';

import { cn } from '@/helpers';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui-kit';
import { DocumentationNavigationProps } from '@/types';

type PageNavigatorProps = {
  navigationItems: DocumentationNavigationProps[];
};

export const PageNavigator = ({ navigationItems }: PageNavigatorProps) => {
  return (
    <div className="mt-12.5 mx-25px md:m-0 bg-background-dialog-bg py-7.5 px-5 xl:py-10 xl:px-12.5 md:min-w-[256px] md:w-[256px] lg:min-w-[296px] lg:w-[296px] xl:min-w-[336px] xl:w-[336px] md:min-h-[430px] h-fit">
      <div className="flex flex-col gap-5">
        {navigationItems.map(navItem => (
          <div key={navItem.id}>
            {navItem?.subLinks?.length ? (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="[&[data-state=closed]>svg]:-rotate-90 [&[data-state=open]>svg]:rotate-0">
                    <Link
                      to={navItem.link}
                      className={cn(
                        'text-white font-normal hover:text-blue-darker',
                      )}
                    >
                      {navItem.label}
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent className="text-body-sm">
                    <div className="flex flex-col gap-5">
                      {navItem.subLinks.map(sublink => (
                        <Link
                          key={sublink.id}
                          to={sublink.link}
                          className={cn(
                            'w-fit text-white font-normal hover:text-blue-darker',
                          )}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <NavLink
                to={navItem.link}
                className={({ isActive }) =>
                  cn(
                    'text-white font-normal hover:text-blue-darker',
                    isActive && 'text-blue',
                  )
                }
              >
                {navItem.label}
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
