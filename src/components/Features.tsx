import { ClipboardCheck, Eye, Film } from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

type FeatureId = "timing" | "preview" | "creator";

const iconMap: Record<FeatureId, any> = {
  timing: ClipboardCheck,
  preview: Eye,
  creator: Film
};

const visibleFeatureIds: FeatureId[] = ["timing", "preview", "creator"];

export default function Features() {
  const { marketingContent: content } = useLanguage();
  const visibleFeatures = visibleFeatureIds
    .map((id) => content.features.items.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <section id="features" className="py-24 bg-[#020617] relative border-b border-[#334155]/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#6366F1]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#F472B6]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <Reveal className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="inline-block mb-2 text-xs font-bold tracking-widest text-[#F472B6] uppercase font-mono px-3 py-1 bg-[#F472B6]/10 rounded-full border border-[#F472B6]/20">
            {content.features.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F9] font-sans tracking-tight">
            {content.features.title}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] font-sans font-light leading-relaxed">
            {content.features.subtitle}
          </p>
        </Reveal>

        {/* Product video preview */}
        <Reveal className="mx-auto mb-8 max-w-5xl overflow-hidden rounded-2xl border border-[#334155]/45 bg-[#090D1A]/80 shadow-2xl shadow-black/35" delay={0.04}>
          <video
            className="block aspect-video w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/og-image-v2.png"
            aria-label={content.features.title}
          >
            <source src="/localization-preview.mp4" type="video/mp4" />
          </video>
        </Reveal>

        {/* Feature Row */}
        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5" delay={0.06}>
          {visibleFeatures.map((item) => {
            if (!item) return null;
            const Icon = iconMap[item.id as FeatureId];
            const isTiming = item.id === "timing";
            const isPreview = item.id === "preview";

            return (
              <div
                key={item.id}
                className="bg-[#1E293B]/10 rounded-xl border border-[#334155]/40 p-5 sm:p-6 flex flex-col justify-between hover:border-[#F472B6]/45 transition-all duration-300 shadow-lg relative group min-h-[190px]"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg bg-[#090D1A] border border-[#334155] transition-transform duration-300 group-hover:-translate-y-0.5 ${
                      isTiming ? "text-[#22D3EE]" : isPreview ? "text-indigo-400" : "text-pink-400"
                    }`}>
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                      isTiming
                        ? "bg-cyan-500/10 text-cyan-400"
                        : isPreview
                          ? "bg-indigo-500/10 text-indigo-400"
                          : "bg-pink-500/10 text-pink-400"
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#F1F5F9] font-sans">{item.title}</h3>
                    <p className="text-sm text-[#94A3B8] font-sans font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>

      </div>
    </section>
  );
}
