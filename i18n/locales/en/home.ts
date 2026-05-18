export default {
  meta: {
    title: "Home",
    description:
      "Nuxt starter kit for landing pages, company profiles, and static sites.",
  },
  hero: {
    title: "Build modern landing pages with Nuxt UI",
    description:
      "A production-ready starter with i18n, SEO, security, and dozens of Nuxt UI v4 components for your company site.",
    primaryCta: "Get started",
    secondaryCta: "Learn more",
  },
  features: {
    headline: "Features",
    title: "Everything you need",
    description:
      "Best-practice modules and patterns to ship your marketing site faster.",
    items: [
      {
        title: "Accessible",
        description: "Reka UI-based components with full ARIA support.",
        icon: "i-lucide-accessibility",
      },
      {
        title: "Customizable",
        description: "Tailwind Variants theming that matches your brand.",
        icon: "i-lucide-palette",
      },
      {
        title: "Responsive",
        description: "Mobile-first components for every screen size.",
        icon: "i-lucide-monitor-smartphone",
      },
      {
        title: "SEO ready",
        description: "Integrated sitemap, robots, and meta tags.",
        icon: "i-lucide-search",
      },
    ],
  },
  showcase: {
    headline: "Components",
    title: "Nuxt UI showcase",
    description: "Examples of common components used on landing pages.",
    alert: {
      title: "Starter kit is live",
      description: "Customize copy and theme in app.config.ts and i18n files.",
    },
    accordion: {
      q1: "Does this support static generation?",
      a1: "Yes. Run npm run generate for static output.",
      q2: "How do I add a language?",
      a2: "Add a locale in nuxt.config.ts and a folder under i18n/locales.",
      q3: "Can I use this for a company profile?",
      a3: "Absolutely. About and Contact pages are included as examples.",
    },
  },
  pricing: {
    headline: "Pricing",
    title: "Simple, transparent pricing",
    description: "Adapt these plans to your business model.",
    plans: [
      {
        title: "Free",
        price: "$0",
        description: "For personal projects",
        features: ["Core pages", "Community support"],
      },
      {
        title: "Pro",
        price: "$99",
        description: "For small teams",
        features: ["All components", "Priority support"],
        highlight: true,
        badge: "Popular",
      },
      {
        title: "Enterprise",
        price: "Custom",
        description: "For companies",
        features: ["Custom theming", "Dedicated support"],
      },
    ],
  },
  cta: {
    title: "Ready to launch your site?",
    description: "Fork this starter kit and start building in minutes.",
    primary: "Contact us",
    secondary: "View on GitHub",
  },
  logos: {
    title: "Trusted by product teams",
  },
};
