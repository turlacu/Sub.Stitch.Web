import { MarketingContent } from "../types";
import { ENGLISH } from "./marketing/en";
import { MARKETING_TRANSLATIONS } from "./marketingTranslations";

// Deeply extract all unique translatable strings from the English object
export function extractStrings(obj: any, strings: Set<string> = new Set()): string[] {
  if (typeof obj === 'string') {
    const trimmed = obj.trim();
    // Don't translate Lucide icon names or empty strings/timecodes/numeric values
    if (
      !trimmed ||
      trimmed === 'Zap' || 
      trimmed === 'Brain' || 
      trimmed === 'Timer' || 
      trimmed === 'Globe' || 
      trimmed === 'Lock' ||
      trimmed.match(/^\$?[\d,.]+%?$/) // skip things like "$4.99", "100", etc.
    ) {
      return Array.from(strings);
    }
    strings.add(obj);
  } else if (Array.isArray(obj)) {
    obj.forEach(item => extractStrings(item, strings));
  } else if (typeof obj === 'object' && obj !== null) {
    Object.keys(obj).forEach(key => {
      // Don't extract raw keys we don't want altered
      if (key === 'id' || key === 'icon' || key === 'price' || key === 'step') return;
      extractStrings(obj[key], strings);
    });
  }
  return Array.from(strings);
}

// Deeply map translated strings back into the structure of the English placeholder
export function reconstructObject(obj: any, translationMap: Map<string, string>): any {
  if (typeof obj === 'string') {
    const trimmed = obj.trim();
    if (
      !trimmed ||
      trimmed === 'Zap' || 
      trimmed === 'Brain' || 
      trimmed === 'Timer' || 
      trimmed === 'Globe' || 
      trimmed === 'Lock'
    ) {
      return obj;
    }
    return translationMap.get(obj) || obj;
  } else if (Array.isArray(obj)) {
    return obj.map(item => reconstructObject(item, translationMap));
  } else if (typeof obj === 'object' && obj !== null) {
    const res: any = {};
    Object.keys(obj).forEach(key => {
      if (key === 'id' || key === 'icon' || key === 'price' || key === 'step') {
        res[key] = obj[key];
        return;
      }
      res[key] = reconstructObject(obj[key], translationMap);
    });
    return res;
  }
  return obj;
}

// Perform translation using the free, non-validated Google Translate REST API
export async function translateMarketingContent(targetLang: string): Promise<MarketingContent> {
  const normalized = targetLang.toLowerCase();
  const basePrefix = normalized.substring(0, 2);
  
  // Try to find matching offline handcrafted language first
  if (MARKETING_TRANSLATIONS[normalized]) {
    return MARKETING_TRANSLATIONS[normalized];
  }
  if (MARKETING_TRANSLATIONS[basePrefix]) {
    return MARKETING_TRANSLATIONS[basePrefix];
  }

  // Check localStorage cache first
  const cacheKey = `subai-marketing-cache-${normalized}`;
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn("localStorage not accessible", e);
  }

  // Extract all strings from English template
  const englishStrings = extractStrings(ENGLISH);
  const delimiter = "\n[~]\n";
  const batchSize = 35; // optimal size for URL safety
  const translationMap = new Map<string, string>();

  for (let i = 0; i < englishStrings.length; i += batchSize) {
    const batch = englishStrings.slice(i, i + batchSize);
    const joined = batch.join(delimiter);
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${basePrefix}&dt=t&q=${encodeURIComponent(joined)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Translation API responded with " + response.status);
      const data = await response.json();
      
      if (data && data[0]) {
        const fullTranslated = data[0].map((x: any) => x?.[0] || "").join("");
        const split = fullTranslated.split(/\[~\]/gi).map((s: string) => s.trim());
        batch.forEach((original, idx) => {
          const translated = split[idx] || original;
          translationMap.set(original, translated || original);
        });
      } else {
        batch.forEach(original => translationMap.set(original, original));
      }
    } catch (e) {
      console.error(`Error translating batch in ${targetLang}:`, e);
      batch.forEach(original => translationMap.set(original, original));
    }
  }

  const translatedContent = reconstructObject(ENGLISH, translationMap);
  
  // Cache in localStorage for future local hits
  try {
    localStorage.setItem(cacheKey, JSON.stringify(translatedContent));
  } catch (e) {
    console.warn("Saving to cache failed", e);
  }

  return translatedContent;
}
