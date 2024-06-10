export type NavItem = {
  id: number;
  label: string;
  url: string;
  target?: string;
  rel?: string;
};

export type NavigationItemProps = {
  id: number;
  label: string;
  href: string;
  subList?: { id: number; label: string; href: string }[];
};

export type DocumentationNavigationProps = {
  id: number;
  label: string;
  link: string;
  subLinks?: {
    id: number;
    label: string;
    link: string;
  }[];
};

export type DocumentationNavItem = {
  id: number;
  title: string;
  description: string;
  link: string;
};
