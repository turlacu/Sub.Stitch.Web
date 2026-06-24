import { Languages, Github, Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, marketingContent: content } = useLanguage();

  return (
    <footer id="footer" className="bg-[#020617] border-t border-[#334155]/60 py-12 relative overflow-hidden">
      
      {/* Background visual detail */}
      <div className="absolute bottom-0 right-[20%] w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Brand & Desc (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-gradient-to-tr from-[#F472B6] to-[#6366F1] text-slate-900 font-semibold flex items-center justify-center">
                <Languages className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-[#F1F5F9]">
                Sub.<span className="font-bold bg-gradient-to-r from-[#F472B6] to-[#6366F1] bg-clip-text text-transparent">Stitch</span>
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] font-sans font-light leading-relaxed max-w-sm">
              {content.footer.desc}
            </p>
            <div className="flex items-center gap-3 pt-2 text-[#94A3B8]">
              <a
                id="footer-github-link"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-mail-link"
                href="mailto:turlacu@live.com"
                className="hover:text-white transition-colors"
                title="Email Support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Shortcuts (col-span-3) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-[#F1F5F9] uppercase font-mono tracking-wider">{content.footer.shortcuts}</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#94A3B8] font-sans font-light">
              <a href="#features" className="hover:text-white transition-colors">{t("navFeatures")}</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">{t("navHowItWorks")}</a>
              <a href="#pricing" className="hover:text-white transition-colors">{t("navPricing")}</a>
              <a href="#faq" className="hover:text-white transition-colors">{t("navFAQ")}</a>
              <a href="#contact" className="hover:text-white transition-colors">{t("navContact")}</a>
            </div>
          </div>

          {/* Column 3: App Links & status (col-span-4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-[#F1F5F9] uppercase font-mono tracking-wider">{content.footer.appHeader}</h4>
            <div className="space-y-2">
              <p className="text-xs text-[#94A3B8] font-sans font-light leading-relaxed">
                {content.footer.appDesc}
              </p>
              <a
                id="footer-app-cta"
                href="https://sub.turlacu.ro/"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#020617] bg-[#F1F5F9] hover:bg-white hover:shadow-lg transition-all duration-200"
              >
                <span>{content.footer.appCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            
            {/* Status light */}
            <div className="pt-2 flex items-center gap-2 select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75 mr-1" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]" />
              </span>
              <span className="text-[10px] font-mono text-[#10B981]">{content.footer.status}</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright detail */}
        <div className="mt-12 pt-8 border-t border-[#334155]/40 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#94A3B8]">
          <p>&copy; {currentYear} {content.footer.copyright}</p>
          <div className="flex gap-4">
            <a href="https://subtitletranslate.turlacu.ro/" className="hover:underline">subtitletranslate.turlacu.ro</a>
            <span>&bull;</span>
            <a href="https://sub.turlacu.ro/" className="hover:underline">sub.turlacu.ro</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
