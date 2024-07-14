export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Thomson Paving",
  description: "High volume, quality south african paving",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    whatsapp: "https://wa.me/+27828923675?text=Hello, how are you?",
    facebook: "https://www.facebook.com/share/mnCqKux17P9q5kFN/?mibextid=qi2Omg",
    mail: "mailto:kevin@thomsonpaving.co.za",
  },
};
