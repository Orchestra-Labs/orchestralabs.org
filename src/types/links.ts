export type NavItem = {
  id: string;
  label: string;
  target?: string;
  rel?: string;
  href: string;
  description?: string;
  subList?: NavItem[];
};
