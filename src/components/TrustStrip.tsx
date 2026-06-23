import { Zap, Brain, Timer, Globe, Lock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const iconMap: Record<string, any> = {
  Zap: Zap,
  Brain: Brain,
  Timer: Timer,
  Globe: Globe,
  Lock: Lock
};

export default function TrustStrip() {
  const { marketingContent: content } = useLanguage();

  return (
    <section id="trust-strip" className="py-12 border-y border-[#334155]/40 bg-[#090D1A]/50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="sr-only">{content.trust.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
          {content.trust.badges.map((badge, idx) => {
            const IconComponent = iconMap[badge.icon] || Zap;
            return (
              <div
                key={`${badge.text}-${idx}`}
                id={`trust-badge-${idx}`}
                className="group p-4 sm:p-5 rounded-2xl bg-[#1E293B]/20 border border-[#334155]/40 hover:border-[#F472B6]/40 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-black/10 flex flex-col items-center text-center space-y-2.5"
              >
                <div className="p-2 sm:p-3 rounded-xl bg-[#020617] border border-[#334155]/60 text-slate-100 group-hover:text-[#F472B6] transition-colors duration-300">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#F472B6] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#F1F5F9] font-sans tracking-wide">
                    {badge.text}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#94A3B8] leading-tight font-sans font-light">
                    {badge.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
