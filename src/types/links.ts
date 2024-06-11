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
  description?: string;
  subList?: { id: number; label: string; href: string }[];
};
