import { Layers, ListTodo, ClipboardCheck, Heading3, Eye, Film } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

type FeatureId = 'context' | 'batch' | 'timing' | 'length' | 'preview' | 'creator';

const iconMap: Record<FeatureId, any> = {
  context: Layers,
  batch: ListTodo,
  timing: ClipboardCheck,
  length: Heading3,
  preview: Eye,
  creator: Film
};

export default function Features() {
  const { marketingContent: content } = useLanguage();

  return (
    <section id="features" className="py-24 bg-[#020617] relative border-b border-[#334155]/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#6366F1]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#F472B6]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="inline-block mb-2 text-xs font-bold tracking-widest text-[#F472B6] uppercase font-mono px-3 py-1 bg-[#F472B6]/10 rounded-full border border-[#F472B6]/20">
            {content.features.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F9] font-sans tracking-tight">
            {content.features.title}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] font-sans font-light leading-relaxed">
            {content.features.subtitle}
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

          {/* Card 1: AI Context Engine (col-span-4) */}
          <div className="md:col-span-4 bg-[#1E293B]/10 rounded-2xl border border-[#334155]/40 p-6 sm:p-8 flex flex-col justify-between hover:border-[#F472B6]/50 transition-all duration-300 shadow-xl relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-4 flex-1">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#090D1A] border border-[#334155] text-[#F472B6]">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono bg-pink-500/10 text-pink-400 px-2 py-0.5 rounded-full font-bold">
                  {content.features.items[0].badge}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#F1F5F9] font-sans">{content.features.items[0].title}</h3>
                <p className="text-sm text-[#94A3B8] font-sans font-light leading-relaxed">{content.features.items[0].description}</p>
              </div>

              {/* Connected dialogue context mockup */}
              <div className="bg-[#020617] rounded-xl p-4 border border-[#334155]/40 text-xs font-mono space-y-3 mt-4">
                <div className="flex gap-4 items-start border-l-2 border-[#6366F1]/50 pl-3">
                  <div className="space-y-1">
                    <span className="text-[10px] text-[#94A3B8] block font-semibold uppercase">{content.features.prevLine}</span>
                    <p className="text-zinc-400">"Hey kid, are you going to help me or what?"</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start border-l-2 border-[#F472B6] pl-3">
                  <div className="space-y-1">
                    <span className="text-[10px] text-[#F472B6] block font-semibold uppercase">{content.features.currLine}</span>
                    <p className="text-[#F1F5F9]">"You must be kidding." &rarr; <span className="text-[#22D3EE]">"Că doar nu glumești."</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Batch Processing (col-span-2) */}
          <div className="md:col-span-2 bg-[#1E293B]/10 rounded-2xl border border-[#334155]/40 p-6 sm:p-8 flex flex-col justify-between hover:border-[#6366F1]/50 transition-all duration-300 shadow-xl relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#090D1A] border border-[#334155] text-[#6366F1]">
                  <ListTodo className="w-5 h-5 pointer-events-none" />
                </div>
                <span className="text-[10px] font-mono bg-[#6366F1]/10 text-indigo-400 px-2 py-0.5 rounded-full font-bold">
                  {content.features.items[1].badge}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#F1F5F9] font-sans">{content.features.items[1].title}</h3>
                <p className="text-sm text-[#94A3B8] font-sans font-light leading-relaxed">{content.features.items[1].description}</p>
              </div>
            </div>

            {/* Simulated queue checklist widget */}
            <div className="mt-6 bg-[#020617] rounded-xl p-3 border border-[#334155]/40 font-mono text-[10px] space-y-1.5 text-[#94A3B8]">
              <div className="flex items-center justify-between text-emerald-400">
                <span>s01e01_pilot.srt</span>
                <span>{content.features.done}</span>
              </div>
              <div className="flex items-center justify-between text-emerald-400">
                <span>s01e02_intro.srt</span>
                <span>{content.features.done}</span>
              </div>
              <div className="flex items-center justify-between text-indigo-400">
                <span>s01e03_climax.srt</span>
                <span className="animate-pulse">{content.features.translating}</span>
              </div>
            </div>
          </div>

          {/* Card 3: Timing Protection (col-span-2) */}
          <div className="md:col-span-2 bg-[#1E293B]/10 rounded-2xl border border-[#334155]/40 p-6 sm:p-8 flex flex-col justify-between hover:border-[#6366F1]/50 transition-all duration-300 shadow-xl relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#090D1A] border border-[#334155] text-[#22D3EE]">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full font-bold">
                  {content.features.items[2].badge}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#F1F5F9] font-sans">{content.features.items[2].title}</h3>
                <p className="text-sm text-[#94A3B8] font-sans font-light leading-relaxed">{content.features.items[2].description}</p>
              </div>
            </div>

            {/* Timing safety lock widget */}
            <div className="mt-6 p-2 rounded-xl bg-cyan-950/20 border border-cyan-800/30 text-center font-mono text-[10px] text-cyan-300">
              {content.features.locked}
              <span className="block text-[11px] font-bold text-white mt-1">{content.features.drift}</span>
            </div>
          </div>

          {/* Card 4: Subtitle Length Optimization (col-span-4) */}
          <div className="md:col-span-4 bg-[#1E293B]/10 rounded-2xl border border-[#334155]/40 p-6 sm:p-8 flex flex-col justify-between hover:border-[#F472B6]/50 transition-all duration-300 shadow-xl relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-4 flex-1">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#090D1A] border border-[#334155] text-pink-400">
                  <Heading3 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                  {content.features.items[3].badge}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#F1F5F9] font-sans">{content.features.items[3].title}</h3>
                <p className="text-sm text-[#94A3B8] font-sans font-light leading-relaxed">{content.features.items[3].description}</p>
              </div>

              {/* Subtitle reading speed optimization sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 font-mono text-xs">
                <div className="p-3 bg-[#020617] rounded-xl border border-red-500/20">
                  <span className="text-[9px] text-red-500 font-bold block uppercase mb-1">{content.features.stdDraft}</span>
                  <p className="text-[#94A3B8] leading-tight mb-2">"Das ist eine wirklich bemerkenswerte Angelegenheit..."</p>
                  <div className="h-1 bg-[#1E293B] rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[95%]" />
                  </div>
                  <span className="text-[9px] text-red-400 mt-1 block">{content.features.stdWarning}</span>
                </div>
                <div className="p-3 bg-[#020617] rounded-xl border border-emerald-500/20">
                  <span className="text-[9px] text-[#10B981] font-bold block uppercase mb-1">{content.features.subaiComp}</span>
                  <p className="text-white leading-tight mb-2">"Das ist eine beachtliche Sache..."</p>
                  <div className="h-1 bg-[#1E293B] rounded-full overflow-hidden">
                    <div className="h-full bg-[#10B981] w-[65%]" />
                  </div>
                  <span className="text-[9px] text-[#10B981] mt-1 block">{content.features.subaiScore}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Preview Mode (col-span-3) */}
          <div className="md:col-span-3 bg-[#1E293B]/10 rounded-2xl border border-[#334155]/40 p-6 sm:p-8 flex flex-col justify-between hover:border-[#6366F1]/50 transition-all duration-300 shadow-xl relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#090D1A] border border-[#334155] text-indigo-400">
                  <Eye className="w-5 h-5 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-full font-bold">
                  {content.features.items[4].badge}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#F1F5F9] font-sans">{content.features.items[4].title}</h3>
                <p className="text-sm text-[#94A3B8] font-sans font-light leading-relaxed">{content.features.items[4].description}</p>
              </div>
            </div>
          </div>

          {/* Card 6: Creator Workflow (col-span-3) */}
          <div className="md:col-span-3 bg-[#1E293B]/10 rounded-2xl border border-[#334155]/40 p-6 sm:p-8 flex flex-col justify-between hover:border-[#F472B6]/50 transition-all duration-300 shadow-xl relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#090D1A] border border-[#334155] text-pink-400">
                  <Film className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono bg-pink-500/10 text-pink-400 px-2 py-0.5 rounded-full font-bold">
                  {content.features.items[5].badge}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#F1F5F9] font-sans">{content.features.items[5].title}</h3>
                <p className="text-sm text-[#94A3B8] font-sans font-light leading-relaxed">{content.features.items[5].description}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
