import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS, LANGUAGES, TranslationKeys, LanguageDef } from "../data/translations";
import { MarketingContent } from "../types";
import { getMarketingTranslation, loadMarketingTranslation } from "../data/marketingTranslations";

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  languages: LanguageDef[];
  t: (key: keyof TranslationKeys) => string;
  marketingContent: MarketingContent;
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

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<string>(() => {
    const saved = safeGetItem("subai-site-lang");
    return saved && TRANSLATIONS[saved] ? saved : "en";
  });

  const [marketingContent, setMarketingContent] = useState<MarketingContent>(() => 
    getMarketingTranslation(currentLanguage)
  );

  useEffect(() => {
    let isCurrentLoad = true;

    setMarketingContent(getMarketingTranslation(currentLanguage));

    loadMarketingTranslation(currentLanguage)
      .then((content) => {
        if (isCurrentLoad) {
          setMarketingContent(content);
        }
      })
      .catch((error) => {
        console.error("Failed to load local marketing translation", { language: currentLanguage, error });
      });

    return () => {
      isCurrentLoad = false;
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
      ? `Sub.Stitch Translator | ${t("heroTitle1")} ${t("heroTitle2")} ${t("heroTitle3")}`
      : "Sub.Stitch Translator | Premium AI Subtitle Translation & Sync";
    document.title = headTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("heroSubtitle") || "Premium AI subtitle translation web application.");
    }
  }, [currentLanguage, marketingContent]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, languages: LANGUAGES, t, marketingContent }}>
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
