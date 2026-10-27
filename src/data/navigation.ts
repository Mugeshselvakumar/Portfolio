export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Research', href: '/#research' },
  { label: 'Contact', href: '/#contact' },
];

export const SECTION_SCROLL_OFFSET = 80;
