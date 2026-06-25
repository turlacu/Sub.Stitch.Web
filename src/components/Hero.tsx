import { 
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

// Floating particles for a subtle desktop background texture
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const desktopParticles: Particle[] = [
  { id: 1, x: 16, y: 24, size: 120, duration: 34, delay: 0, color: "bg-[#F472B6]/10" },
  { id: 2, x: 74, y: 18, size: 150, duration: 42, delay: 2, color: "bg-[#6366F1]/10" },
  { id: 3, x: 86, y: 66, size: 110, duration: 38, delay: 4, color: "bg-[#22D3EE]/10" },
  { id: 4, x: 24, y: 72, size: 135, duration: 45, delay: 1, color: "bg-[#EC4899]/8" },
  { id: 5, x: 50, y: 38, size: 95, duration: 36, delay: 3, color: "bg-[#D946EF]/8" },
  { id: 6, x: 62, y: 82, size: 125, duration: 48, delay: 5, color: "bg-indigo-500/9" }
];

export default function Hero() {
  const { t, marketingContent } = useLanguage();
  const appUrl = "https://studio.substitch.app/";

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#030712] flex flex-col items-center justify-center min-h-[90vh]"
    >
      {/* ==================== HIGHLY POLISHED ANIMATED BACKGROUND ==================== */}
      
      {/* 1. Static mobile backdrop avoids flickering from large animated blur layers */}
      <div className="absolute inset-0 pointer-events-none md:hidden bg-[radial-gradient(circle_at_18%_18%,rgba(244,114,182,0.24),transparent_34%),radial-gradient(circle_at_82%_22%,rgba(99,102,241,0.22),transparent_36%),radial-gradient(circle_at_58%_76%,rgba(34,211,238,0.14),transparent_40%)]" />

      {/* 2. Desktop ambient field: slow, balanced, and non-distracting */}
      <div className="absolute inset-0 hidden md:block pointer-events-none bg-[radial-gradient(circle_at_22%_24%,rgba(244,114,182,0.12),transparent_30%),radial-gradient(circle_at_76%_28%,rgba(99,102,241,0.14),transparent_34%),radial-gradient(circle_at_52%_82%,rgba(34,211,238,0.08),transparent_38%)]" />

      <motion.div 
        animate={{
          x: ["-6%", "7%", "-2%", "-6%"],
          y: ["0%", "-5%", "4%", "0%"],
          opacity: [0.7, 0.95, 0.78, 0.7]
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-22%] left-[8%] hidden md:block h-[520px] w-[780px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.18),rgba(99,102,241,0.10)_42%,transparent_70%)] blur-[88px] pointer-events-none will-change-transform"
      />
      
      <motion.div 
        animate={{
          x: ["5%", "-7%", "3%", "5%"],
          y: ["4%", "-4%", "2%", "4%"],
          opacity: [0.68, 0.9, 0.74, 0.68]
        }}
        transition={{
          duration: 44,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-30%] right-[2%] hidden md:block h-[580px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),rgba(99,102,241,0.12)_42%,transparent_72%)] blur-[96px] pointer-events-none will-change-transform"
      />

      <motion.div 
        animate={{
          x: ["-18%", "118%"],
          opacity: [0, 0.34, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatDelay: 7,
          ease: "easeInOut"
        }}
        className="absolute top-[18%] left-0 hidden md:block h-px w-[42rem] bg-gradient-to-r from-transparent via-[#F472B6]/35 to-transparent pointer-events-none will-change-transform"
      />

      {/* 3. Seamless subtle background grid pattern mapping */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293733_1px,transparent_1px),linear-gradient(to_bottom,#1f293733_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30 md:opacity-60" />

      {/* 4. Desktop-only drifting bokeh circles. Mobile uses the static backdrop above for stability. */}
      <div className="absolute inset-0 hidden md:block overflow-hidden pointer-events-none select-none z-0">
        {desktopParticles.map((p) => {
          return (
            <motion.div
              key={p.id}
              initial={{ 
                x: `${p.x}vw`, 
                y: `${p.y}vh`, 
                opacity: 0.15 
              }}
              animate={{
                y: [`${p.y}vh`, `${(p.y + 8) % 100}vh`, `${p.y}vh`],
                x: [`${p.x}vw`, `${(p.x + 5) % 100}vw`, `${p.x}vw`],
                opacity: [0.08, 0.18, 0.12, 0.08],
                scale: [1, 1.06, 0.98, 1]
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
                className={`rounded-full ${p.color} blur-2xl`}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden h-48 md:block pointer-events-none bg-gradient-to-t from-[#030712] to-transparent" />

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
