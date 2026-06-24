import { useState, useEffect } from "react";
import { 
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

// Floating particles for our highly visible animated background
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function Hero() {
  const { t, marketingContent } = useLanguage();
  const appUrl = "https://studio.substitch.app/";

  // Background animated nodes
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate organic drifting high-vibrancy glowing bokeh circles
    const items: Particle[] = [
      { id: 1, x: 10, y: 15, size: 280, duration: 25, delay: 0, color: "bg-[#F472B6]/20" },
      { id: 2, x: 78, y: 12, size: 320, duration: 32, delay: 1, color: "bg-[#6366F1]/18" },
      { id: 3, x: 85, y: 65, size: 240, duration: 28, delay: 2, color: "bg-[#22D3EE]/22" },
      { id: 4, x: 12, y: 70, size: 300, duration: 30, delay: 3, color: "bg-[#EC4899]/18" },
      { id: 5, x: 45, y: 35, size: 260, duration: 22, delay: 1, color: "bg-[#D946EF]/20" },
      { id: 6, x: 55, y: 78, size: 310, duration: 35, delay: 4, color: "bg-indigo-600/18" },
      { id: 7, x: 28, y: 45, size: 220, duration: 26, delay: 2, color: "bg-pink-500/18" },
      { id: 8, x: 92, y: 38, size: 250, duration: 29, delay: 1, color: "bg-cyan-500/20" }
    ];
    setParticles(items);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#030712] flex flex-col items-center justify-center min-h-[90vh]"
    >
      {/* ==================== HIGHLY POLISHED ANIMATED BACKGROUND ==================== */}
      
      {/* 1. Slowly moving cosmic neon gradients with improved visibility */}
      <motion.div 
        animate={{
          scale: [1, 1.25, 0.85, 1],
          x: [0, 50, -45, 0],
          y: [0, -60, 30, 0]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#6366F1]/20 via-[#4F46E5]/18 to-[#F472B6]/28 blur-[100px] pointer-events-none" 
      />
      
      <motion.div 
        animate={{
          scale: [1, 0.82, 1.22, 1],
          x: [0, -75, 50, 0],
          y: [0, 45, -65, 0]
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-1/4 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-[#22D3EE]/22 via-[#0891B2]/15 to-[#6366F1]/22 blur-[110px] pointer-events-none" 
      />

      <motion.div 
        animate={{
          scale: [0.9, 1.15, 1, 0.9],
          x: [-30, 30, -15, -30],
          y: [30, -30, 50, 30]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-10 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#EC4899]/20 to-[#D946EF]/22 blur-[120px] pointer-events-none animate-pulse" 
      />

      {/* 2. Seamless subtle background grid pattern mapping */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293733_1px,transparent_1px),linear-gradient(to_bottom,#1f293733_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" />

      {/* 3. Floating, drifting interactive vibrant bokeh circles (Fully visible, no text tags) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {particles.map((p) => {
          return (
            <motion.div
              key={p.id}
              initial={{ 
                x: `${p.x}vw`, 
                y: `${p.y}vh`, 
                opacity: 0.15 
              }}
              animate={{
                y: [`${p.y}vh`, `${(p.y + 15) % 100}vh`, `${p.y}vh`],
                x: [`${p.x}vw`, `${(p.x + 8) % 100}vw`, `${p.x}vw`],
                opacity: [0.15, 0.38, 0.25, 0.15],
                scale: [1, 1.12, 0.92, 1]
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute pointer-events-none"
            >
              <div 
                style={{ width: p.size, height: p.size }} 
                className={`rounded-full ${p.color} blur-3xl`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* ==================== CONTENT CORE ==================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Sub title / Live status pill */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-slate-800 text-xs font-semibold text-slate-200 shadow-xl backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F472B6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F472B6]"></span>
          </span>
          <span className="text-pink-300 font-mono tracking-widest uppercase text-[10px]">{t("heroBadge")}</span>
        </motion.div>

        {/* Hero Headline */}
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight leading-[1.05] text-white"
          >
            {t("heroTitle1")} <br />
            {t("heroTitle2")} <span className="bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#6366F1] bg-clip-text text-transparent drop-shadow-sm font-sans">{t("heroTitle3")}</span>
          </motion.h1>

          {/* Value props subtitle text */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-sans font-light leading-relaxed"
          >
            {t("heroSubtitle")}
          </motion.p>
        </div>

        {/* Primary CTA controls bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <a
            href={appUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-slate-950 text-sm font-bold rounded-xl bg-gradient-to-r from-[#F472B6] to-[#6366F1] shadow-[0_0_25px_rgba(244,114,182,0.35)] hover:shadow-[0_0_35px_rgba(244,114,182,0.6)] hover:scale-[1.02] transition-all duration-300"
          >
            <span>{t("openApp")}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-[#F1F5F9] text-sm font-semibold rounded-xl bg-slate-950/85 hover:bg-slate-900 border border-slate-800 hover:border-pink-500/35 transition-all duration-200"
          >
            <span>{t("ctaViewPricing")}</span>
          </a>
        </motion.div>

        {/* Trust credentials badges horizontal row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-12 border-t border-slate-800/50 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center select-none"
        >
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-black text-[#F1F5F9] font-mono">152+</p>
            <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">{t("metricLanguages")}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-black text-[#F1F5F9] font-mono">0ms</p>
            <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">{t("metricTiming")}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-black text-[#F1F5F9] font-mono">99.8%</p>
            <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">{t("metricMatchRate")}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-black text-[#F1F5F9] font-mono">&lt; 15s</p>
            <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">{t("metricAverageParse")}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.75 }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2.5 rounded-lg border border-slate-800/80 bg-slate-950/55 px-4 py-2 text-center sm:text-left backdrop-blur-sm">
            <span className="inline-flex h-7 items-center rounded-md bg-[#F472B6]/12 px-2.5 text-xs font-black font-mono text-pink-300 ring-1 ring-[#F472B6]/25">
              100
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">
              {marketingContent.pricing.creditNote}
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
