import { useState, useEffect } from "react";
import { Languages, Menu, X, ArrowUpRight, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const { currentLanguage, setLanguage, languages, t } = useLanguage();

  const activeLanguage = languages.find(l => l.code === currentLanguage) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const navLinks = [
    { label: t("navFeatures"), href: "#features" },
    { label: t("navHowItWorks"), href: "#how-it-works" },
    { label: t("navPricing"), href: "#pricing" },
    { label: t("navFAQ"), href: "#faq" },
    { label: t("navContact"), href: "#contact" }
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#020617]/85 backdrop-blur-md border-b border-[#334155]/60 py-3 shadow-lg shadow-black/25"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left side: Logo */}
            <a
              id="nav-logo-link"
              href="#"
              className="flex items-center gap-2.5 group transition-opacity duration-200"
            >
              <div className="h-5 w-5 rounded bg-gradient-to-tr from-[#F472B6] to-[#6366F1] text-[#020617] font-semibold flex items-center justify-center shadow-lg shadow-[#F472B6]/15 hover:scale-105 transition-transform duration-300 shrink-0">
                <Languages className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#F1F5F9] font-sans">
                Sub.<span className="font-bold bg-gradient-to-r from-[#F472B6] to-[#6366F1] bg-clip-text text-transparent">Stich</span>
              </span>
            </a>

            {/* Center: Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  href={link.href}
                  className="text-sm font-medium text-[#94A3B8] hover:text-[#F1F5F9] tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right: Language Selector & Open App Button */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Dropdown Selector */}
              <div className="relative">
                <button
                  id="lang-selector-btn-desktop"
                  onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 h-7 rounded-lg bg-[#1E293B]/60 hover:bg-[#1E293B] border border-[#334155]/60 hover:border-[#F472B6]/40 text-xs font-semibold text-[#E2E8F0] transition-all duration-200 outline-none"
                >
                  <span className="text-sm leading-none">{activeLanguage.flag}</span>
                  <span className="font-sans text-xs tracking-wide">{activeLanguage.nativeName}</span>
                  <ChevronDown className={`w-3 h-3 text-[#94A3B8] transition-transform duration-250 ${isDesktopDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isDesktopDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsDesktopDropdownOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 mt-2 w-64 max-h-80 overflow-y-auto rounded-xl bg-[#0B0F24]/95 border border-[#334155] p-1.5 shadow-2xl shadow-black z-50 scrollbar-thin scrollbar-thumb-slate-800"
                      >
                        {languages.map((lang) => (
                           <button
                             key={lang.code}
                             onClick={() => {
                               setLanguage(lang.code);
                               setIsDesktopDropdownOpen(false);
                             }}
                             className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors duration-150 ${
                               currentLanguage === lang.code
                                 ? "bg-gradient-to-r from-[#F472B6]/15 to-[#6366F1]/15 text-[#F1F5F9] font-medium border-l-2 border-[#F472B6]"
                                 : "text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E293B]/40"
                             }`}
                           >
                             <div className="flex items-center gap-2">
                               <span className="text-base">{lang.flag}</span>
                               <span className="font-sans">{lang.nativeName}</span>
                             </div>
                             {currentLanguage === lang.code && (
                               <span className="text-[9px] uppercase tracking-wider text-[#F472B6] font-semibold bg-[#F472B6]/10 px-1.5 py-0.5 rounded">
                                 OK
                               </span>
                             )}
                           </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <a
                id="nav-cta-desktop"
                href="https://sub.turlacu.ro/"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1.5 px-4 h-7 text-xs font-semibold rounded-lg text-slate-900 overflow-hidden bg-gradient-to-r from-[#F472B6] to-[#6366F1] shadow-[0_0_20px_rgba(244,114,182,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(244,114,182,0.5)] group"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span>{t("openApp")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                id="nav-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E293B]/60 focus:outline-none transition-colors duration-200 border border-transparent hover:border-[#334155]/60"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu container */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-t border-[#334155] bg-[#020617]/95 backdrop-blur-xl absolute top-full left-0 right-0 overflow-hidden shadow-2xl shadow-black/80"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    id={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-base font-medium rounded-xl text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E293B]/60 transition-all duration-200 border border-transparent hover:border-[#334155]/40"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile Language Selector block */}
                <div className="pt-2 px-4">
                  <span className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2 font-mono">
                    Select Language
                  </span>
                  <button
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#1E293B]/40 hover:bg-[#1E293B]/60 border border-[#334155]/60 text-sm font-medium text-[#E2E8F0] transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{activeLanguage.flag}</span>
                      <span>{activeLanguage.nativeName}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-[#94A3B8] transition-transform duration-200 ${isMobileDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 max-h-48 overflow-y-auto rounded-xl bg-[#090D1F] border border-[#334155]/60 p-1.5 space-y-1"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setIsMobileDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs ${
                              currentLanguage === lang.code
                                ? "bg-[#F472B6]/10 text-[#F472B6] font-medium"
                                : "text-[#94A3B8] hover:text-[#E2E8F0]"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span>{lang.flag}</span>
                              <span>{lang.nativeName}</span>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-4 border-t border-[#334155]/60 px-4">
                  <a
                    id="nav-cta-mobile"
                    href="https://sub.turlacu.ro/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 text-base font-semibold rounded-xl text-[#020617] bg-gradient-to-r from-[#F472B6] to-[#6366F1] shadow-[0_0_15px_rgba(244,114,182,0.25)]"
                  >
                    <span>{t("openApp")}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
