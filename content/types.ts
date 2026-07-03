export interface NavDictionary {
  home: string;
  vendors: string;
  solutions: string;
  projects: string;
  about: string;
  contact: string;
}

export interface CommonDictionary {
  skipToContent: string;
  openMenu: string;
  closeMenu: string;
  switchLanguage: string;
  headerCta: string;
}

export interface IconBlockEntry {
  title: string;
  text: string;
}

export interface HomeDictionary {
  hero: {
    headline: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  whyUs: {
    heading: string;
    items: IconBlockEntry[];
  };
  aboutTeaser: {
    heading: string;
    text: string;
    linkLabel: string;
  };
  vendorsTeaser: {
    eyebrow: string;
    text: string;
    comingSoon: string;
  };
  solutionsTeaser: {
    heading: string;
  };
  finalCta: {
    headline: string;
    text: string;
    button: string;
  };
}

export interface VendorsDictionary {
  intro: {
    heading: string;
    text: string;
  };
  oemHeading: string;
  huawei: {
    name: string;
    text: string;
    supplyLabel: string;
    supplyItems: string[];
  };
  netapp: {
    name: string;
    text: string;
  };
  distributionHeading: string;
  axoft: {
    name: string;
    text: string;
  };
  comingSoon: string;
}

export interface AboutDictionary {
  header: string;
  mission: string;
  narrative: string[];
  approachHeading: string;
  approach: IconBlockEntry[];
}

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  body: string;
  includesLabel: string;
  includes: string[];
}

export interface SolutionsDictionary {
  intro: {
    heading: string;
    text: string;
  };
  items: SolutionItem[];
}

export interface ProjectCase {
  title: string;
  tag: string;
  text: string;
}

export interface ProjectsDictionary {
  intro: {
    heading: string;
    text: string;
  };
  cases: ProjectCase[];
}

export interface ContactDictionary {
  header: string;
  intro: string;
  details: {
    phoneLabel: string;
    emailLabel: string;
    location: string;
  };
  form: {
    name: string;
    email: string;
    company: string;
    message: string;
    submit: string;
    successNote: string;
  };
}

export interface FooterDictionary {
  tagline: string;
  navHeading: string;
  foundedLocation: string;
  copyright: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: NavDictionary;
  common: CommonDictionary;
  home: HomeDictionary;
  vendors: VendorsDictionary;
  about: AboutDictionary;
  solutions: SolutionsDictionary;
  projects: ProjectsDictionary;
  contact: ContactDictionary;
  footer: FooterDictionary;
}
