import { ReactNode, useEffect } from 'react';
import { NavItem } from '@/types';

type AutoNavProps = {
  navigationItems: NavItem[];
  offsetTop?: number;
  children?: ReactNode;
};

export const AutoNav = ({
  navigationItems,
  offsetTop = 72,
  children,
}: AutoNavProps) => {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');

    const flatItems = flattenNavItems(navigationItems);

    const targetItem = hash
      ? flatItems.find(
          item => item.id === hash || item.href.replace('#', '') === hash,
        )
      : flatItems[0];

    if (!targetItem || !targetItem.href.startsWith('#')) return;

    const el = document.getElementById(targetItem.href.slice(1));
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - offsetTop;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [navigationItems, offsetTop]);

  return <>{children}</>;
};

function flattenNavItems(items: NavItem[]): NavItem[] {
  return items.flatMap(item =>
    item.subList?.length ? [item, ...flattenNavItems(item.subList)] : [item],
  );
}
