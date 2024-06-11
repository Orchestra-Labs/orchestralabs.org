export type NavItem = {
  id: number;
  label: string;
  target?: string;
  rel?: string;
  href: string;
  description?: string;
  subList?: { id: number; label: string; href: string }[];
};
