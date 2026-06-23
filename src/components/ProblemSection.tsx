import { Check, X, ShieldAlert, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ProblemSection() {
  const { marketingContent: content } = useLanguage();

  return (
    <section id="problem" className="py-24 bg-[#020617] relative border-b border-[#334155]/20">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-500/5 to-pink-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header copy */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block mb-2 text-xs font-bold tracking-widest text-[#F472B6] uppercase font-mono px-3 py-1 bg-[#F472B6]/10 rounded-full border border-[#F472B6]/20">
            {content.problem.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F9] tracking-tight">
            {content.problem.title}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed">
            {content.problem.subtitle}
          </p>
        </div>

        {/* Side-by-side comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
          
          {/* Card 1: Basic Machine Translator */}
          <div className="bg-[#090D1A] rounded-2xl border border-[#334155]/40 p-6 sm:p-8 flex flex-col justify-between hover:border-red-500/20 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors" />
            <div className="space-y-6">
              
              {/* Card Label */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 text-[#EF4444]">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F1F5F9]">{content.problem.basicCard.title}</h3>
                  <p className="text-xs text-[#94A3B8] font-mono">{content.problem.basicCard.desc}</p>
                </div>
              </div>

              {/* Bullet details */}
              <ul className="space-y-3 pt-2">
                {content.problem.basicCard.traits.map((trait, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-[#94A3B8] leading-tight">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#334155]/20 text-xs text-red-400 font-mono text-center">
              {content.problem.basicCard.footer}
            </div>
          </div>

          {/* Card 2: Sub.Stich Translator */}
          <div className="bg-[#1E293B]/20 rounded-2xl border border-[#334155] p-6 sm:p-8 flex flex-col justify-between hover:border-[#F472B6]/60 transition-all duration-300 relative group overflow-hidden shadow-xl shadow-pink-950/5">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-[#F472B6]/10 to-[#6366F1]/10 rounded-full blur-2xl group-hover:from-[#F472B6]/20 transition-all" />
            <div className="space-y-6">
              
              {/* Card Label */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#F472B6]/10 to-[#6366F1]/10 border border-[#F472B6]/30 text-[#F472B6]">
                  <Sparkles className="w-5 h-5 text-[#F472B6]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F1F5F9] flex items-center gap-2">
                    {content.problem.subaiCard.title}
                    <span className="text-[10px] font-mono bg-[#10B981]/15 text-[#10B981] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">{content.problem.subaiCard.recBadge}</span>
                  </h3>
                  <p className="text-xs text-pink-300 font-mono bg-gradient-to-r from-pink-300 to-indigo-300 bg-clip-text text-transparent">{content.problem.subaiCard.desc}</p>
                </div>
              </div>

              {/* Bullet details */}
              <ul className="space-y-3 pt-2">
                {content.problem.subaiCard.traits.map((trait, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-[#94A3B8] leading-tight">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#334155]/20 text-xs text-emerald-400 font-mono text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {content.problem.subaiCard.footer}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
