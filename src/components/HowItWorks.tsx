import { FileUp, Sliders, Cpu, FileCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const icons = [FileUp, Sliders, Cpu, FileCheck];

export default function HowItWorks() {
  const { marketingContent: content } = useLanguage();

  return (
    <section id="how-it-works" className="py-24 bg-[#090D1A] relative border-b border-[#334155]/20">
      
      {/* Background glow flares */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-gradient-to-tr from-[#6366F1]/5 to-transparent blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-gradient-to-tr from-[#F472B6]/5 to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="inline-block mb-2 text-xs font-bold tracking-widest text-[#22D3EE] uppercase font-mono px-3 py-1 bg-[#22D3EE]/10 rounded-full border border-[#22D3EE]/20">
            {content.howItWorks.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F9] tracking-tight">
            {content.howItWorks.title}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed">
            {content.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps container */}
        <div className="relative">
          

          
          {/* Main layout grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {content.howItWorks.steps.map((stepItem, index) => {
              const Icon = icons[index] || Cpu;
              return (
                <div
                  key={index}
                  id={`how-it-works-step-${index}`}
                  className="group flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 bg-[#1E293B]/20 p-6 rounded-2xl border border-[#334155]/40 hover:border-[#F472B6]/40 hover:bg-[#1E293B]/30 transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  {/* Step Header details / Icon container */}
                  <div className="flex items-center justify-between w-full">
                    <div className="p-3.5 rounded-xl bg-[#020617] border border-[#334155]/60 text-pink-400 group-hover:text-black group-hover:bg-[#F472B6] transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6 shrink-0" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#1E293B]/60 text-[#F472B6] group-hover:bg-gradient-to-r group-hover:from-[#F472B6]/10 group-hover:to-[#6366F1]/10 border border-[#334155]/40 transition-all">
                      {stepItem.step}
                    </span>
                  </div>

                  {/* Text details */}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-lg font-bold text-[#F1F5F9] font-sans">
                      {stepItem.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] font-sans font-light leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom helpful message */}
        <div className="mt-16 text-center">
          <a
            id="how-it-works-start-cta"
            href="https://sub.turlacu.ro/"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#F472B6] hover:text-[#22D3EE] font-mono hover:underline group cursor-pointer transition-colors"
          >
            {content.howItWorks.bottomCta}
          </a>
        </div>

      </div>
    </section>
  );
}
