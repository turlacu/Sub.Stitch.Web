import { Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { marketingContent: content, t } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-[#090D1A] relative border-b border-[#334155]/20">
      
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#F472B6]/10 to-[#6366F1]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="inline-block mb-2 text-xs font-bold tracking-widest text-[#6366F1] uppercase font-mono px-3 py-1 bg-[#6366F1]/10 rounded-full border border-[#6366F1]/20">
            {content.pricing.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F9] font-sans tracking-tight animate-fade-in">
            {content.pricing.title}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] font-sans font-light leading-relaxed">
            {content.pricing.subtitle}
          </p>
        </Reveal>

        {/* Pricing Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {content.pricing.tiers.map((tier, index) => {
            const isHighlighted = tier.id === "standard";
            return (
              <motion.div
                key={tier.id}
                id={`pricing-tier-${tier.id}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: isHighlighted ? -7 : -5 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                  isHighlighted
                    ? "bg-[#1E293B]/40 border-2 border-[#F472B6]/80 shadow-[0_0_30px_rgba(244,114,182,0.15)]"
                    : "bg-[#1E293B]/10 border border-[#334155]/60 hover:border-[#F472B6]/30 shadow-lg"
                }`}
              >
                {/* Visual Glow behind highlight card */}
                {isHighlighted && (
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 via-transparent to-indigo-500/10 rounded-3xl pointer-events-none z-0" />
                )}

                {/* Card Floating Badge */}
                {tier.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-[#F472B6] to-[#6366F1] text-slate-950 shadow-md">
                    {tier.badge}
                  </span>
                )}

                <div className="relative z-10 space-y-6">
                  {/* Tier Title details */}
                  <div className="space-y-1.5 text-center">
                    <h3 className="text-lg font-bold text-[#F1F5F9] uppercase tracking-wide font-sans">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#94A3B8] font-sans font-light">
                      {tier.description}
                    </p>
                  </div>

                  {/* Tier Price */}
                  <div className="text-center py-4 border-y border-[#334155]/40 select-none">
                     <div className="flex items-baseline justify-center">
                      <span className="text-4xl sm:text-5xl font-black text-[#F1F5F9] tracking-tight font-sans">
                        {tier.price}
                      </span>
                     </div>
                  </div>

                  {/* Tier features bullet list mapping */}
                  <ul className="space-y-3.5">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#94A3B8] font-sans font-light leading-snug">
                        <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tier Button CTA */}
                <div className="relative z-10 mt-8 pt-4">
                  <motion.a
                    id={`pricing-btn-${tier.id}`}
                    href="https://studio.substitch.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.98 }}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 ${
                      isHighlighted
                        ? "text-slate-900 bg-gradient-to-r from-[#F472B6] to-[#6366F1] shadow-[0_0_15px_rgba(244,114,182,0.3)] hover:shadow-[0_0_20px_rgba(244,114,182,0.5)]"
                        : "text-[#F1F5F9] bg-[#1E293B]/40 hover:bg-[#1E293B]/80 border border-[#334155]/60 hover:border-[#F472B6]/40"
                    }`}
                  >
                    <span>{t("openApp")}</span>
                    <Sparkles className="w-4 h-4 shadow-sm" />
                  </motion.a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Custom enterprise contact helper */}
        <Reveal className="mt-16 text-center text-sm text-[#94A3B8] relative z-10" delay={0.08}>
          <p className="font-sans font-light">
            {content.pricing.footerText}{" "}
            <a
              id="pricing-contact-link"
              href="#contact"
              className="text-[#F472B6] font-semibold hover:underline"
            >
              {content.pricing.contactUs}
            </a>
          </p>
        </Reveal>

      </div>
    </section>
  );
}
