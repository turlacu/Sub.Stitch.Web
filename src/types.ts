export interface PricingTier {
  id: string;
  name: string;
  price: string;
  frequency?: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
  ctaText: string;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
}

export interface SubtitleLine {
  id: number;
  timecode: string;
  sourceText: string;
  translations: {
    [lang: string]: {
      accurate: string;
      creative: string;
      casual: string;
    }
  };
}

export interface MarketingContent {
  trust: {
    title: string;
    badges: Array<{ icon: string; text: string; desc: string }>;
  };
  problem: {
    badge: string;
    title: string;
    subtitle: string;
    basicCard: {
      title: string;
      desc: string;
      sourceLabel: string;
      failureLabel: string;
      translatedLabel: string;
      failureEx: string;
      traits: string[];
      footer: string;
    };
    subaiCard: {
      title: string;
      desc: string;
      recBadge: string;
      successLabel: string;
      successEx: string;
      traits: string[];
      footer: string;
    };
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{ step: string; title: string; desc: string }>;
    bottomCta: string;
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{ id: string; title: string; description: string; badge: string }>;
    prevLine: string;
    currLine: string;
    done: string;
    translating: string;
    locked: string;
    drift: string;
    stdDraft: string;
    stdWarning: string;
    subaiComp: string;
    subaiScore: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    creditNote: string;
    whiteboardLabel?: string;
    tiers: Array<{
      id: string;
      name: string;
      price: string;
      description: string;
      features: string[];
      ctaText: string;
      badge?: string;
      isHighlighted?: boolean;
    }>;
    footerText: string;
    contactUs: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{ question: string; answer: string }>;
    footerPrefix: string;
    directApp: string;
    footerSuffix: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    inquiries: string;
    replyTime: string;
    feedbackTitle: string;
    feedbackDesc: string;
    enterpriseTitle: string;
    enterpriseDesc: string;
    emailSign: string;
    emailBlockLabel: string;
    emailBlockTitle: string;
    emailBlockDesc: string;
    emailBlockAddressLabel: string;
    emailBlockPrivacyNote: string;
    emailBlockCta: string;
    successTitle: string;
    successDesc: string;
    successBtn: string;
    errName: string;
    errEmail: string;
    errMessage: string;
    lblName: string;
    lblEmail: string;
    lblSubject: string;
    lblMessage: string;
    placeholderMessage?: string;
    optQuestion: string;
    optFeedback: string;
    optVolume: string;
    optOther: string;
    btnSend: string;
    btnSending: string;
  };
  footer: {
    desc: string;
    shortcuts: string;
    appHeader: string;
    appDesc: string;
    appCta: string;
    status: string;
    copyright: string;
  };
}
