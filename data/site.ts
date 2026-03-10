export const company = {
  name: 'Gloud Tech Solutions',
  email: 'info@gloud.io',
  phone: '+92 346 5950255',
  tagline: 'Cloud-first software delivery for Pakistan, Ireland, and global teams.',
  description:
    'Gloud designs, builds, and scales digital products across web, mobile, growth marketing, cloud architecture, and product analytics.',
  headquarters: ['Islamabad, Pakistan', 'Dublin, Ireland'],
  founded: 2024
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export const services = [
  {
    slug: 'web-platforms',
    title: 'Web Platforms',
    summary: 'High-performance websites, portals, SaaS dashboards, and commerce experiences.',
    bullets: ['Next.js & React engineering', 'Headless CMS & APIs', 'Accessibility and Core Web Vitals'],
    icon: 'MonitorCog'
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    summary: 'Cross-platform mobile delivery for customer apps, field teams, and internal tools.',
    bullets: ['React Native apps', 'Offline-first workflows', 'App store release support'],
    icon: 'Smartphone'
  },
  {
    slug: 'digital-growth',
    title: 'Digital Marketing',
    summary: 'Performance marketing, SEO, CRO, paid social, and measurement you can trust.',
    bullets: ['Campaign launch and optimisation', 'SEO content systems', 'Attribution dashboards'],
    icon: 'Megaphone'
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    summary: 'Scalable infrastructure, automation pipelines, observability, and resilience.',
    bullets: ['AWS / Azure / GCP architecture', 'CI/CD and IaC', 'Monitoring and incident readiness'],
    icon: 'CloudCog'
  }
] as const;

export const caseStudies = [
  {
    name: 'FinEdge Client Portal',
    sector: 'Fintech',
    description:
      'Rebuilt a fragmented customer portal into a multilingual, secure, and measurable digital experience used across MENA and Europe.',
    results: ['42% faster task completion', '31% increase in qualified demo requests', '99.95% uptime target achieved']
  },
  {
    name: 'MedAxis Field App',
    sector: 'Healthcare operations',
    description:
      'Delivered a mobile workflow for field representatives with offline sync, geo-aware visit tracking, and supervisor analytics.',
    results: ['2.3x faster reporting', '68% fewer support tickets', 'Weekly release cadence']
  },
  {
    name: 'TradePilot Growth Engine',
    sector: 'B2B SaaS',
    description:
      'Unified website, analytics, paid campaigns, and CRM handoff to grow pipeline quality without ballooning acquisition spend.',
    results: ['57% increase in MQLs', '22% lower CAC', 'Single source of truth for attribution']
  }
] as const;

export const testimonials = [
  {
    quote:
      'Gloud brought product, engineering, and growth under one clear roadmap. Their team shipped quickly without sacrificing quality.',
    name: 'Aisling Murphy',
    role: 'Director of Digital, Dublin-based SaaS company'
  },
  {
    quote:
      'From architecture planning to launch analytics, they felt like an extension of our leadership team rather than an external vendor.',
    name: 'Hamza Rahman',
    role: 'COO, Pakistan operations platform'
  },
  {
    quote:
      'The balance of modern design, reliable engineering, and measurable marketing impact made the engagement stand out.',
    name: 'Sarah O’Connell',
    role: 'Head of Growth, EU technology brand'
  }
] as const;

export const faqs = [
  {
    question: 'Do you work with startups or enterprise teams?',
    answer:
      'Both. We support founders who need MVP velocity and established organisations that need governance, integrations, and cloud maturity.'
  },
  {
    question: 'Can Gloud act as an end-to-end digital partner?',
    answer:
      'Yes. Strategy, design, engineering, cloud delivery, QA, launch, optimisation, and analytics are all covered by the same delivery model.'
  },
  {
    question: 'How do you collaborate across Pakistan and Ireland?',
    answer:
      'We use an overlap-first operating model with shared sprint rituals, written updates, and service-level visibility for distributed teams.'
  }
] as const;

export const differentiators = [
  'Pakistan and Ireland delivery presence',
  'Product, engineering, marketing, and cloud in one team',
  'Testing-first release model with UI, integration, and E2E coverage',
  'Performance, accessibility, SEO, and analytics built in from day one'
] as const;
