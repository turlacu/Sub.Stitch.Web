import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS, LANGUAGES, TranslationKeys, LanguageDef } from "../data/translations";
import { MarketingContent } from "../types";
import { ENGLISH } from "../data/marketing/en";
import { MARKETING_TRANSLATIONS } from "../data/marketingTranslations";
import { translateMarketingContent } from "../data/dynamicTranslator";

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  languages: LanguageDef[];
  t: (key: keyof TranslationKeys) => string;
  marketingContent: MarketingContent;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const safeGetItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn("localStorage is not accessible in this context:", e);
    return null;
  }
};

const safeSetItem = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn("localStorage is not accessible in this context:", e);
  }
};

// Deeply merges a partially translated/cached translation object with a fully populated source template
// to ensure no missing/undefined sections can trigger a runtime component tree crash.
function deepMergeWithTemplate(template: any, incoming: any): any {
  if (typeof template !== typeof incoming || incoming === null || incoming === undefined) {
    return template;
  }
  if (typeof template === 'string') {
    return typeof incoming === 'string' && incoming.trim() !== "" ? incoming : template;
  }
  if (Array.isArray(template)) {
    if (!Array.isArray(incoming)) return template;
    return template.map((item, idx) => {
      return deepMergeWithTemplate(item, incoming[idx]);
    });
  }
  if (typeof template === 'object') {
    const merged: any = {};
    Object.keys(template).forEach(key => {
      merged[key] = deepMergeWithTemplate(template[key], incoming[key]);
    });
    return merged;
  }
  return incoming;
}

const getInitialMarketingContent = (lang: string): MarketingContent => {
  const normalized = lang.toLowerCase();
  const basePrefix = normalized.substring(0, 2);
  
  if (MARKETING_TRANSLATIONS[normalized]) {
    return MARKETING_TRANSLATIONS[normalized];
  }
  if (MARKETING_TRANSLATIONS[basePrefix]) {
    return MARKETING_TRANSLATIONS[basePrefix];
  }

  try {
    const cached = safeGetItem(`subai-marketing-cache-${normalized}`);
    if (cached) {
      return deepMergeWithTemplate(ENGLISH, JSON.parse(cached));
    }
  } catch (e) {}

  return ENGLISH;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<string>(() => {
    const saved = safeGetItem("subai-site-lang");
    return saved && TRANSLATIONS[saved] ? saved : "en";
  });

  const [marketingContent, setMarketingContent] = useState<MarketingContent>(() => 
    getInitialMarketingContent(currentLanguage)
  );
  const [isTranslating, setIsTranslating] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    
    const loadContent = async () => {
      try {
        const normalized = currentLanguage.toLowerCase();
        const basePrefix = normalized.substring(0, 2);
        
        // If it's a known offline files-based language, load immediately
        if (MARKETING_TRANSLATIONS[normalized] || MARKETING_TRANSLATIONS[basePrefix]) {
          setMarketingContent(getInitialMarketingContent(currentLanguage));
          setIsTranslating(false);
          return;
        }

        // Check if we already have it cached
        try {
          const cached = safeGetItem(`subai-marketing-cache-${normalized}`);
          if (cached) {
            setMarketingContent(deepMergeWithTemplate(ENGLISH, JSON.parse(cached)));
            setIsTranslating(false);
            return;
          }
        } catch (e) {}

        // Otherwise translate dynamically in background
        setIsTranslating(true);
        const translated = await translateMarketingContent(currentLanguage);
        if (isMounted) {
          setMarketingContent(deepMergeWithTemplate(ENGLISH, translated));
          setIsTranslating(false);
        }
      } catch (err) {
        console.error("Failed to load or translate content dynamic routing:", err);
        if (isMounted) {
          setMarketingContent(ENGLISH);
          setIsTranslating(false);
        }
      }
    };

    loadContent();

    return () => {
      isMounted = false;
    };
  }, [currentLanguage]);

  // Set Language
  const setLanguage = (lang: string) => {
    if (TRANSLATIONS[lang]) {
      setCurrentLanguageState(lang);
      safeSetItem("subai-site-lang", lang);
    }
  };

  const t = (key: keyof TranslationKeys): string => {
    const dictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS["en"];
    return dictionary[key] || TRANSLATIONS["en"][key] || "";
  };

  // Localize page metadata based on chosen locale
  useEffect(() => {
    const headTitle = t("heroTitle1") && t("heroTitle2") && t("heroTitle3")
      ? `Sub.Stich Translator | ${t("heroTitle1")} ${t("heroTitle2")} ${t("heroTitle3")}`
      : "Sub.Stich Translator | Premium AI Subtitle Translation & Sync";
    document.title = headTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("heroSubtitle") || "Premium AI subtitle translation web application.");
    }
  }, [currentLanguage, marketingContent]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, languages: LANGUAGES, t, marketingContent, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
