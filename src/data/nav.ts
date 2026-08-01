// Interior top-bar navigation.

export const navItems = [
  { label: "Install", to: "/install" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const navCta = { label: "Book a site survey", to: "/contact" } as const;
