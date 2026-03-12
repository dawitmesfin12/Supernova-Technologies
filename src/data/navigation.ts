export interface NavItem {
  to: string;
  label: string;
}

export const navLinks: NavItem[] = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/how-we-work", label: "How we work" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact" },
];

export const footerLinks: NavItem[] = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/privacy", label: "Privacy" },
];
