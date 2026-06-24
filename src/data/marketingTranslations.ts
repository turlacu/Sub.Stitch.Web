import { MarketingContent } from "../types";
import { ENGLISH } from "./marketing/en";
import { ROMANIAN } from "./marketing/ro";
import { GERMAN } from "./marketing/de";
import { SPANISH } from "./marketing/es";
import { FRENCH } from "./marketing/fr";
import { PORTUGUESE } from "./marketing/pt";
import { ITALIAN } from "./marketing/it";

export type { MarketingContent };

function deepTranslate(obj: any, dict: Record<string, string>): any {
  if (typeof obj === "string") {
    return dict[obj] || obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepTranslate(item, dict));
  }
  if (obj && typeof obj === "object") {
    const result: any = {};
    for (const key of Object.keys(obj)) {
      result[key] = deepTranslate(obj[key], dict);
    }
    return result;
  }
  return obj;
}

function normalizeGeneratedContactCopy(content: MarketingContent, dict: Record<string, string>): MarketingContent {
  if (dict[ENGLISH.contact.emailBlockLabel]) {
    return content;
  }

  return {
    ...content,
    contact: {
      ...content.contact,
      emailBlockLabel: content.contact.emailSign,
      emailBlockTitle: content.contact.title,
      emailBlockDesc: content.contact.subtitle,
      emailBlockAddressLabel: content.contact.inquiries,
      emailBlockCta: content.contact.btnSend
    }
  };
}

const BASE_MARKETING_TRANSLATIONS: Record<string, MarketingContent> = {
  en: ENGLISH,
  ro: ROMANIAN,
  de: GERMAN,
  es: SPANISH,
  "es-la": SPANISH,
  "es-es": SPANISH,
  fr: FRENCH,
  pt: PORTUGUESE,
  "pt-br": PORTUGUESE,
  "pt-pt": PORTUGUESE,
  it: ITALIAN
};

const cachedMarketingTranslations: Record<string, MarketingContent> = {
  ...BASE_MARKETING_TRANSLATIONS
};

const offlineDictionaryLoaders: Record<string, () => Promise<Record<string, Record<string, string>>>> = {
  "zh-cn": async () => (await import("./marketing/offlineTranslations")).OFFLINE_MARKETING_DICTS,
  "zh-tw": async () => (await import("./marketing/offlineTranslations")).OFFLINE_MARKETING_DICTS,
  ja: async () => (await import("./marketing/offlineTranslations")).OFFLINE_MARKETING_DICTS,
  ko: async () => (await import("./marketing/offlineTranslations")).OFFLINE_MARKETING_DICTS,
  ru: async () => (await import("./marketing/offlineTranslations2")).OFFLINE_MARKETING_DICTS_PART2,
  tr: async () => (await import("./marketing/offlineTranslations2")).OFFLINE_MARKETING_DICTS_PART2,
  nl: async () => (await import("./marketing/offlineTranslations2")).OFFLINE_MARKETING_DICTS_PART2,
  ar: async () => (await import("./marketing/offlineTranslations2")).OFFLINE_MARKETING_DICTS_PART2,
  sv: async () => (await import("./marketing/offlineTranslations2")).OFFLINE_MARKETING_DICTS_PART2,
  no: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  da: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  fi: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  el: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  bg: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  hr: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  hi: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  ta: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3,
  te: async () => (await import("./marketing/offlineTranslations3")).OFFLINE_MARKETING_DICTS_PART3
};

export const getMarketingTranslation = (langCode: string): MarketingContent => {
  const normalized = langCode.toLowerCase();
  if (cachedMarketingTranslations[normalized]) {
    return cachedMarketingTranslations[normalized];
  }
  // Try partial mapping (e.g. es-ar -> es)
  const prefix = normalized.substring(0, 2);
  if (cachedMarketingTranslations[prefix]) {
    return cachedMarketingTranslations[prefix];
  }
  // Ultimate elegant fallback to English
  return ENGLISH;
};

export const loadMarketingTranslation = async (langCode: string): Promise<MarketingContent> => {
  const normalized = langCode.toLowerCase();
  const basePrefix = normalized.substring(0, 2);

  if (cachedMarketingTranslations[normalized]) {
    return cachedMarketingTranslations[normalized];
  }
  if (cachedMarketingTranslations[basePrefix]) {
    return cachedMarketingTranslations[basePrefix];
  }

  const loadDictionary = offlineDictionaryLoaders[normalized] || offlineDictionaryLoaders[basePrefix];
  if (!loadDictionary) {
    return ENGLISH;
  }

  const dictionaries = await loadDictionary();
  const dictionary = dictionaries[normalized] || dictionaries[basePrefix];
  if (!dictionary) {
    return ENGLISH;
  }

  const translated = normalizeGeneratedContactCopy(deepTranslate(ENGLISH, dictionary), dictionary);
  cachedMarketingTranslations[normalized] = translated;
  return translated;
};
