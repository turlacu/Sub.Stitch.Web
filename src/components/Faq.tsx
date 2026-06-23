import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { marketingContent: content } = useLanguage();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#020617] relative border-b border-[#334155]/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header copy */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block mb-2 text-xs font-bold tracking-widest text-[#22D3EE] uppercase font-mono px-3 py-1 bg-[#22D3EE]/10 rounded-full border border-[#22D3EE]/20">
            {content.faq.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F9] font-sans tracking-tight">
            {content.faq.title}
          </h2>
          <p className="text-base text-[#94A3B8] font-sans font-light">
            {content.faq.subtitle}
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {content.faq.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`bg-[#1E293B]/10 rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#F472B6]/60 bg-[#1E293B]/25 shadow-lg shadow-pink-950/5"
                    : "border-[#334155]/40 hover:border-[#334155]/80"
                }`}
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none select-none group"
                >
                  <div className="flex items-start gap-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${
                      isOpen ? "text-[#F472B6]" : "text-[#94A3B8] group-hover:text-white"
                    }`} />
                    <span className={`text-base font-bold leading-snug font-sans transition-colors ${
                      isOpen ? "text-[#F1F5F9]" : "text-[#94A3B8] group-hover:text-[#F1F5F9]"
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 p-1 rounded-lg bg-[#020617] border border-[#334155]/50 text-[#94A3B8]">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-[#94A3B8]" />}
                  </div>
                </button>

                {/* Accordion body panels */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-1 sm:px-6 border-t border-[#334155]/30">
                        <p className="text-sm text-[#94A3B8] font-sans font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Question Footer badge */}
        <div className="mt-12 text-center bg-[#1E293B]/10 rounded-2xl border border-[#334155]/40 p-4 max-w-lg mx-auto text-xs sm:text-sm text-[#94A3B8]">
          {content.faq.footerPrefix}
          <a
            id="faq-app-link"
            href="https://sub.turlacu.ro/"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="text-[#F472B6] font-bold hover:underline"
          >
            {content.faq.directApp}
          </a>
          {content.faq.footerSuffix}
        </div>

      </div>
    </section>
  );
}
