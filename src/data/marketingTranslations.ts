import { MarketingContent } from "../types";
import { ENGLISH } from "./marketing/en";
import { ROMANIAN } from "./marketing/ro";
import { GERMAN } from "./marketing/de";
import { SPANISH } from "./marketing/es";
import { FRENCH } from "./marketing/fr";
import { PORTUGUESE } from "./marketing/pt";
import { ITALIAN } from "./marketing/it";

import { OFFLINE_MARKETING_DICTS } from "./marketing/offlineTranslations";
import { OFFLINE_MARKETING_DICTS_PART2 } from "./marketing/offlineTranslations2";
import { OFFLINE_MARKETING_DICTS_PART3 } from "./marketing/offlineTranslations3";

export type { MarketingContent };

const OFFLINE_DICTS: Record<string, Record<string, string>> = {
  ...OFFLINE_MARKETING_DICTS,
  ...OFFLINE_MARKETING_DICTS_PART2,
  ...OFFLINE_MARKETING_DICTS_PART3
};

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

export const MARKETING_TRANSLATIONS: Record<string, MarketingContent> = {
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

// Dynamically populate all offline dictionary languages on load
for (const langCode of Object.keys(OFFLINE_DICTS)) {
  MARKETING_TRANSLATIONS[langCode] = deepTranslate(ENGLISH, OFFLINE_DICTS[langCode]);
}

export const getMarketingTranslation = (langCode: string): MarketingContent => {
  const normalized = langCode.toLowerCase();
  if (MARKETING_TRANSLATIONS[normalized]) {
    return MARKETING_TRANSLATIONS[normalized];
  }
  // Try partial mapping (e.g. es-ar -> es)
  const prefix = normalized.substring(0, 2);
  if (MARKETING_TRANSLATIONS[prefix]) {
    return MARKETING_TRANSLATIONS[prefix];
  }
  // Ultimate elegant fallback to English
  return ENGLISH;
};
