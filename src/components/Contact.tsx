import { Mail, MessageSquare, HelpCircle, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { marketingContent: content } = useLanguage();
  const contactEmail = "turlacu@live.com";
  const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Sub.Stitch website inquiry")}`;

  return (
    <section id="contact" className="py-24 bg-[#090D1A] relative border-b border-[#334155]/20">
      
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-[#6366F1]/10 to-[#F472B6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block mb-2 text-xs font-bold tracking-widest text-[#F472B6] uppercase font-mono px-3 py-1 bg-[#F472B6]/10 rounded-full border border-[#F472B6]/20">
            {content.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F9] font-sans tracking-tight">
            {content.contact.title}
          </h2>
          <p className="text-base text-[#94A3B8] font-sans font-light">
            {content.contact.subtitle}
          </p>
        </Reveal>

        {/* Contact panel card */}
        <Reveal className="bg-[#1E293B]/20 border border-[#334155] rounded-3xl overflow-hidden shadow-2xl shadow-black/45 grid grid-cols-1 md:grid-cols-12 max-w-3xl mx-auto relative">
          
          {/* Card Left: quick info items */}
          <div className="md:col-span-5 bg-[#020617]/50 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#334155]/60">
            <div className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#F1F5F9]">{content.contact.inquiries}</h3>
                <p className="text-xs text-[#94A3B8]">{content.contact.replyTime}</p>
              </div>

              <div className="space-y-5">
                <div className="flex gap-3 group/item">
                  <div className="p-2 rounded-xl bg-[#1E293B]/60 text-[#F472B6] border border-[#334155]/60 h-fit">
                    <MessageSquare className="w-4 h-4 transition-transform duration-200 group-hover/item:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F1F5F9] uppercase font-mono tracking-wider">{content.contact.feedbackTitle}</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">{content.contact.feedbackDesc}</p>
                  </div>
                </div>

                <div className="flex gap-3 group/item">
                  <div className="p-2 rounded-xl bg-[#1E293B]/60 text-[#22D3EE] border border-[#334155]/60 h-fit">
                    <Mail className="w-4 h-4 transition-transform duration-200 group-hover/item:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F1F5F9] uppercase font-mono tracking-wider">{content.contact.enterpriseTitle}</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">{content.contact.enterpriseDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email signature */}
            <div className="pt-8 border-t border-[#334155]/40 text-[11px] font-mono text-[#94A3B8] flex items-center gap-1.5 mt-8 md:mt-0">
              <HelpCircle className="w-3.5 h-3.5 text-pink-400" />
              <span>{content.contact.emailSign}</span>
            </div>
          </div>

          {/* Card Right: Direct email contact */}
          <div className="md:col-span-7 p-8 bg-[#040815]/40 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest uppercase text-[#F472B6]">
                  <Mail className="w-3.5 h-3.5" />
                  {content.contact.emailBlockLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {content.contact.emailBlockTitle}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                  {content.contact.emailBlockDesc}
                </p>
              </div>

              <div className="rounded-2xl border border-[#334155]/70 bg-[#020617]/65 p-5">
                <p className="text-[11px] uppercase tracking-widest font-mono text-[#64748B] mb-2">
                  {content.contact.emailBlockAddressLabel}
                </p>
                <a
                  href={mailtoHref}
                  className="text-lg sm:text-xl font-bold text-[#F1F5F9] hover:text-[#F472B6] transition-colors break-all"
                >
                  {contactEmail}
                </a>
              </div>

              <motion.a
                id="contact-email-link"
                href={mailtoHref}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl text-slate-950 bg-gradient-to-r from-[#F472B6] to-[#6366F1] shadow-[0_0_15px_rgba(244,114,182,0.25)] hover:shadow-[0_0_20px_rgba(244,114,182,0.45)] hover:scale-[1.01] transition-all duration-300"
              >
                <span>{content.contact.emailBlockCta}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </motion.a>
            </div>
          </div>

        </Reveal>

      </div>
    </section>
  );
}
