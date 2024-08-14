export type NavItem = {
  id: string;
  label: string;
  target?: string;
  rel?: string;
  href: string;
  description?: string;
  subList?: { id: string; label: string; href: string; description?: string }[];
};
