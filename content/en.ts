import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    title: 'Nomad Nexus — Official Huawei & NetApp Distributor in Kyrgyzstan',
    description:
      'Nomad Nexus is an authorized distributor and systems integrator for Huawei and NetApp, delivering data center, network, and security infrastructure across Kyrgyzstan.',
  },
  nav: {
    home: 'Home',
    vendors: 'Vendors',
    solutions: 'Solutions',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
  common: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Switch language',
    headerCta: 'Get in touch',
  },
  home: {
    hero: {
      headline: "World-class technology for Kyrgyzstan's infrastructure",
      subhead:
        'Nomad Nexus is an official distributor and systems integrator for Huawei and NetApp, delivering data center, network, and security infrastructure to enterprises in Kyrgyzstan.',
      primaryCta: 'Request a consultation',
      secondaryCta: 'View our vendors',
    },
    whyUs: {
      heading: 'Why us',
      items: [
        {
          title: 'Official partner status',
          text: 'Direct, authorized partnership with Huawei and NetApp — genuine equipment, full manufacturer warranty.',
        },
        {
          title: 'Local market expertise',
          text: 'Deep understanding of the Kyrgyz market, regulations, and logistics — from customs to deployment.',
        },
        {
          title: 'Full-cycle integration',
          text: 'From bill of quantities to commissioning — data center, network, and security infrastructure delivered end-to-end.',
        },
        {
          title: 'Built on trust',
          text: "Transparent proposals, clear timelines, and a partner who's in it for the long run.",
        },
      ],
    },
    aboutTeaser: {
      heading: 'About',
      text: 'Founded in 2025, Nomad Nexus gives enterprises and public institutions in Kyrgyzstan direct access to world-class IT infrastructure — without the friction of working through multiple layers of resellers. As an official distributor, we combine vendor-grade equipment with hands-on local expertise in deployment, customs, and support.',
      linkLabel: 'Learn more about us',
    },
    vendorsTeaser: {
      eyebrow: 'Official technology partners',
      text: 'We represent world-leading manufacturers, with more partnerships in the pipeline.',
      comingSoon: 'More vendors coming soon',
    },
    solutionsTeaser: {
      heading: 'Solutions',
    },
    finalCta: {
      headline: 'Looking to modernize your infrastructure?',
      text: 'Talk to our team about your project — from a single server to a full data center rollout.',
      button: 'Get in touch',
    },
  },
  vendors: {
    intro: {
      heading: 'Official technology partners',
      text: "We work directly with the world's leading manufacturers and distribution partners to deliver genuine, fully supported equipment and software.",
    },
    oemHeading: 'OEM vendors',
    huawei: {
      name: 'Huawei',
      text: 'Official distributor of Huawei enterprise infrastructure — all-flash and hybrid storage systems, enterprise Wi-Fi, and network management platforms built for demanding, always-on environments.',
      supplyLabel: 'What we supply:',
      supplyItems: [
        'Storage (all-flash & hybrid arrays)',
        'Networking (enterprise Wi-Fi, campus network management)',
      ],
    },
    netapp: {
      name: 'NetApp',
      text: 'Official distributor of NetApp storage solutions — built for enterprises that need their data available, protected, and portable across on-premises and cloud environments.',
    },
    distributionHeading: 'Distribution partners',
    axoft: {
      name: 'Axoft',
      text: 'As an official partner of Axoft — one of the largest IT distributors across Russia, the CIS, and Central Asia — we extend our portfolio with software and cybersecurity solutions from a network of 1,000+ global vendors, including Kaspersky, Check Point, Palo Alto Networks, and Microsoft.',
    },
    comingSoon: '+ more vendors coming soon',
  },
  about: {
    header: 'About Nomad Nexus',
    mission:
      "Our mission is to give Kyrgyzstan's businesses and public institutions direct, reliable access to world-class IT infrastructure — technology from the biggest names in the industry, delivered and supported by people who understand the local market.",
    narrative: [
      "Founded in 2025, Nomad Nexus was built around a simple idea: Kyrgyzstan's businesses deserve the same quality of infrastructure, support, and partnership as anywhere else in the world — without unnecessary intermediaries or guesswork.",
      "As an official distributor of Huawei and NetApp, and a partner of Axoft, we bring genuine, fully warrantied equipment and software directly to our clients. But equipment alone isn't infrastructure — so we go further, handling everything from technical specification and customs clearance to deployment and ongoing support.",
      'We work with enterprises, financial institutions, and government agencies building or modernizing data centers, networks, and security systems — treating every project as if it were our own.',
    ],
    approachHeading: 'Our approach',
    approach: [
      {
        title: 'Direct partnerships, not resale chains',
        text: 'We work directly with manufacturers and top-tier distributors — not through layers of local resellers. That means shorter lead times, accurate pricing, and equipment you can trust.',
      },
      {
        title: 'Full lifecycle, one point of contact',
        text: "From technical specification through customs clearance, installation, and commissioning — we manage the full project, so you don't have to coordinate between multiple vendors.",
      },
      {
        title: 'Local context, done right',
        text: 'Customs procedures, regulatory requirements, logistics — we handle the practical realities of delivering infrastructure in Kyrgyzstan, so projects move without surprises.',
      },
      {
        title: 'Straightforward, on both sides',
        text: 'Clear proposals for our clients, transparent reporting to our vendors. No surprises, no fine print.',
      },
    ],
  },
  solutions: {
    intro: {
      heading: 'Solutions',
      text: 'We supply and integrate the infrastructure enterprises rely on — data center, network, and security, delivered as a single, accountable project.',
    },
    items: [
      {
        id: 'data-center',
        title: 'Data center infrastructure',
        tagline: 'Storage, compute, and converged infrastructure built for scale and resilience.',
        body: 'We supply and deploy the core building blocks of a modern data center — from high-performance all-flash storage to hybrid systems balancing capacity and cost. Every project covers the full cycle: technical specification, procurement, installation, and commissioning.',
        includesLabel: "What's included:",
        includes: [
          'All-flash & hybrid enterprise storage (Huawei OceanStor, NetApp)',
          'Compute & converged infrastructure',
          'High-availability and disaster-recovery architecture',
          'Full-cycle deployment: BOQ, procurement, installation, commissioning',
        ],
      },
      {
        id: 'networking',
        title: 'Networking',
        tagline: 'Enterprise and campus networks, Wi-Fi, and connectivity built for performance.',
        body: 'From core switching to enterprise Wi-Fi, we design and deploy networks that keep pace with growing infrastructure demands — with centralized management that makes day-to-day operations simple.',
        includesLabel: "What's included:",
        includes: [
          'Enterprise Wi-Fi (Wi-Fi 7 / 802.11be access points)',
          'Centralized network management (CloudCampus)',
          'Campus and enterprise network design & deployment',
          'Ongoing network support',
        ],
      },
      {
        id: 'security',
        title: 'Security infrastructure',
        tagline: 'Network and infrastructure security designed around real-world risk.',
        body: 'Infrastructure is only as strong as its weakest layer of protection. Through our own delivery and our partnership with Axoft, we combine hardware-level security with leading cybersecurity software — from endpoint protection to network security and SIEM.',
        includesLabel: "What's included:",
        includes: [
          'Network & infrastructure security architecture',
          'Cybersecurity software (via Axoft: Kaspersky, Check Point, Palo Alto Networks, and others)',
          'Security assessment & solution selection',
          'Deployment and ongoing support',
        ],
      },
    ],
  },
  projects: {
    intro: {
      heading: 'Projects',
      text: "A selection of infrastructure projects we've delivered — equipment supply, deployment, and integration across sectors.",
    },
    cases: [
      {
        title: 'VPS hosting infrastructure deployment',
        tag: 'Hosting / cloud services',
        text: 'Designed and deployed the underlying compute, storage, and virtualization infrastructure to launch a VPS hosting service — built for scalability and reliable multi-tenant performance.',
      },
      {
        title: 'Data center capacity expansion',
        tag: 'Data center / infrastructure',
        text: 'Supplied and installed additional server racks and power distribution units (PDUs) as part of a data center capacity expansion — extending infrastructure without disrupting existing operations.',
      },
      {
        title: 'Security infrastructure for a bank',
        tag: 'Banking / financial services',
        text: "Delivered a network and infrastructure security project for a bank — from solution selection through deployment, meeting the sector's strict compliance and uptime requirements.",
      },
      {
        title: 'IT equipment supply for a corporate client',
        tag: 'Corporate / enterprise',
        text: 'Sourced and delivered IT infrastructure equipment for a corporate client, managing procurement end-to-end — from specification to delivery.',
      },
      {
        title: 'UPS supply for a server room',
        tag: 'Infrastructure / power protection',
        text: 'Supplied uninterruptible power supply (UPS) systems for a server room, ensuring continuous operation and protection against power disruptions.',
      },
    ],
  },
  contact: {
    header: 'Contact us',
    intro:
      'Have a project in mind, or want to discuss becoming a partner? Reach out — we typically respond within one business day.',
    details: {
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      location: 'Kyrgyzstan',
    },
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company (optional)',
      message: 'Message',
      submit: 'Send message',
      successNote: "We'll open your email app with your message pre-filled — just hit send.",
    },
  },
  footer: {
    tagline: 'Nomad Nexus — infrastructure without borders.',
    navHeading: 'Navigation',
    foundedLocation: 'Founded 2025 · Kyrgyzstan',
    copyright: '© {year} Nomad Nexus. All rights reserved.',
  },
};

export default en;
